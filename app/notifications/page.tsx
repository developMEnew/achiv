'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { DatePicker } from '@/components/forms/date-picker';

export default function Notifications() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [clipNumber, setClipNumber] = useState('0006');
  const [attributeCount, setAttributeCount] = useState('6789');
  const [selectedNumber, setSelectedNumber] = useState('47');

  return (
    <div className="container p-4 space-y-6">
      <Card className="p-6 space-y-6">
        <h2 className="text-lg font-semibold">Add new clip</h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">clip number</label>
            <Input
              value={clipNumber}
              onChange={(e) => setClipNumber(e.target.value)}
              className="mt-1 bg-gray-100"
            />
          </div>
          
          <div>
            <label className="text-sm text-muted-foreground">attribute count</label>
            <Input
              value={attributeCount}
              onChange={(e) => setAttributeCount(e.target.value)}
              className="mt-1 bg-gray-100"
            />
          </div>
          
          <div>
            <label className="text-sm text-muted-foreground">for</label>
            <div className="mt-1">
              <DatePicker date={date} onSelect={setDate} />
            </div>
          </div>
          
          <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900">
            add
          </Button>
        </div>
      </Card>

      <Card className="p-6 space-y-6 bg-gray-100">
        <h2 className="text-lg font-semibold">DELETE</h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">select number</label>
            <Input
              value={selectedNumber}
              onChange={(e) => setSelectedNumber(e.target.value)}
              className="mt-1 bg-white"
            />
          </div>
          
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
            <Trash2 className="mr-2 h-4 w-4" />
            DELETE
          </Button>
        </div>
      </Card>
    </div>
  );
}