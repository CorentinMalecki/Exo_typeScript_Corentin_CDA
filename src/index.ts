// primitif

let username: string = "Romain";
let age: number = 20;
let isAdult: boolean = true;

let city: null | string = null;
city = "Nogent le Rotrou";
city = null;

let address: any = "16 rue du Tertre";

type identityCardType = {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  birth: string;
};

interface identityCardInterface {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  birth: string;
}

// Complexe
const identityCard: {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
} = {
  firstName: "Thomas",
  lastName: "Dupont",
  age: 20,
  city: "Tours",
};

const identityCard2: identityCardType = {
  firstName: "Thomas",
  lastName: "Dupont",
  age: 20,
  city: "Rennes",
  birth: "01/02/1991",
};

const identityCard3: identityCardInterface = {
  firstName: "Thomas",
  lastName: "Dupont",
  age: 20,
  city: "Paris",
  birth: "01/02/1991",
};

const listNumber: (string | number)[] = [
  "Alpine",
  "504",
  "Dacia",
  "REerere",
  45,
];

const listIdentityCard: identityCardType[] = [
  {
    firstName: "Thomas",
    lastName: "Dupont",
    age: 20,
    city: "Rennes",
    birth: "01/02/1991",
  },
  {
    firstName: "Thomas",
    lastName: "Dupont",
    age: 20,
    city: "Paris",
    birth: "01/02/1991",
  },
];
