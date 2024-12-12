import { solve } from "./solve";
import assert from "assert";

describe("테스트", () => {
    const testCases = [
        { args: [1, 2, 3], expect: false },
        { args: [1, 2, 2], expect: true },
        { args: ["a", "b", "c", "a"], expect: true },
    ];

    const check = (result, expect) => {
        assert.strictEqual(result, expect);
    };

    testCases.forEach(({ args, expect }, idx) => {
        const result = solve(...args);

        it("test_case " + idx, () => {
            check(result, expect);
        });
    });
});
