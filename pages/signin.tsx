import React from 'react';
import { NextPage } from 'next';
import { Header, SignInForm } from '../src/app/features';
import { ToastContainer } from '../src/app/components';

const Signin: NextPage = () => (
  <div className="h-screen bg-gray-100">
    <Header />
    <ToastContainer />
    <div className="max-w-7xl mx-auto flex py-16">
      <SignInForm />
    </div>
  </div>
);

export default Signin;
