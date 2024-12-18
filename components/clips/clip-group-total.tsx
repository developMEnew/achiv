interface ClipGroupTotalProps {
  total: number;
}

export function ClipGroupTotal({ total }: ClipGroupTotalProps) {
  return (
    <div className="flex items-center justify-between pt-2 border-t">
      <div className="font-medium">Total</div>
      <div className="font-medium">{total}</div>
    </div>
  );
}