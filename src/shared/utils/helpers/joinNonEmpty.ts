export const joinNonEmpty = (...parts: Array<string | undefined | null | false>): string => {
  let output = '';
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (typeof part === 'string' && part.trim().length > 0) {
      output = output.length ? output + ' ' + part : part;
    }
  }
  return output;
};
