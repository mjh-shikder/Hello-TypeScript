// ? Constrain: strict Rules set kora

type Studen = {id:number, name:string}

//  const addStudentToCourese = <T extends {id:number, name:string}>(studentInfo: T) => ei rokom o likha jay 
const addStudentToCourese = <T extends Studen>(studentInfo: T) => {  //? eita smart way
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 12,
  name: "kasim",
  hasPen: true,
};

const student2 = {
  id: 23,
  name: "hasim",
  hasCar: true,
  isMarried: true,
};

// ? eitar Limitetion student3 diya dekhano holo

const student3 = {
    id: 23,
    name:'jasim',
    hasWatch: true,
}


const result = addStudentToCourese(student1);
const result2 = addStudentToCourese(student2);
const result3 = addStudentToCourese(student3);

console.log(result3);


