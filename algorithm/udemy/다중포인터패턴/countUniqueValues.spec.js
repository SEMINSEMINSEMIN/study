import { countUniqueValues } from "./countUniqueValues";
import assert from "assert";

const testCase = [
    { arr: [1, 1, 1, 1, 1, 2], evalue: 2 },
    { arr: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], evalue: 7 },
    { arr: [], evalue: 0 },
    { arr: [-2, -1, -1, 0, 1], evalue: 4 },
];

describe("countUniqueValues 알고리즘 실행 결과", () => {
    const check = (result, expect) => {
        assert.strictEqual(result, expect);
    };
    testCase.forEach(({ arr, evalue }, idx) => {
        const result = countUniqueValues(arr);

        it("test_case " + idx, () => {
            check(result, evalue);
        });
    });
});
