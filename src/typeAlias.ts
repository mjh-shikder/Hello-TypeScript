// * Soja vasay ekta type ke name diye eita ke reuse kora

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contact: string;
  address: {
    division: string;
    city: string;
  }
};



// * Now we don't have to repeat type likek below
/**
 * const user2: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contact: string;
  address: {
    division: string;
    city: string;
  };
} = {
    id: 123,
    name: {
        firstName: 'abu',
        lastName: 'talha'
    },
    gender: 'male',
    contact: '019888',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    }

}
 */

//? Instead just put the ser tyep like this

const user1: User = {
    id: 123,
    name: {
        firstName: 'Mohammad',
        lastName: 'Jubair'
    },
    gender: 'male',
    contact: '018888',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    }

}

const user2: User = {
    id: 223,
    name: {
        firstName: 'Abu',
        lastName: 'Talha'
    },
    gender: 'male',
    contact: '019999',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    }

}


