type Item = {
    id: number;
    label: string;
    price: number;
    stock: number;
};

const items: Item[] = [
    { id: 1, label: "Book", price: 10, stock: 100 },
    { id: 2, label: "Pencil", price: 2, stock: 300 },
    { id: 3, label: "Laptop", price: 899, stock: 50 }
];

function findById(list: Item[], id: number): Item | undefined {
    return list.find(i => i.id == id);
}
findById(items, 1);
findById(items, "1");

function updateItem(list: Item[], id: number, changes: Partial<Item>): void {
    const item = list.find(i => i.id === id);
    if (item) Object.assign(item, changes);
}
updateItem(items, 1, { price: 12 });
updateItem(items, 2, { label: "Blue Pencil", stock: 250 });
updateItem(items, 3, { unknown: true });

function computeTotal(list: Item[]): number {
    return list.reduce((sum, item) => sum + item.price, 0);
}
computeTotal(items);

function computeStockValue(list: Item[]): number {
    return list.reduce((sum, item) => sum + item.price * item.stock, 0);
}
computeStockValue(items);