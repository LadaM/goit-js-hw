class Car {
  static #maxPrice = 50000;

  static checkPrice(price) {
      return (price > Car.#maxPrice) ? "Error! Price exceeds the maximum":"Success! Price is within acceptable limits";
  }

  constructor(params) {
    this.price = params.price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
