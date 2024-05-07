export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person("太郎", 40);
console.log(me);
