import React from 'react';
import Form from './Form';
import { Router, useRouter } from 'next/router';
import AuthForm from './AuthForm';
import Link from 'next/link';

function Login() {
  return (
    <div>
      <AuthForm
        onSubmitUrl="http://localhost:3000/api/auth/login"
        formName="Login"
        buttonName="Login"
      />
      <Link href={'/auth/signup'}>
        <span className="hover:underline">You dont have an account?</span>
      </Link>
    </div>
  );
}

export default Login;
