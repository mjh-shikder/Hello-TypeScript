//? Function
//* Arrow Function, Normal Funciton

function addNormal(num1: number, num2: number) : number {
    
    return num1 + num2;
}

const addArrow = (num1: number, num2: number) : number => num1+num2



// ? object=> function => method

const poorUser = {
    name: 'jony',
    balance: 0,
    addBalance(value: number): number {       //Evabeo kora jay
        return this.balance + value;         //* const totalBalance = this.balance + value;
    }                                       //* return totalBalance 
    
};

poorUser.addBalance(10000)

console.log(poorUser.balance);


// ? callback fundtion

const arr: number[] = [1, 2, 4, 6]

const squareArray = arr.map((elem: number): number => elem * elem)

const qubeArray = arr.map((element: number): number => element* element* element)

