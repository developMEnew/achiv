'use client';

export function ClipFixItem() {
  return (
    <div className="flex items-center bg-green-100 rounded-xl p-3">
      <div className="flex-1 flex items-center justify-between">
        <div className="font-medium">FIX</div>
        <div className="text-muted-foreground">(-)</div>
        <div className="bg-green-200 px-3 py-1 rounded-full text-green-800">60</div>
      </div>
    </div>
  );
}