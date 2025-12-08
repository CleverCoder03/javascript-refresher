function* alphaGenerator() {
  yield "A";
  yield "B";
  yield "C";
}

let gen = alphaGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// OUTPUT
// A
// B
// C