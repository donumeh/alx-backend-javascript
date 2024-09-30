export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    new_array.push(appendString + idx);
  }

  return newArray;
}
