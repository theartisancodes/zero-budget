'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import clsx from 'clsx';

const Signup = () => {
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    userName: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = { ...errors };
    if (!formData.userName) validationErrors.userName = 'Username is required';
    if (!formData.phoneNumber) {
      validationErrors.phoneNumber = 'Phone number is required';
    }
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.password) validationErrors.password = 'Password is required';

    setErrors(validationErrors);

    if (
      !validationErrors.userName &&
      !validationErrors.phoneNumber &&
      !validationErrors.email &&
      !validationErrors.password
    ) {
      // Form is valid - handle form submission here (e.g., API call)
    }
  };

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'w-full max-w-xl p-8 mx-auto',
        'bg-white shadow-lg rounded-lg'
      )}
    >
      <h2 className="mb-6 text-2xl font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleInputChange}
            className={`w-full p-3 border ${
              errors.userName ? 'border-red-500' : 'border-gray-300'
            } rounded-md`}
          />
          {errors.userName && (
            <span className="text-red-500 text-sm">{errors.userName}</span>
          )}
        </div>
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
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`w-full p-3 border ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            } rounded-md`}
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
