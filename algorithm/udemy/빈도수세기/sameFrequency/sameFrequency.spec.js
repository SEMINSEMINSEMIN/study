import { sameFrequency } from "./sameFrequency";
import assert from "assert";

describe("sameFrequency 알고리즘 테스트", () => {
    const testCases = [
        { args: 182, int2: 281, expect: true },
        { int1: 34, int2: 14, expect: false },
        { int1: 3589578, int2: 5879385, expect: true },
        { int1: 22, int2: 222, expect: false },
    ];

    const check = (result, expect) => {
        assert.strictEqual(result, expect);
    };

    testCases.forEach(({ int1, int2, expect }, idx) => {
        const result = sameFrequency(int1, int2);

        it("test_case " + idx, () => {
            check(result, expect);
        });
    });
});
