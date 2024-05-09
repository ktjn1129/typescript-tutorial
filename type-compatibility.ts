export {};

// 互換性あり
let fooCompatible: any;
let barCompatible: string = "TypeScript";
fooCompatible = barCompatible;

// 互換性なし
let fooIncompatible: string;
let barIncompatible: number = 1;
// fooIncompatible = barIncompatible;

// 互換性あり
let fooString: string;
let barString: string = "string";
fooString = barString;

// 互換性あり
let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral;

// 互換性あり
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

// 同じプロパティを持つ場合のみオブジェクト間の互換性あり（構造的部分型）
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(30, "taro");
