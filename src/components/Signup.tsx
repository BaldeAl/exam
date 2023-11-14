import React from 'react';
import Form from './Form';
import { Router, useRouter } from 'next/router';
import AuthForm from './AuthForm';
import Link from 'next/link';

function Signup() {
  return (
    <div>
      <AuthForm
        onSubmitUrl="http://localhost:3000/api/auth/signup"
        formName="Signup"
        buttonName="Signup"
      />
      ;
      <Link href={'/auth/login'}>
        <span className="hover:underline">Do you have an account?</span>
      </Link>
    </div>
  );
}

export default Signup;
