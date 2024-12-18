'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function ActionButton() {
  return (
    <Button 
      className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6"
    >
      <Plus className="mr-2 h-5 w-5" />
      ADD NEW CLIP
    </Button>
  );
}