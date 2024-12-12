// 내 풀이
export function maxSubarraySum(arr, n) {
    if (arr.length < n) return null;

    let i = 0;
    let j = i;
    let maxSum = 0;
    let sum = 0;

    while (i <= arr.length - n) {
        if (j < i + n) {
            sum += arr[j];
            j++;
        } else {
            if (sum > maxSum) {
                maxSum = sum;
            }

            i++;
            j = i;
            sum = 0;
        }
    }

    return maxSum;
}

// 정답
function _maxSubarrySum(arr, num) {
    if (arr.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum = arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}
