const user: {
    id: number;
    name: string;
    isAdmin: boolean;
    email: string;
    age: number;
} = {
    id: 55,
    name: "Bob",
    isAdmin: true,
    email: "bob@test.com",
    age: 30
};

const products: { id: number; title: string; price: number; stock: number }[] = [
    { id: 1, title: "Book", price: 10, stock: 100 },
    { id: 2, title: "Pen", price: 2, stock: 300 },
    { id: 3, title: "Laptop", price: 899, stock: 50 }
];

type Product = {
    id: number;
    title: string;
    price: number;
    stock: number;
};

function applyDiscount(product: Product, percentage: number): Product {
    if (percentage < 0 || percentage > 1) {
        throw new Error("Percentage doit être entre 0 et 1");
    }
    return { ...product, price: product.price * (1 - percentage) };
}

function renameProduct(product: Product, newName: string): Product {
    return { ...product, title: newName };
}

type User = {
    id: number;
    name: string;
    isAdmin: boolean;
};
const userService = {
    fetch(id:number):User {
        return { id, name: "User " + id, isAdmin: false };
    },
    save(user:User) {
        console.log("Saved:", user);
    },
    deactivate(user:User) {
        console.log("Deactivate:", user.id);
    }
};

type Config = {
    darkMode: boolean;
    lang: string;
    autoSave: boolean;
};
const config = {
    darkMode: true,
    lang: "fr",
    autoSave: false
};