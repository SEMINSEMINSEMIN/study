// 내 풀이
export function sumZero(arr) {
    if (arr.length <= 1) return;

    let p1 = 0;
    let p2 = arr.length - 1;
    let result;

    while (p1 <= arr.length - 2) {
        const val1 = arr[p1];
        const val2 = arr[p2];
        const sum = val1 + val2;

        if (sum === 0) {
            result = [val1, val2];
            break;
        } else {
            if (p2 - 1 === p1) {
                p1++;
                p2 = arr.length - 1;
            } else {
                p2 -= 1;
            }
        }
    }

    return result;
}

// 정답
// 왼쪽 끝과 오른쪽 끝에서 가운데로 이동하는 방식
// 시간 복잡도: O(n)
function sumZero1(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
