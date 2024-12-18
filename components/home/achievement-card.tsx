'use client';

import { LineChart } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface AchievementCardProps {
  label: string;
  value: number;
  month: string;
}

export function AchievementCard({ label, value, month }: AchievementCardProps) {
  return (
    <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-3xl">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            <span className="text-sm opacity-90">{label}</span>
          </div>
          <div className="text-4xl font-bold">
            {value.toLocaleString()}
          </div>
        </div>
        <div className="text-xl font-semibold">{month}</div>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div className="bg-white h-full rounded-full" style={{ width: '75%' }} />
      </div>
    </Card>
  );
}