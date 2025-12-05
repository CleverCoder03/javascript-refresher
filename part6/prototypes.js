let car = {
  tyre: 4,
  engine: 2,
  seat: 6,
};

let tesla = {};
tesla.ai = true

Object.setPrototypeOf(tesla, car)

console.log(`Tesla :`, Object.getPrototypeOf(tesla));
console.log(tesla.ai)