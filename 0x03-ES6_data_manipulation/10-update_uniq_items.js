export default function updateUniqueItems(map) {
  if (!map && typeof map !== 'object') {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map) {
    if (typeof value === 'number' && value === 1) {
      try {
        map.set(key, value * 100);
      } catch (err) {
        throw new Error('Cannot process');
      }
    }
  }
}
