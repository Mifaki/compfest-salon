import React from 'react';
import NavIcon from '../icon/NavIcon';
import { Button } from 'antd';

const TopNav = () => {
  return (
    <nav className="container flex h-20 items-center justify-between bg-sea-cream">
      <NavIcon />
      <div className="flex items-center gap-3">
        <Button className="h-12 rounded-none bg-sea-brown px-6 py-3 text-body-2 font-medium text-white">
          Sign In
        </Button>
        <Button className="h-12 rounded-none border-2 border-sea-brown bg-sea-cream px-6 py-3 text-body-2 font-medium text-sea-brown">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default TopNav;
