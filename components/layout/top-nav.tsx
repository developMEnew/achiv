'use client';

import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">Menu</h2>
              {/* Add menu items here */}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold">Mobile App</h1>
        </div>
      </div>
    </header>
  );
}