'use client';

import { Card } from '@/components/ui/card';
import { ClipItem } from './clip-item';
import { ClipFixItem } from './clip-fix-item';
import { ClipGroupHeader } from './clip-group-header';
import { ClipGroupTotal } from './clip-group-total';

interface ClipData {
  id: number;
  clipNumber: string;
  attributeCount: number;
}

interface ClipGroupProps {
  date: string;
  clips: ClipData[];
  total: number;
  showFix?: boolean;
}

export function ClipGroup({ date, clips, total, showFix }: ClipGroupProps) {
  return (
    <div className="mb-6">
      <div className="text-sm text-muted-foreground mb-2">{date}</div>
      <Card className="bg-gray-100 p-4 rounded-2xl">
        <div className="space-y-2">
          <ClipGroupHeader />
          
          {clips.map((clip) => (
            <ClipItem
              key={clip.id}
              id={clip.id}
              clipNumber={clip.clipNumber}
              attributeCount={clip.attributeCount}
            />
          ))}
          
          {showFix && <ClipFixItem />}
          
          <ClipGroupTotal total={total} />
        </div>
      </Card>
    </div>
  );
}