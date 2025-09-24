export const parseSize = (value?: string | number) => {
  if (typeof value === 'number') return `${value}px`;
  return value;
};
