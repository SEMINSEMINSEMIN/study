// 내 풀이
export function countUniqueValues(arr) {
    if (arr.length <= 1) return arr.length;

    let p1 = 0;
    let p2 = 1;
    let uniqueNums = 0;

    while (p2 <= arr.length) {
        if (arr[p1] !== arr[p2]) {
            uniqueNums++;
            p1 = p2;
        }

        p2++;
    }

    return uniqueNums;
}

// 정답
function _countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}
/**
 * arr: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
 *
 * // i : 0, j : 1, arr[i] !== arr[j]는 true (1 !== 2)
 * //// i : 1, arr: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
 *
 * // i : 1, j : 2, arr[i] !== arr[j]는 true (2 !== 3)
 * //// i : 2, arr: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
 *
 * // i : 2, j : 3, arr[i] !== arr[j]는 true (3 !== 4)
 * //// i : 3, arr: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]
 *
 * // i : 3, j : 4, arr[i] !== arr[j]는 false (4 !== 4)
 *
 * // i : 3, j : 5, arr[i] !== arr[j]는 false (4 !== 4)
 *
 * // i : 3, j : 6, arr[i] !== arr[j]는 true (4 !== 7)
 * //// i : 4, arr: [1, 2, 3, 4, 7, 4, 7, 7, 12, 12, 13]
 *
 * // i : 4, j: 7, arr[i] !== arr[j]는 false (7 !== 7)
 *
 * // i : 4, j : 8, arr[i] !== arr[j]는 true (7 !== 12)
 * //// i : 5, arr: [1, 2, 3, 4, 7, 12, 7, 7, 12, 12, 13]
 *
 * // i : 5, j : 9, arr[i] !== arr[j]는 false (12 !== 12)
 *
 * // i : 5, j : 10, arr[i] !== arr[j]는 true (12 !== 13)
 * //// i : 6, arr: [1, 2, 3, 4, 7, 12, 13, 7, 12, 12, 13]
 *
 * 즉 기존 arr에서 고유값을 다 배열의 앞으로 옮겨놓고, i는 마지막 고유값의 인덱스를 기록한 것.
 * 따라서 i + 1를 하면 고유값의 개수를 셀 수 있음
 */
