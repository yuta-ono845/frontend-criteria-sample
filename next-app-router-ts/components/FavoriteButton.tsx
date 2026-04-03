"use client";

import { useState } from "react";

type FavoriteButtonProps = {
  initialCount: number;
};

export function FavoriteButton({ initialCount }: FavoriteButtonProps) {
  const [count, setCount] = useState<number>(initialCount);

  return <button onClick={() => setCount((prev) => prev + 1)}>お気に入り {count}</button>;
}
