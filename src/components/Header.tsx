
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="border-b border-border py-4 px-6 bg-background sticky top-0 z-10">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-primary">AI Marketplace</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/">Browse Agents</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
