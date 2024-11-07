import { validAnagram } from "./validAnagram";
import assert from "assert";

describe("validAnagram 알고리즘 테스트", () => {
    const testCases = [
        { str1: "", str2: "", expect: true },
        { str1: "aaz", str2: "zza", expect: false },
        { str1: "anagram", str2: "nagaram", expect: true },
        { str1: "rat", str2: "car", expect: false },
        { str1: "awesome", str2: "awesom", expect: false },
        { str1: "qwerty", str2: "qeywrt", expect: true },
        { str1: "texttwisttime", str2: "timetwisttext", expect: true },
    ];

    const check = (result, expect) => {
        assert.strictEqual(result, expect);
    };

    testCases.forEach(({ str1, str2, expect }, idx) => {
        const result = validAnagram(str1, str2);

        it("test_case " + idx, () => {
            check(result, expect);
        });
    });
});
