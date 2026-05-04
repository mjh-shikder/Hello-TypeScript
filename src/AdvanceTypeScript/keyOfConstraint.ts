// ? KeyOf : type oparator

type RichPeoplesVehcile = {
    car: string,  //? Key : value;
    bike: string,
    cng: string,
};

type MyVehchile1 = "bike" | 'car' | 'cng';  //? String jodi type er moto thake tahole take string Literal type bole

type MyVechile2 = keyof RichPeoplesVehcile; 


const myVechile1: MyVehchile1 ='car'
const myVehicle2: MyVechile2 = 'cng' 



//

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    }
}


const user: User = {
  id: 23,
  name: "jony",
  address: {
    city: "dhaka",
  },
};

const myId = user.id;
const myId2 = user['id'];
const address = user['address']




const getPropertyFromObj = <X>(obj: X, key: keyof X)=>{
    return obj[key]
}

const result = getPropertyFromObj(user, "name");

console.log(result);

//

const product = {
    brand: 'hp',
}

const studen = {
    id: 12,
    class: 5,

}

const res2 = getPropertyFromObj(product, "brand")

const res3 = getPropertyFromObj(studen, "class")