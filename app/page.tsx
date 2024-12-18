'use client';

import { AchievementCard } from '@/components/home/achievement-card';
import { StatsCard } from '@/components/home/stats-card';
import { ActionButton } from '@/components/home/action-button';
import { TabBar } from '@/components/home/tab-bar';

export default function Home() {
  return (
    <div className="container p-4 space-y-4">
      <AchievementCard 
        label="achievement"
        value={45890}
        month="JAN"
      />
      
      <div className="grid grid-cols-2 gap-4">
        <StatsCard 
          label="Available Working days"
          value="22"
        />
        <StatsCard 
          label="MORE"
          value="22"
          sublabel="percentage"
        />
      </div>
      
      <div className="text-lg font-semibold">Daily</div>
      
      <div className="grid grid-cols-2 gap-4">
        <StatsCard 
          label="need for 100%"
          value="6544"
        />
        <StatsCard 
          label="daily percentage"
          value="67.56 %"
        />
      </div>
      
      <ActionButton />
      
      <TabBar />
    </div>
  );
}