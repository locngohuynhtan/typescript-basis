const sum = (x, y) => {
  return x + y;
};

console.log(`>>> Check sum = `, sum(5, 10)); // 15

// need to validate the types of parameters
const sum2 = (x, y) => {
  // validate: x, y are numbers?
  return x + y;
};

console.log(`>>> Check sum2 = `, sum2(`name`, 10)); // name10
