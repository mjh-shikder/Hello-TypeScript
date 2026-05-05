// ? Mapped types

// ? Regular map
const arrayOfNum: number[] = [2, 2, 3, 4, 4, 3, 4];

const arrayOfStrign: string[] = ['1', '3', '4', '4'];


const arrayOfString2: string[] = arrayOfNum.map(num => num.toString());

console.log(arrayOfString2);


// ? map type

type AreaOfNum = {
    height: number;
    width: number;
}

type AreaOfString = {
    height: string;
    width: string;
};

// ? Level 1
// type AreaOfString2 = {
//     [key in 'height' | 'width']: string;
// }

// ? Level 2 
type AreaOfString2 = {
    [key in keyof AreaOfNum]: string;
};


// ? Leve 3 with Generic

type Area<T> = {
    [key in keyof T]: T[key]
}

const are1: Area<{ height: number; width: string }> = {
    height: 39,
    width: '39'
}
