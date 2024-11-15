import { render, screen, fireEvent } from '@testing-library/react';
import { Avatar } from '@components/Avatar';

describe('Avatar Component', () => {
  it('renders an image when imgUrl is provided and loading succeeds', () => {
    render(
      <Avatar
        imgUrl="https://example.com/avatar.jpg"
        altText="Test Avatar"
        className="custom-class"
        height={50}
        width={50}
      />
    );

    const image = screen.getByAltText('Test Avatar');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(image).toHaveAttribute(
      'class',
      'rounded-full object-contain custom-class cursor-pointer'
    );
    expect(image).toHaveStyle({
      height: '50px',
      width: '50px',
      minWidth: '50px',
      minHeight: '50px'
    });
  });

  it('renders fallback text when imgUrl is not provided', () => {
    render(<Avatar defaultText="John" />);

    const fallbackDiv = screen.getByText('J');
    expect(fallbackDiv).toBeInTheDocument();
    expect(fallbackDiv).toHaveTextContent('J');
  });

  it('renders fallback text when image fails to load', () => {
    render(
      <Avatar imgUrl="https://example.com/invalid.jpg" defaultText="Fallback" />
    );

    const image = screen.getByAltText('Avatar for Fallback');
    expect(image).toBeInTheDocument();
    fireEvent.error(image);

    const fallbackDiv = screen.getByText('F');
    expect(fallbackDiv).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    render(
      <Avatar
        imgUrl="https://example.com/avatar.jpg"
        onClick={onClickMock}
        altText="Clickable Avatar"
      />
    );

    const image = screen.getByAltText('Clickable Avatar');
    fireEvent.click(image);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders fallback with the first character of altText if defaultText is not provided', () => {
    render(<Avatar altText="Alice" />);

    const fallbackDiv = screen.getByText('A');
    expect(fallbackDiv).toBeInTheDocument();
  });

  it('renders fallback with a dash if neither imgUrl nor text is provided', () => {
    render(<Avatar />);

    const fallbackDiv = screen.getByText('-');
    expect(fallbackDiv).toBeInTheDocument();
  });
});
