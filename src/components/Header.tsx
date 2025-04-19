
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

const Header: React.FC = () => {
  return (
    <header className="border-b border-white/10 py-4 px-6 bg-background/95 backdrop-blur-md sticky top-0 z-10">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
            AI Marketplace
          </span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex items-center gap-6">
            <NavigationMenuItem>
              <Link to="/dashboard" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
                Dashboard
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/pricing" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
                Pricing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors">
                About
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button size="sm" className="premium-gradient" asChild>
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
