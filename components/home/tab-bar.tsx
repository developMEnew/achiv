'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TabBar() {
  return (
    <div className="flex justify-between gap-2 mt-6">
      <Card className="flex-1 p-2 flex flex-col items-center gap-1 border-blue-500">
        <Star className="h-5 w-5 text-blue-500" />
        <span className="text-xs text-muted-foreground">Tab Name</span>
      </Card>
    </div>
  );
}