//* Common Non Premitive Array, Object

let bazarList : string[] = ['eggs', 'milk', 'sugar', 'salt', 'tomato']

bazarList.push('beef')

console.log(bazarList);

let mixedArray: (string | number | boolean)[] = ['eggs', 1, 'milk', 4, 'sugar', 3, false, true]

mixedArray.push(2222, 'apple', false)

console.log(mixedArray);


// * TypeScript - Tuple

let coordinates: [number, number] = [20, 30]

// coordinates = [23, 43, 44] now, this will give an error

console.log(coordinates);

let cople: [string, string] = ['mjh', 'ant']

cople = ['jubair', 'ant']

let nameAndRoll : [string, number] = ['josim', 69]

nameAndRoll = ['josh', 96]

nameAndRoll[0] = 'rohim'

let destination: [string, string, number] = ['dhaka', 'benapole', 3]

destination = ['joshor', 'dhaka', 5]


// * Reference type: Object

const user: {
  organization: "Next Level Web Development";  // Value take type hisebe define korle eita e fixed thakbe //* Literal types
  firstName: string;
  middleName?: string; //* optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Next Level Web Development",
  firstName: "Md",
  middleName: "Jubair",
  lastName: "Hossain",
  isMarried: true,
};



