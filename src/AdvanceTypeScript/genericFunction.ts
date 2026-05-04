// * Generic Function

const createArrayString = (value: string) => [value];

const createArrayNumber = (value: number) => [value];

const createArrayWithObj = (value: { id: number, name: string }) => {
    return [value];
}
    

const createArrayWithGeneric = <T>(value: T) => {
    return [value]
}


const arrayString = createArrayString('king kong');
const numberArray = createArrayNumber(32);
const arrayObjc = createArrayWithObj({ id: 234, name: 'jony' })

// ? Generic
const arrayStringWithGeneric = createArrayWithGeneric('king kong');
const arrayNumberWithGeneric = createArrayWithGeneric(453);
const arrayObjctWithGeneric = createArrayWithGeneric({ id: 234, name: "jony" });


// ? Tuple
const createArrayWithTuple = (prama1: string, param2: number) => [prama1, param2];

const createArrayTupleWithGeneric = <X, Y>(param1: X, Param2: Y) => [param1, Param2]

const res1 = createArrayTupleWithGeneric('jony', false);
const res2 = createArrayTupleWithGeneric(23, { name: 'jony', id: 23 })


//

const addStudentToCourese =<T>(studentInfo: T) => {
    return { 
        course: 'Next Level',
        ...studentInfo,
    }
}

const student1 = {
    id: 12,
    name: 'kasim',
    hasPen: true,
};

const student2 = {
    id: 23,
    name: 'hasim',
    hasCar: true,
    isMarried: true,
};

const result = addStudentToCourese(student1)
const result2 = addStudentToCourese(student2)

console.log(result);
console.log(result2);
