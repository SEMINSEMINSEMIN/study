import { same, _same_1 } from "./same";
import assert from "assert";

const testCase = [
    { arr1: [1, 2, 3], arr2: [4, 1, 9], evalue: true },
    { arr1: [1, 2, 3], arr2: [1, 9], evalue: false },
    { arr1: [1, 2, 1], arr2: [4, 4, 1], evalue: false },
];

describe("same 알고리즘 실행 결과", () => {
    const check = (result, expect) => {
        assert.strictEqual(result, expect);
    };
    testCase.forEach(({ arr1, arr2, evalue }, idx) => {
        const result = same(arr1, arr2);

        it("test_case " + idx, () => {
            check(result, evalue);
        });
    });
});
