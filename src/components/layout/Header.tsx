import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import LanguageToggle from '../ui/LanguageToggle';
import ThemeToggle from '../ui/ThemeToggle';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-background text-primary shadow-sm border-border border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <div className="flex flex-row items-center gap-2 mt-6">
          <img
            src="src\assets\svg\logo.svg"
            alt="Survey Infinity"
            className="w-12 lg:w-16 mx-auto mb-6"
          />
          <h1 className="text-primary text-xl font-bold mb-6 text-center">
            Survey <span className="text-foreground text-[16px]">Infinity</span>
          </h1>
        </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 text-secondary">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'not-active')}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : 'not-active')}
            >
              About us
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) => (isActive ? 'active' : 'not-active')}
            >
              Features
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? 'active' : 'not-active')}
            >
              FAQs
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) => (isActive ? 'active' : 'not-active')}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : 'not-active')}
            >
              Contact us
            </NavLink>
          </nav>
          <div className="hidden lg:flex">
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <Button variant="default" asChild className="hidden lg:block">
            <Link to="/signup">Register now</Link>
          </Button>

          {/* for tablet && mobile design */}

          <div className="lg:hidden mr-2 bg-background text-primary">
            <DropdownMenu open={isDropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-none rounded-full outline-none p-0"
                >
                  <Menu className="h-6 w-6 curser-pointer" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" flex flex-col items-start p-4 mt-1 bg-background text-primary shadow-shadow">
                <nav className="flex flex-col gap-3 w-48 h-[75vh] p-2 text-secondary ">
                  <DropdownMenuItem>
                    <NavLink to="/">Home</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to="/about">About us</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to="/feature">Features</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to="/faq">FAQs</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to="/pricing">Pricing</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink to="/contact">Contact us</NavLink>
                  </DropdownMenuItem>
                </nav>
                <div className="flex flex-row justify-center gap-6 items-center">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <div className="pb-2 px-2 mt-1">
                  <Button variant="default" size="lg" className="w-full">
                    <Link to="/signup">Register now</Link>
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
