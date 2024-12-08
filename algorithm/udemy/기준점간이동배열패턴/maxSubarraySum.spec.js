import { maxSubarraySum } from "./maxSubarraySum";
import assert from "assert";

const testCase = [
    { arr: [1, 2, 5, 2, 8, 1, 5], n: 2, evalue: 10 },
    { arr: [1, 2, 5, 2, 8, 1, 5], n: 4, evalue: 17 },
    { arr: [4, 2, 1, 6], n: 1, evalue: 6 },
    { arr: [4, 2, 1, 6, 2], n: 4, evalue: 13 },
    { arr: [], n: 4, evalue: null },
];

describe("maxSubarraySum 알고리즘 실행 결과", () => {
    const check = (result, expect) => {
        assert.strictEqual(result, expect);
    };
    testCase.forEach(({ arr, n, evalue }, idx) => {
        const result = maxSubarraySum(arr, n);

        it("test_case " + idx, () => {
            check(result, evalue);
        });
    });
});
