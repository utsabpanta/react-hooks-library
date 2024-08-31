import React from 'react';
import { useForm } from '../src';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const UseFormExample: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } = useForm<FormData>(
    {
      username: '',
      email: '',
      password: '',
    },
    (values) => {
      const errors: Partial<FormData> = {};
      if (!values.username) {
        errors.username = 'Username is required';
      }
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      return errors;
    }
  );

  const onSubmit = (data: FormData) => {
    // Here we would typically send the data to an API
    console.log('Form submitted with data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseFormExample;