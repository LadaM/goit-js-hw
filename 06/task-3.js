'use strict';

class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(prefix) {
    this.#value = prefix + this.#value;
  }

  padEnd(suffix) {
    this.#value = this.#value + suffix;
  }

  padBoth(val) {
    this.#value = val + this.#value + val;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
