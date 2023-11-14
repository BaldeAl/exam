import React from 'react';
import { useRouter } from 'next/router';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');

    router.push('/');
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
