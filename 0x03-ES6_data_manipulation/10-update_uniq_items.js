export default function updateUniqueItems(map) {
  if (!map && !(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map) {
    if (typeof value === 'number' && value === 1) {
      map.set(key, value * 100);
    }
  }
}
