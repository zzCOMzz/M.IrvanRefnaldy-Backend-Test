function selfNumber(n) {
  const number = n.toString().split("").map(Number);
  const sum = number.reduce((a, b) => a + b, 0);
  return sum + n;
}

let number = 0;
for (let i = 1; i <= 5000; i++) {
  const result = selfNumber(i);
  if (result !== i) {
    number += i;
  }
}
console.log(number);
