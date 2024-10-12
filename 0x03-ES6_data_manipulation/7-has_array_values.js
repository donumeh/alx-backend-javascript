export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array) || array.length === 0) {
    return set.has();
  }

  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}
