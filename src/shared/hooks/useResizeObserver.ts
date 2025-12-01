import { RefObject, useEffect, useState } from 'react';

type UseResizeObserverProps = {
  containerRef: RefObject<HTMLElement | null> | null | undefined;
  fallbackMinWidth?: number;
};

/**
 * Hook: returns measured width of container element (minWidth fallback)
 * Usage: attach ref to parent and measure via getBoundingClientRect inside hook consumer.
 * Here we keep an internal width state and expose setter function.
 */
export const useResizeObserver = ({
  containerRef,
  fallbackMinWidth = 300,
}: UseResizeObserverProps) => {
  const [containerWidth, setContainerWidth] =
    useState<number>(fallbackMinWidth);

  useEffect(() => {
    if (!containerRef?.current) return;

    const containerElement = containerRef.current;
    if (!containerElement) return;

    const handleResize = () => {
      const { width } = containerElement.getBoundingClientRect();
      setContainerWidth(Math.max(fallbackMinWidth, Math.round(width)));
    };

    handleResize();

    if (typeof ResizeObserver === 'undefined') return;

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerElement);

    return () => resizeObserver.disconnect();
  }, [containerRef, fallbackMinWidth]);

  return containerWidth;
};
