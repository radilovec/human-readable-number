module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const firstTen = [
        "",
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

    let result = "";

    if (number === 0) {
        return "zero";
    }

    if (number >= 100) {
        result += ones[Math.floor(number / 100)] + " hundred ";
        number %= 100;
    }

    if (number >= 11 && number <= 19) {
        result += firstTen[Math.floor(number % 10)];
        number -= number;
    }

    if (number >= 10) {
        result += tens[Math.floor(number / 10)] + " ";
        number %= 10;
    }

    if (number > 0) {
        result += ones[number];
    }

    return result.trim();
};
