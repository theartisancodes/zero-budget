'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import clsx from 'clsx';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation (can be expanded)
    const validationErrors = { ...errors };
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';

    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      // Form is valid - handle form submission here (e.g., API call)
    }
  };

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'w-full max-w-lg p-8 mx-auto',
        'bg-white shadow-lg rounded-lg'
      )}
    >
      <h2 className="mb-6 text-2xl font-bold">Log In</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-3 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full p-3 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-md`}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
        <button
          onClick={() => signIn('google')}
          className="p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
