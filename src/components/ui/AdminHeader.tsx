import React, { useState } from 'react';
import Slogan from '@/assets/svg/slogan.svg?react';
import Contain from '@/assets/svg/Container.svg?react';
import { Input } from '@/components/ui/input';
import { Search, Bell, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from './button';

export function AdminHeader() {
  const [opened, setOpened] = useState(false);

  return (
    <header className=" md:container relative w-full bg-white border-b shadow-sm ">
      {/* top bar */}
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center px-4 py-2">
        {/* left side */}
        <div className="flex items-center gap-2">
          {/* logo */}
          <Slogan className="w-28 h-auto md:w-40" />
        </div>

        {/* center (nav links) – only visible md+ */}
        <nav className="hidden md:flex   space-x-2 text-sm lg:space-x-6 lg:text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active ' : 'not-active ')}
          >
            Home
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? 'active' : 'not-active')}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/analysis"
            className={({ isActive }) => (isActive ? 'active' : 'not-active')}
          >
            Analysis
          </NavLink>
        </nav>
        
        <div className="px-4 sm:pb-4 md:pb-0 hidden  md:block  ">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input type="text" placeholder="Search" className="pl-10 w-full" />
          </div>
        </div>
        {/* right side */}
        <div className="flex items-center gap-4">
          <button aria-label="Notifications">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          <Contain className="w-8 h-8" />

          {/* duplicate menu button for md+ if you want toggle behavior, else hide */}
          <Button
            onClick={() => setOpened((o) => !o)}
            className="md:hidden p-2 bg-transparent hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-primary " />
          </Button>
        </div>

      </div>

      {/* mobile dropdown (only when opened) */}
      {opened && (
        <div className="absolute top-full left-0 w-full bg-white z-50 border-t shadow-sm">
          <nav className="flex flex-col px-4 py-2 gap-2 md:hidden w-fit">
            <NavLink to="/" className="py-1 px-2 rounded hover:bg-gray-100">
              Home
            </NavLink>
            <NavLink
              to="/pricing"
              className="py-1 px-2 rounded hover:bg-gray-100"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/analysis"
              className="py-1 px-2 rounded hover:bg-gray-100"
            >
              Analysis
            </NavLink>
          </nav>

          {/* mobile search */}
          <div className="px-4 pb-4 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-10 w-full "
                style={{background:'#F9F9F9'}}
                
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
