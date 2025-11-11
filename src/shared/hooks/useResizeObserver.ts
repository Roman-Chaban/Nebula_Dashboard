import { RefObject, useEffect, useState } from 'react';

type UseContainerWidthProps = {
  containerRef: RefObject<HTMLElement | null>;
  fallbackMinWidth: number;
};

/**
 * Hook: returns measured width of container element (minWidth fallback)
 * Usage: attach ref to parent and measure via getBoundingClientRect inside hook consumer.
 * Here we keep an internal width state and expose setter function.
 */
export const useContainerWidth = ({
  containerRef,
  fallbackMinWidth = 300,
}: UseContainerWidthProps) => {
  const [containerWidth, setContainerWidth] =
    useState<number>(fallbackMinWidth);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const handleResize = () => {
      const { width } = containerElement.getBoundingClientRect();
      setContainerWidth(Math.max(fallbackMinWidth, Math.round(width)));
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerElement);

    return () => resizeObserver.disconnect();
  }, [containerRef, fallbackMinWidth]);

  return containerWidth;
};
