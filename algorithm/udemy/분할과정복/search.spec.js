import { search } from "./search";
import assert from "assert";

const testCase = [
    { arr: [1, 2, 3, 4, 5, 6], n: 4, evalue: 3 },
    { arr: [1, 2, 3, 4, 5, 6], n: 6, evalue: 5 },
    { arr: [1, 2, 3, 4, 5, 6], n: 11, evalue: -1 },
];

describe("search 알고리즘 실행 결과", () => {
    const check = (result, expect) => {
        assert.strictEqual(result, expect);
    };
    testCase.forEach(({ arr, n, evalue }, idx) => {
        const result = search(arr, n);

        it("test_case " + idx, () => {
            check(result, evalue);
        });
    });
});
