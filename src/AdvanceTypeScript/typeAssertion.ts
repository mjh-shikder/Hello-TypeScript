let anything: any; 

anything = 'kire';

(anything as string).slice(0, 1)

const kgToGram = (input: string | number ) : string | number |undefined => {
    
    if (typeof input === 'number') {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value]= input.split(' ')
        return `converted output is: ${Number(value) * 1000}`
    }
}

const result1 = kgToGram(7) as number;
result1

const result2 = kgToGram('5 kg') as string
result2

console.log(result1, result2)


type CustomError = {
    message: string;
}

try {
    
} catch (err) {
    console.log((err as CustomError).message);
    
}