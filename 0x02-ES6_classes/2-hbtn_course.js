export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length should be a number');
    }

    if (typeof students !== 'object') {
      throw new TypeError('student must be an array object');
    }
    this._name = name;
    this._length = length;
    this._students = students.length ? students : [];
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (typeof students !== 'object') {
      throw new TypeError('student must be an array');
    }

    this._students.push(...students);
  }

  get students() {
    return this._students;
  }
}
