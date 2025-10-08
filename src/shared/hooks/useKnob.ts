import { useCallback, useState, useRef } from 'react';

export const useKnob = (
  initialIndex: number,
  count: number,
  clientXToIndex: (x: number) => number,
) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const activePointerId = useRef<number | null>(null);

  const onPointerDown = useCallback(
    (event: React.PointerEvent) => {
      try {
        (event.target as Element).setPointerCapture(event.pointerId);
      } catch {}
      activePointerId.current = event.pointerId;
      setIsDragging(true);
      const idx = clientXToIndex(event.clientX);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setSelectedIndex((_) => Math.min(Math.max(0, idx), count - 1));
    },
    [clientXToIndex, count],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const idx = clientXToIndex(e.clientX);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setSelectedIndex((_) => Math.min(Math.max(0, idx), count - 1));
    },
    [isDragging, clientXToIndex, count],
  );

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {}
    activePointerId.current = null;
    setIsDragging(false);
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowLeft') setSelectedIndex((s) => Math.max(0, s - 1));
      if (event.key === 'ArrowRight') setSelectedIndex((s) => Math.min(count - 1, s + 1));
    },
    [count],
  );

  return {
    selectedIndex,
    isDragging,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onKeyDown,
    setSelectedIndex,
  };
};
