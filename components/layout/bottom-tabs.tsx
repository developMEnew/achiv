'use client';

import { Home, Settings, Search, Bell, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';

const tabs = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Search', href: '/search', icon: Search },
  { name: 'Notifications', href: '/notifications', icon: Bell },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function BottomTabs() {
  const pathname = usePathname();
  const { status } = useSession();

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background">
      <nav className="flex h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;
          const href = status === "unauthenticated" && tab.href === "/profile" 
            ? "/login" 
            : tab.href;
          
          return (
            <Link
              key={tab.name}
              href={href}
              className={cn(
                'flex flex-1 flex-col items-center justify-center gap-1',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{tab.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}