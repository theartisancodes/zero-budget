import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MDAlert from './index';

describe('MDAlert Component', () => {
  test('renders alert with default color (info)', () => {
    render(<MDAlert>Test Alert</MDAlert>);
    const alertElement = screen.getByText('Test Alert');

    expect(alertElement).toBeInTheDocument();
    expect(alertElement.parentElement).toHaveStyle(`color: white`);
  });

  // test('renders alert with a custom color (success)', () => {
  //   render(<MDAlert color="success">Success Alert</MDAlert>);
  //   const alertElement = screen.getByText('Success Alert');
  //
  //   expect(alertElement).toBeInTheDocument();
  //   expect(alertElement.parentElement).toHaveAttribute(
  //     'ownerState',
  //     expect.stringContaining('success')
  //   );
  // });
  //
  // test('renders dismissible alert with close icon', () => {
  //   render(<MDAlert dismissible>Dismissible Alert</MDAlert>);
  //   const closeIcon = screen.getByText('×');
  //
  //   expect(closeIcon).toBeInTheDocument();
  // });
  //
  // test('triggers fade-out effect when close icon is clicked', async () => {
  //   render(<MDAlert dismissible>Dismissible Alert</MDAlert>);
  //   const closeIcon = screen.getByText('×');
  //
  //   fireEvent.click(closeIcon);
  //   await waitFor(() => {
  //     expect(screen.getByText('Dismissible Alert').parentElement).toHaveStyle(
  //       'opacity: 0'
  //     );
  //   });
  // });
  //
  // test('unmounts alert after fading out', async () => {
  //   render(<MDAlert dismissible>Dismissible Alert</MDAlert>);
  //   const closeIcon = screen.getByText('×');
  //
  //   fireEvent.click(closeIcon);
  //
  //   // Wait for the alert to unmount after the fade-out
  //   await waitFor(
  //     () => {
  //       expect(screen.queryByText('Dismissible Alert')).not.toBeInTheDocument();
  //     },
  //     { timeout: 1000 }
  //   );
  // });
});
