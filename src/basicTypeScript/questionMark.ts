// *   ? : Ternary Oparator : decission making
// *   ?? : Nullish coalescing operator : null / undefine  er upor vitti kore kore kaj kore 
// *   ?. Optiona chaining

const userAage = 21;

const eligible = (age: number) => {
  // if (age >= 21) {
  //   console.log("Youre Eligible!");
  //   }
  // else {
  //     console.log('Youre not Eligible!');   
  // }
  
  const result = age >= 21 ? 'Youre Eligible' : 'Youre Not Eligible'

  console.log(result);
  


};

eligible(24)

// ?  ?? : Nullish coalescing operator   
//* Null / ndefined => jodi kono value hoy tahole eita eita defalut value set korbe

const userTheme = undefined
const selectedTheme = userTheme ?? 'Light theme';

console.log(selectedTheme);


const isAuthenticated = null
const resultWithTernary = isAuthenticated ? isAuthenticated : 'Guest User';
const resultWithNullish = isAuthenticated ?? 'Guest user';

console.log({resultWithTernary}, {resultWithNullish});



// ? Optional Chaining ?.

const user: {
  address: {
    city: string,
    town: string,
    postalCode?: string;
  }
} = {
  address: {
    city: 'Dhaka',
    town: 'jurain'
  }
}

const postalCode = user?.address?.postalCode

console.log(postalCode);
