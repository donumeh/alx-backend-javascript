export default function cleanSet(set, startString) {
  const matches = [];

  if (!startString || typeof startString !== 'string') {
    return '';
  }

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      matches.push(value.slice(startString.length));
    }
  }

  return matches.join('-');
}
