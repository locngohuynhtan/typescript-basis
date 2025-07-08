enum API_STATUS {
  PENDING,
  FULFILLED,
  REJECTED,
}

let a = API_STATUS.FULFILLED;
console.log(`>>> Check a: `, a); // 1

// Frontend: support syntax
// `PENDING` => API_STATUS.PENDING

enum API_STATUS_2 {
  PENDING = `PENDING`,
  FULFILLED = `FULFILLED`,
  REJECTED = `REJECTED`,
}

let b = API_STATUS_2.FULFILLED;
console.log(`>>> Check b: `, b); // FULFILLED
