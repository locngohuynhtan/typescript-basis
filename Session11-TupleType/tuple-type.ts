// Array
let skillSession11: (string | number)[] = [`Loc`, 22];
skillSession11.push(`Ngo`);
skillSession11.push(69);

// Tuple: data type/size/order
let skill2Session11: [string, number] = [`Loc`, 22];

let skill3Session11: [boolean, string, number];
skill3Session11 = [true, `Loc`, 22];

console.log(`>>> Check skill3Session11: `, skill3Session11);

// Optional element in tuple, the last element is optional
let skill4Session11: [boolean, string, number?];
skill4Session11 = [true, `Loc`];

console.log(`>>> Check skill4Session11: `, skill4Session11);
