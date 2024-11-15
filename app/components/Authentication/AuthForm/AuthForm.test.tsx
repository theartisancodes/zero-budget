import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useCreateUser } from '@hooks/mutations/useCreateUser';
import AuthForm, { AuthFormProps } from '@components/Authentication/AuthForm';

jest.mock('@auth0/auth0-react');
jest.mock('@hooks/mutations/useCreateUser');

const mockLoginWithRedirect = jest.fn();
const mockCreateUser = jest.fn();

const mockUseAuth0 = useAuth0 as jest.Mock;
const mockUseCreateUser = useCreateUser as jest.Mock;

mockUseAuth0.mockReturnValue({
  loginWithRedirect: mockLoginWithRedirect,
  user: null,
  isAuthenticated: false
});

mockUseCreateUser.mockReturnValue({
  createUser: mockCreateUser
});

const renderComponent = (props: AuthFormProps) => {
  render(<AuthForm {...props} />);
};

describe('AuthForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all inputs for signup', () => {
    renderComponent({ authenticationType: 'signup' });

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it('renders minimal inputs for login', () => {
    renderComponent({ authenticationType: 'login' });

    expect(screen.queryByLabelText(/first name/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/last name/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it('validates form inputs before submission', async () => {
    renderComponent({ authenticationType: 'signup' });

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(screen.getByText(/username is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it('calls loginWithRedirect for signup', async () => {
    renderComponent({ authenticationType: 'signup' });

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' }
    });

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(mockLoginWithRedirect).toHaveBeenCalledWith({
        authorizationParams: {
          screen_hint: 'signup'
        }
      });
    });
  });

  it('calls loginWithRedirect for login', async () => {
    renderComponent({ authenticationType: 'login' });

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' }
    });

    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(mockLoginWithRedirect).toHaveBeenCalled();
    });
  });

  it('calls createUser when user is authenticated', async () => {
    mockUseAuth0.mockReturnValueOnce({
      loginWithRedirect: mockLoginWithRedirect,
      user: {
        nickname: 'testuser',
        email: 'test@example.com',
        given_name: 'Test',
        family_name: 'User'
      },
      isAuthenticated: true
    });

    renderComponent({ authenticationType: 'signup' });

    await waitFor(() => {
      expect(mockCreateUser).toHaveBeenCalledWith({
        variables: {
          userName: 'testuser',
          email: 'test@example.com',
          firstName: 'Test',
          lastName: 'User'
        }
      });
    });
  });

  it('displays an error message when createUser fails', async () => {
    mockCreateUser.mockRejectedValue(new Error('Failed to create user'));

    mockUseAuth0.mockReturnValueOnce({
      loginWithRedirect: mockLoginWithRedirect,
      user: { nickname: 'testuser', email: 'test@example.com' },
      isAuthenticated: true
    });

    renderComponent({ authenticationType: 'signup' });

    await waitFor(() => {
      expect(
        screen.getByText(/failed to create user record/i)
      ).toBeInTheDocument();
    });
  });
});
