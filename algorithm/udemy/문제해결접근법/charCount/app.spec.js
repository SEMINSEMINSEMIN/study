import { charCount } from "./app";
import assert from "assert";

const testCase = [
    { str: "aaa", expected_value: { a: 3 } },
    { str: "hello", expected_value: { h: 1, e: 1, l: 2, o: 1 } },
    { str: "Hello hi", expected_value: { h: 2, e: 1, l: 2, o: 1, i: 1 } },
    {
        str: "My password is 1111234",
        expected_value: {
            m: 1,
            y: 1,
            p: 1,
            a: 1,
            s: 3,
            w: 1,
            o: 1,
            r: 1,
            d: 1,
            i: 1,
            1: 4,
            2: 1,
            3: 1,
            4: 1,
        },
    },
];

// describe(testgroup_name): 테스트그룹
describe("charCount 알고리즘 실행 결과", () => {
    testCase.forEach(({ str, expected_value }, idx) => {
        const result = JSON.stringify(charCount(str));
        const expect = JSON.stringify(expected_value);

        const check = (result, expect) => {
            // assert.strictEqual(): === 명령어를 통해 결정되는 엄격한 동일성 테스트 메서드
            assert.strictEqual(result, expect);
        };

        // it(test_name): 테스트케이스
        it("test_case " + idx, () => {
            check(result, expect);
        });
    });
});
