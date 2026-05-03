// * Generic with Interface

interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    relasedYear: string;
  };
  smartWatch: T;
}

type PoorWatch ={
  heartRate: string;
  stopwatch: boolean;
}

const poorDeveloper: Developer<PoorWatch> = {
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


type RichWatch = {
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
    }
}
