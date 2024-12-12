// 내 풀이
export const search = (arr, n) => {
    let startIdx = 0;
    let endIdx = arr.length - 1;

    while (true) {
        if (startIdx === endIdx) {
            return n === arr[startIdx] ? startIdx : -1;
        } else {
            const baseIdx = Math.floor((startIdx + endIdx) / 2);
            const baseVal = arr[baseIdx];

            if (n > baseVal) {
                startIdx = baseIdx + 1;
            } else if (n < baseVal) {
                endIdx = baseIdx;
            } else if (n === baseVal) {
                return baseIdx;
            }
        }
    }
};

// 정답
// 분할 정복 알고리즘
// 시간 복잡도: Log(N) - 이진 탐색
function _search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}
