// https://www.notion.so/seminriver/100-24199cae10014d5496adcfd1d2c725a1?pvs=4#251ceb5cbf6740588f2aef1a455e9a3e

// 내 풀이
export const sameFrequency = (int1, int2) => {
    const freq1 = {};

    int1 += "";
    int2 += "";

    for (let i = 0; i < int1.length; i++) {
        const digit = int1[i];
        freq1[digit] = (freq1[digit] || 0) + 1;
    }

    for (let j = 0; j < int2.length; j++) {
        const digit = int2[j];
        const digitFreq = freq1[digit];

        if (!digitFreq) return false;

        if (digitFreq - 1 < 0) return false;

        freq1[digit] -= 1;
    }

    return true;
};

// 정답
function _sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}
