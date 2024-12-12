// 내 풀이
export function same(arr1, arr2) {
    const obj1 = {};
    const obj2 = {};

    arr1.forEach((val1) => {
        const prevFreq = obj1[val1];
        obj1[val1] = prevFreq ? prevFreq + 1 : 1;
    });

    arr2.forEach((val2) => {
        val2 = Math.sqrt(val2);
        const prevFreq = obj2[val2];
        obj2[val2] = prevFreq ? prevFreq + 1 : 1;
    });

    if (obj1.length !== obj2.length) return false;

    let answer = true;

    for (const [obj1Key, obj1Val] of Object.entries(obj1)) {
        const obj2Val = obj2[obj1Key];

        if (obj2Val === undefined) {
            answer = false;
            break;
        } else if (obj1Val !== obj2Val) {
            answer = false;
            break;
        }
    }

    return answer;
}

// 모범답안
function _same(arr1, arr2) {
    // arr1와 arr2의 길이가 같지 않으면 매칭 자체가 안 되므로, 추가적인 로직을 더 진행하기 전에 false를 리턴
    if (arr1.length !== arr2.length) return false;

    const freqCounter1 = {};
    const freqCounter2 = {};

    for (const val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for (const val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for (const key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) return false;

        if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
    }

    return true;
}

export function _same_1(arr1, arr2) {
    // arr1와 arr2의 길이가 같지 않으면 매칭 자체가 안 되므로, 추가적인 로직을 더 진행하기 전에 false를 리턴
    if (arr1.length !== arr2.length) return false;

    const freqCounter1 = {};

    for (const val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        val = Math.sqrt(val);

        if (!freqCounter1[val]) {
            return false;
        } else {
            freqCounter1[val] -= 1;
        }
    }

    return true;
}
