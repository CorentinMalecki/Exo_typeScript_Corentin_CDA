function findUser(id: number): { id: number; name: string } | null {
    if (id > 0) return { id, name: "User" + id };
    return null;
}
const u = findUser(0);
if (u !== null) {
    console.log(u.name.toUpperCase());
} else {
    console.log("Aucun utilisateur trouvé");
}

function format(value: number): string {
    return value.toFixed(2);
}
format(10);
format(3.14159);
format("hello");

let items: (string | number)[] = [];
items.push("A");
items.push(2);

function compute(a: number, b: number): number {
    return a + b;
}
compute(10, 5);
compute("10", "5");

const product: { id: number; title: string; price: number } = { id: 1, title: "Phone", price: 300 };
product.price = 300;

function sumAll(list: number[]): number {
    return list.reduce((acc, x) => acc + x, 0);
}
sumAll([1, 2, 3]);
sumAll(["a", "b"]);