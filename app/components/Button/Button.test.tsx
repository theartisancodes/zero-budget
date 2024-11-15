import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@components/Button';
import '@testing-library/jest-dom';
import { Add } from '@mui/icons-material';

describe('Button Component', () => {
  it('renders the button with default styles', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('flex gap-4 p-4 font-normal rounded-xl');
  });

  it('renders the button with primary state styles', () => {
    render(<Button state="primary">Primary Button</Button>);

    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toHaveClass(
      'bg-primary text-white hover:bg-primary-dark font-semibold'
    );
  });

  it('renders the button with secondary state styles', () => {
    render(<Button state="secondary">Secondary Button</Button>);

    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass(
      'bg-secondary text-white hover:bg-secondary-dark'
    );
  });

  it('applies custom width when provided', () => {
    render(<Button width={200}>Custom Width</Button>);

    const button = screen.getByRole('button', { name: /custom width/i });
    expect(button).toHaveClass('w-[200px]');
  });

  it('renders an icon when provided', () => {
    render(<Button icon={Add}>Button with Icon</Button>);

    const button = screen.getByRole('button', { name: /button with icon/i });
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('renders the button with outline state styles', () => {
    render(<Button state="outline">Outline Button</Button>);

    const button = screen.getByRole('button', { name: /outline button/i });
    expect(button).toHaveClass(
      'bg-transparent border border-gray-500 text-gray-500 hover:border-primary'
    );
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole('button', { name: /clickable button/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies additional classes when provided', () => {
    render(<Button className="custom-class">Styled Button</Button>);

    const button = screen.getByRole('button', { name: /styled button/i });
    expect(button).toHaveClass('custom-class');
  });

  it('renders with the correct icon size', () => {
    render(
      <Button icon={Add} iconSize="small">
        Small Icon Button
      </Button>
    );

    const button = screen.getByRole('button', { name: /small icon button/i });
    const icon = button.querySelector('svg');
    expect(icon).toHaveAttribute('data-testid', 'AddIcon');
  });
});
