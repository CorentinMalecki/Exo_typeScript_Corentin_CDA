function identity<T>(value: T): T {
    return value;
}

function wrap<T>(value: T): { value: T } {
    return { value };
}

wrap(10);
wrap("hello");
wrap(true);
wrap({ name: "Alice" });

const box1: { content: string } = { content: "Hello" };
const box2: { content: number } = { content: 123 };
const box3: { content: number[] } = { content: [1, 2, 3] };

function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}
getLength("hello");
getLength([1, 2, 3]);