import { FC, MouseEventHandler, useEffect, useState } from 'react';

interface AvatarProps {
  altText?: string;
  className?: string;
  height?: number;
  imgUrl?: string;
  width?: number;
  onClick?: MouseEventHandler<HTMLImageElement>;
  defaultText?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    altText = '',
    className = '',
    height = 32,
    imgUrl = '',
    onClick = () => undefined,
    width = 32,
    defaultText
  } = props;

  const [failedToLoadImg, setFailedToLoadImg] = useState<boolean>(false);

  useEffect(() => {
    imgUrl && setFailedToLoadImg(false);
  }, [imgUrl]);

  const textFirstChar = String(defaultText || altText).toLocaleUpperCase()[0];

  return imgUrl && !failedToLoadImg ? (
    <img
      alt={altText || `Avatar for ${defaultText}`}
      className={`rounded-full object-contain ${className} cursor-pointer`}
      onClick={onClick}
      onError={() => setFailedToLoadImg(true)}
      referrerPolicy="no-referrer"
      src={imgUrl}
      style={{ height, width, minWidth: width, minHeight: height }}
    />
  ) : (
    <div
      className={`flex items-center justify-center bg-primary-darker text-white rounded-full ${className}`}
      onClick={onClick}
      style={{ width, height, minWidth: width, minHeight: height }}
    >
      <span style={{ fontSize: width / 2 }}>{textFirstChar || '-'}</span>
    </div>
  );
};
