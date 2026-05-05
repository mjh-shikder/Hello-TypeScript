// ? Conditiona type: je type condition er upore nirvor kore.

type A = null
type B = undefined


type C = A extends number ? true : false;  //? false

type D = A extends number ? true : B extends undefined ? true : false; //? true


type RichPeople = {
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicle<T> = T extends keyof RichPeople ? true : false


type HasBike = CheckVehicle<'ship'>