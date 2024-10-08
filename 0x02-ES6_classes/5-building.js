export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }

    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    // if ("evacuationWarningMessage" in this) {
    //     console.log("Yes");
    // }

    // throw new Error("Class extending Building must override evacuationWarningMessage");

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // set sqft(sq) {
  //     if (typeof sq !== 'number') {
  //         throw new TypeError('Sqft must be a number');
  //     }

  //     this._sqft = sq;
  // }

  //   evacuationWarningMessage() {}
}
