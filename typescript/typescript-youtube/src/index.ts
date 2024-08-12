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

// Tuples
let user: [number, string] = [1, "Mosh"];

// Enums
//// 여러 값들에 미리 이름을 정의하여 열거해두고 사용하는 타입
//// 자바스크립트의 객체로 정의하는 것과 다른 점은, enum에서 선언한 값을 "외부에서 변경할 수 없도록 한다."
//// Enums의 문제점은, tree shaking이 되지 않는 것이다.
//// 일단 아래 아티클은 나중에 읽어보기 (지금 읽어도 뭔말인지 모르겠음)
//// https://velog.io/@ahsy92/TypeScript-Enum%EC%9D%B4%EB%9E%80
// enum 앞에 const를 붙이면, 더 최적화된 index.js를 생성해준다고 한다.
const enum Size {
    Small = 1,
    Medium,
    Large,
} // PascalCase
let mySize: Size = Size.Medium;
console.log(mySize); // 2

// Functions
//// function name(param: paramType):returnType
//// 파라미터에 default값을 부여하면, 해당 파라미터는 optional이 된다.
function calculateTax(income: number, taxYear = 2022): number {
    // let x;

    if (taxYear < 2022) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}
calculateTax(10000, 2022);
calculateTax(10000);

// Type Aliases
type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
};

// Objects
let employee: Employee = {
    id: 1,
    name: "Semin",
    retire: (date: Date) => {
        console.log(date);
    },
};
// readonly property는 수정 불가능
// employee.id = 2;

// Union Types
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs("10");

// Intersection Types
type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
};

// Literal Types
type Qunatity = 50 | 100;
let quantity: Qunatity;
// quantity = 51; // 오류
quantity = 50;
quantity = 100;

type Metric = "cm" | "inch";
let metric: Metric = "cm";

// Nullable Types
function greet(name: string | null | undefined) {
    if (name) console.log(name.toUpperCase());
    else console.log("Hola!");
}

greet(null);

// Optional Chaining
type Customer = {
    birthday?: Date;
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());

// Optional Element Access Operator
let customers: string[] | null = null;
customers?.[0];

// Optional Call
let log: any = null;
log?.("a");
