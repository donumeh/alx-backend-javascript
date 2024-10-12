export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  const queryCount = weakMap.get(endpoint) || 1;

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, queryCount + 1);
};
