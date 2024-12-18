'use client';

import { Card } from '@/components/ui/card';

interface StatsCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
}

export function StatsCard({ label, value, sublabel }: StatsCardProps) {
  return (
    <Card className="p-4 rounded-2xl border-2">
      <div className="text-sm text-blue-500 mb-1">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
      {sublabel && (
        <div className="text-sm text-muted-foreground">{sublabel}</div>
      )}
    </Card>
  );
}