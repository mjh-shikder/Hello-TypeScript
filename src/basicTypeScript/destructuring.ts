// ? Object Destructuring
// ? Array Destructruing

const user = {
  id: 123,
  name: {
    firstName: "Md",
    middleName: "Jubair",
    lastName: "Hossain",
  },
  gender: "male",
  color: "Purple",
};

// * if Destructruing doesn't exist
//? const userColor = user.color
//? const userMiddleName = user.name.middleName

//* const { color:userColor } = user  =>  Name alias
// Todo: Destructuring er somoy type define kora jabe na. type like => const { color: string} = user eita korle eita Name allias hisebe count hobe.

const {
  color: userColor,
  name: { middleName },
  name: { lastName: userLastName },
} = user;

console.log(middleName, userLastName);



// ? Array Destructuring

const friends = ['karim', 'josim', 'kasim']

const fromDhaka = friends[2] //* Regular way without Destructuring

const [, , kasim] = friends

console.log(kasim);

