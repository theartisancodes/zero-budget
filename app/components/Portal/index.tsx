import { ReactNode, useEffect, useState, FC } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
  portalTargetId?: string;
}

const Portal: FC<PortalProps> = ({
  children,
  portalTargetId = 'portal-root'
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  const portalTarget = document.getElementById(portalTargetId);
  if (!portalTarget) {
    return null;
  }

  return ReactDOM.createPortal(children, portalTarget);
};

export default Portal;
