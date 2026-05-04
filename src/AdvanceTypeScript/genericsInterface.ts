// * Generic with Interface

interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    relasedYear: string;
  };
    smartWatch: T;
    bike?: X
}

interface PoorWatch {
  heartRate: string;
  stopwatch: boolean;
}

const poorDeveloper: Developer<PoorWatch, { brand: 'Yeamaha', CC: '200cc'}> = {
  name: "Mr Poor",
  salary: 2000,
  device: {
    brand: "dell",
    model: "AB14",
    relasedYear: "2014",
  },
  smartWatch: {
    heartRate: "90",
    stopwatch: true,
  },
};


interface RichWatch {
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    aiFeature: boolean;
}

const richDeveloper: Developer<RichWatch> = {
    name: "Mr Rich",
    salary: 5000,
    device: {
        brand: "ThinkPad",
        model: "AB14",
        relasedYear: "2026",
    },
    smartWatch: {
        heartRate: "90",
        callSupport: true,
        calculator: true,
        aiFeature: true,
    },
    bike: null,
}


// ? Default value 
const add = (num1: number, num2: number = 0) => num1 + num2;

add(3, 6) // 3+6 = 09
add(2) // 2 + 0 = 2