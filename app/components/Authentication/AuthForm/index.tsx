import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useCreateUser } from '@hooks/mutations/useCreateUser';
import Input from '@components/Input';
import Button from 'app/components/Button';
import { showError } from 'app/components/ToastNotifications';

export interface AuthFormProps {
  authenticationType: 'login' | 'signup';
}

const AuthForm = ({ authenticationType }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const { createUser } = useCreateUser();

  useEffect(() => {
    if (isAuthenticated && user) {
      // Check if the user already exists
      createUserIfNotExists(user);
    }
  }, [isAuthenticated, user]);

  const createUserIfNotExists = async (auth0User: any) => {
    try {
      await createUser({
        variables: {
          userName: auth0User.nickname || auth0User.name,
          email: auth0User.email,
          firstName: auth0User.given_name || '',
          lastName: auth0User.family_name || ''
        }
      });
    } catch (error) {
      showError('Failed to create user record. Please try again.');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = { ...errors };
    if (!formData.userName) validationErrors.userName = 'Username is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';

    setErrors(validationErrors);

    if (
      !validationErrors.userName &&
      !validationErrors.email &&
      !validationErrors.password
    ) {
      if (authenticationType === 'signup') {
        await loginWithRedirect({
          authorizationParams: {
            screen_hint: 'signup'
          }
        });
      } else {
        await loginWithRedirect();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {authenticationType === 'signup' && (
        <>
          <Input
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
        </>
      )}
      <Input
        label="Username"
        name="userName"
        type="text"
        value={formData.userName}
        onChange={handleInputChange}
        error={errors.userName}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        error={errors.password}
        className="mb-6"
      />

      <Button
        state="primary"
        className="mt-8 font-semibold w-full justify-center"
        type="submit"
      >
        {authenticationType === 'signup' ? 'Sign Up' : 'Sign In'}
      </Button>
    </form>
  );
};

export default AuthForm;
