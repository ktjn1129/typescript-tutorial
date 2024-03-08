export {};

// 1.
// オプショナルパラメータ
let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    const bmi: number = weight / (height * height);

    if (printable) {
        console.log({ bmi });
    }
    return bmi;
};

bmi(1.78, 86);

// 2.
// デフォルトパラメータ
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
    return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));

// 3.
// Restパラメータ
const reducer = (accumulator: number, currentValue: number) => {
    console.log({ accumulator, currentValue });
    return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
    return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
