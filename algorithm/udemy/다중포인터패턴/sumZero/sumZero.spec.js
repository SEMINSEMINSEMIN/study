import { sumZero } from "./sumZero";
import assert from "assert";

const testCase = [
    { arr: [-3, -2, -1, 0, 1, 2, 3], evalue: [-3, 3] },
    { arr: [-2, 0, 1, 3], evalue: undefined },
    { arr: [1, 2, 3], evalue: undefined },
];

describe("sumZero 알고리즘 실행 결과", () => {
    const check = (result, expect) => {
        // 객체나 배열의 내용을 재귀적으로 비교하여 값을 확인
        assert.deepStrictEqual(result, expect);
    };
    testCase.forEach(({ arr, evalue }, idx) => {
        const result = sumZero(arr);

        it("test_case " + idx, () => {
            check(result, evalue);
        });
    });
});
