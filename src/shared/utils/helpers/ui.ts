export const mergeInputClassNames = (...parts: Array<string | undefined>) => {
  return parts.filter(Boolean).join(' ');
};

export const mergeButtonClassNames = (
  ...parts: Array<string | false | null | undefined | boolean | (string | undefined)[]>
) => {
  const out: string[] = [];

  for (const part of parts) {
    if (!part || typeof part === 'boolean') continue;
    if (Array.isArray(part)) {
      for (const sub of part) {
        if (sub) out.push(sub);
      }
    } else {
      out.push(part);
    }
  }

  return out.join(' ').trim();
};
