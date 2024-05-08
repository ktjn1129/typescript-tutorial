class Animal {
  constructor(public name: string) {}

  run(): string {
    return "running";
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }

  run(): string {
    return `${super.run()} at ${this.speed}km/h`;
  }
}
