//map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

//filter

const numberss = [1, 2, 3, 4, 5];
const oddNumbers = numberss.filter(number => number % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5]
//reduce
const numbersss = [1, 2, 3, 4, 5];
const sum = numbersss.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
