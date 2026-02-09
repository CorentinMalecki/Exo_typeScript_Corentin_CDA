let count:number = 10;
let message:string = "Hello";
let darkMode:boolean = false;
let username:string = "Alice";
let taxRate:number = 0.2;
let data:null| number = null;
let amount:number;

const user:{
    id: number;
    name: string;
    age: number;
    active: boolean;
    country: string;
} = {
    id: 1,
    name: "Alice",
    age: 22,
    active: true,
    country: "FR"
};

const mixed: (string | number | boolean)[] = [1, "two", 3, "four", true];

const ids:number[] = [1, 2, 3, 4];

const logs:string[] = ["start", "loading", "done"];

const flags:boolean[] = [true, false, true];

function double(x:number): number {
    return x * 2;
}

function sayHello(name:string): string {
    return "Hello " + name;
}

function isAdult(age:number): boolean {
    return age >= 18;
}

function greetUser(user:string): string {
    return `Welcome ${user}`;
}

function findIndex<T>(arr: T[], value: T): number | null {
    const idx = arr.indexOf(value);
    return idx === -1 ? null : idx;
}

function loadConfig(flag: boolean): object | null {
    if (flag) return { theme: "dark" };
    return null;
}

loadConfig(true);
let welcome = greetUser("john");
console.log(welcome);

function multiplyAll(list:number[], factor:number): number[] {
    return list.map(v => v * factor);
}

let result = multiplyAll([7,8,9,4], 5);
console.log(result)