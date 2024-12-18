'use client';

interface ClipItemProps {
  id: number;
  clipNumber: string;
  attributeCount: number;
}

export function ClipItem({ id, clipNumber, attributeCount }: ClipItemProps) {
  return (
    <div className="flex items-center bg-white rounded-xl p-3">
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
        {id}
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div className="font-medium">{clipNumber}</div>
        <div className="text-muted-foreground">{attributeCount}</div>
      </div>
    </div>
  );
}