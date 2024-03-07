export {};

// オプショナルパラメータ
let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    const bmi: number = weight / (height * height);

    if(printable) {
        console.log({ bmi });
    }
    return bmi;
};

bmi(1.78, 86);


// デフォルトパラメータ
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
    return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));