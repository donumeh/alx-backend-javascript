export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (!(endpoint instanceof Object)) {
    throw new Error('Endpoint load is high');
  }

  const queryCount = weakMap.get(endpoint) || 0;

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, queryCount + 1);
};
