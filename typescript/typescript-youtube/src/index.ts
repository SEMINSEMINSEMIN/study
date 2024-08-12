// Type inference
let sales = 500;
let course = "TypeScript";
let isPublished = true;

// type: any
// 최대한 any 타입은 사용하는 것을 지양할 것
let level;
function render(document: any) {
    console.log(document);
}

// Arrays
let numbers: number[] = [];
numbers.forEach((n) => n.toString());
