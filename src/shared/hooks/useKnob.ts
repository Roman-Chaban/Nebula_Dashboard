import { useCallback, useState, useRef } from 'react';

export const useKnob = (
  initialIndex: number,
  count: number,
  clientXToIndex: (x: number) => number | null,
) => {
  const clamp = useCallback(
    (value: number) => Math.min(Math.max(0, value), Math.max(0, count - 1)),
    [count],
  );

  const [selectedIndex, setSelectedIndex] = useState<number>(() =>
    clamp(initialIndex),
  );

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const activePointerId = useRef<number | null>(null);

  const onPointerDown = useCallback(
    (event: React.PointerEvent) => {
      try {
        (event.currentTarget as Element).setPointerCapture(event.pointerId);
      } catch {}
      activePointerId.current = event.pointerId;
      setIsDragging(true);

      const clientIndex = clientXToIndex(event.clientX);
      if (clientIndex !== null) {
        setSelectedIndex(clamp(clientIndex));
      }
    },
    [clientXToIndex, clamp],
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent) => {
      if (!isDragging) return;

      const clientIndex = clientXToIndex(event.clientX);
      if (clientIndex !== null) {
        setSelectedIndex(clamp(clientIndex));
      }
    },
    [isDragging, clientXToIndex, clamp],
  );

  const onPointerUp = useCallback((event: React.PointerEvent) => {
    try {
      (event.currentTarget as Element).releasePointerCapture(event.pointerId);
    } catch {}
    activePointerId.current = null;
    setIsDragging(false);
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowLeft')
        setSelectedIndex((selectedNumber) => clamp(selectedNumber - 1));
      if (event.key === 'ArrowRight')
        setSelectedIndex((selectedNumber) => clamp(selectedNumber + 1));
    },
    [clamp],
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
