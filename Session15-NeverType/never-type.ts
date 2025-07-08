function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}

function runInfinity(): void {
  //   while (true) {
  //     console.log(`running...`);
  //   }
}

let aSession15 = runInfinity();
console.log(`>>> Check aSession15 = `, aSession15); // return undefined

let bSession15 = handleException(`Just a test error message`);
console.log(`>>> Check bSession15 = `, bSession15); // error
