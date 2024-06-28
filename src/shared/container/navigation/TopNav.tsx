import React from 'react';
import NavIcon from '../icon/NavIcon';
import { Button } from 'antd';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const TopNav = () => {
  return (
    <nav className="container flex h-20 items-center justify-between bg-sea-cream">
      <NavIcon />
      <div className="flex items-center gap-3">
        <SignedOut>
          <SignInButton>
            <button className="h-12 rounded-none bg-sea-brown px-6 py-3 text-body-2 font-medium text-white">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="h-12 rounded-none border-2 border-sea-brown bg-sea-cream px-6 py-3 text-body-2 font-medium text-sea-brown">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
