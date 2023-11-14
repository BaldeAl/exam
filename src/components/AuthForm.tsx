import React, { useState } from 'react';
import { useRouter } from 'next/router';

type AuthFormProps = {
  onSubmitUrl: string;
  formName: string;
  buttonName: string;
};
const AuthForm = ({ onSubmitUrl, formName, buttonName }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch(onSubmitUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const result = await response.json();
      localStorage.setItem('token', result.token);
      router.push('/');
    } else {
      // handle error
    }
  };

  return (
    <div className="w-full space-y-4 p-4 rounded-lg bg-gray-500">
      <h1 className="text-2xl font-bold">{formName}</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded-lg text-black"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded-lg text-black"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
          type="submit"
        >
          {buttonName}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
