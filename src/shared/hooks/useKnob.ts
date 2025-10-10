import { useCallback, useState, useRef } from 'react';

export const useKnob = (
  initialIndex: number,
  count: number,
  clientXToIndex: (x: number) => number,
) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(() =>
    Math.min(Math.max(0, initialIndex), Math.max(0, count - 1)),
  );
  const [isDragging, setIsDragging] = useState(false);
  const activePointerId = useRef<number | null>(null);

  const onPointerDown = useCallback(
    (event: React.PointerEvent) => {
      try {
        (event.currentTarget as Element).setPointerCapture(event.pointerId);
      } catch {}
      activePointerId.current = event.pointerId;
      setIsDragging(true);
      const idx = clientXToIndex(event.clientX);
      setSelectedIndex(() => Math.min(Math.max(0, idx), Math.max(0, count - 1)));
    },
    [clientXToIndex, count],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const idx = clientXToIndex(e.clientX);
      setSelectedIndex(() => Math.min(Math.max(0, idx), Math.max(0, count - 1)));
    },
    [isDragging, clientXToIndex, count],
  );

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    try {
      (e.currentTarget as Element).releasePointerCapture(e.pointerId);
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
