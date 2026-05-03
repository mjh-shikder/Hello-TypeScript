// ? Interface


type User = {
    name: string;
    age: number;
};


type Role = {
    role: 'admin' | 'user'
}

// * interface only works with: Object type: array, object, function

interface IUser {
    name: string;
    age: number;

}



type UserWithRole = User & Role

interface IuserWithRole extends IUser {
    location: string;
}

const user1: User = {
    name: 'mr x',
    age: 100,
}

const user2: UserWithRole = {
    name: 'mr Y',
    age: 40,
    role: 'admin'
}


const user3: IUser = {
    name: 'mr Y',
    age: 40,
    
}

const user4: IuserWithRole = {
    name: 'mr Y',
    age: 40,
    location: 'Dhaka',
    
}


// ? Function

type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => num1 + num2;

const add2: IAdd = (n1, n2) => n1 + n2;

// ? Normal Way
const friends0: string[] = ['a', 'b', 'c'];

// ? With Type define
type Friends = string[];
const friends1: Friends = ['d', 'e', 'f'];

// ? With Interface
interface IFriends {
    [index: number]: string
}

const friends2: IFriends = ["g", "h", "i"];