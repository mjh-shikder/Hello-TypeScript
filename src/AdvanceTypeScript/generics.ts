// ? Dyanamically Generalize

type StringArray = Array<string>
type NumberArray = Array<number>
type BooleanArray = Array<boolean>

// ? Generic
type GenericArray<T>= Array<T>

// * String Arrays
const friends: string[] = ['x', 'y', 'z'];
const friends2: Array<string> = ['x', 'y', 'z'];
const friends3: StringArray = ['x', 'y', 'z'];
const friends4: GenericArray<string> = ['x', 'y', 'z'];

// * Number Arrays
const rollNumbers: number[] = [12, 23, 34, 54];
const rollNumbers2: Array<number> = [12, 23, 34, 54];
const rollNumbers3: NumberArray = [12, 23, 34, 54];
const rollNumbers4: GenericArray<number> = [12, 23, 34, 54];

// * Boolean Arrays
const isEligibleList: boolean[] = [true, false, true];
const isEligibleList2: Array<boolean> = [true, false, true];
const isEligibleList3: BooleanArray = [true, false, true];
const isEligibleList4: GenericArray<boolean> = [true, false, true];



// ? Tuble
type Corrdinate<x,y> = [x, y]

const coordinate: Corrdinate<string, string> = ['23', '43']
const coordinate2: Corrdinate<number, number> = [23, 43]


// ? Generic Object
const userList: GenericArray<{ name: string;  age:number}> = [
    {
        name: 'Mr. x',
        age: 24,

    },
    {
        name: 'Mr Y',
        age: 25,
    },
    {
        name: 'Mr z',
        age: 27,
        
    },
]