export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](prim) {
    if (prim === 'string') {
      return this._location;
    } if (prim === 'number') {
      return this._size;
    }
    return this._size;
  }
}
