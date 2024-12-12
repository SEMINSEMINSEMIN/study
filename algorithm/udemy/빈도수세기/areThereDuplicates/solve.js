// https://www.notion.so/seminriver/100-24199cae10014d5496adcfd1d2c725a1?pvs=4#0675fd69985547bfa74cad9629c067d0

// 내 풀이
export const solve = (...args) => {
    const freq = {};

    for (const e of args) {
        if (freq[e]) return true;

        freq[e] = 1;
    }

    return false;
};

// 정답: 빈도 수 세기
function areThereDuplicates() {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for (let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}
