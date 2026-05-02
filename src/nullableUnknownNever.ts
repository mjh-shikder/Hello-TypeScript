// ? Nullable Types

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB: ${input}`);
        
    }
    else {
        console.log('From DB: All User');
        
    }
}

getUser(null)



// ? Unknown Type

const productDiscount = (input: unknown) => {
    if (typeof input === 'number') {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
        
    } else if (typeof input === 'string') {
        const [discountedPrice] = input.split(' ');
        console.log(Number(discountedPrice) *0.1);
        
    } else {
        console.log('Invalid Input');
        
    }

    
}

productDiscount(100)
productDiscount('100 Tk')
productDiscount(null)



// ? void

const throwError = (msg: string) : never => {
    throw new Error(msg)
}


console.log(throwError('hl'));
