export default function setFromArray(arr) {
  const setValues = new Set();

  arr.forEach((ele) => { setValues.add(ele); });

  return setValues;
}
