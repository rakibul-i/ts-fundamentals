// string
let greeting: string = "Hello world!";

// number
let count: number = 56;

// boolean
let isPublished: boolean = true;

// any
let x: any = "Hello, I'm taking any as my value";

// array
let ids: number[] = [23, 543, 23];

// any type of array
let arr: any[] = [34, "hello", true, { greeting: "hello" }];

// Tuple
let person: [number, string, boolean] = [1, "Mehedi", true];

// Tuple array
let employee: [number, string][];

employee = [
  [1, "Mehedi"],
  [2, "Nahid"],
];

// Union
let id: string | number;

id = 34;

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction1.Down);
console.log(Direction2.Down);

// objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 12,
  name: "Jhon",
};

// Type Assertion
let cid: any = 1;
// let customarId = <number>cid;
let customarId = cid as number;

// Functions
function addNum(z: number, y: number): number {
  return z + y;
}

// console.log(addNum(1, 34));

function log(message: string | number): void {
  console.log(message);
}

// log(345);

// Interfaces
interface UserInterfaces {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterfaces = {
  id: 3,
  name: "user1",
};

// user1.id = 4;

interface MyFunc {
  (x: number, y: number): number;
}

const myFunc: MyFunc = (x: number, y: number): number => {
  return x + y;
};

// classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const mehedi = new Person(2, "mehedi");
console.log(mehedi.name);
