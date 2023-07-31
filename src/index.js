module.exports = function toReadable(number) {
    const numbers1to19 = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        const numIndex = number - 1;

        return `${numbers1to19[numIndex]}`;
    }

    if (number >= 20 && number < 100) {
        const firstNum = Math.floor(number / 10) - 2;
        const secondNum = (number % 10) - 1;

        return `${tens[firstNum]} ${secondNum < 0 ? '' : numbers1to19[secondNum]}`.trim();
    }

    if (number >= 100 && number < 1000) {
        const hundredNum = Math.floor(number / 100) - 1;
        const otherNums = number % 100;

        return `${numbers1to19[hundredNum]} hundred ${otherNums !== 0 ? toReadable(otherNums) : ''}`.trim();
    }
}