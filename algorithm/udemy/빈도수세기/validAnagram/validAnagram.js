// 내 풀이
export function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    if (str1 === str2.length) return true;

    const freqObj1 = {};
    const freqObj2 = {};

    for (const char of str1) {
        freqObj1[char] = (freqObj1[char] || 0) + 1;
    }

    for (const char of str2) {
        freqObj2[char] = (freqObj2[char] || 0) + 1;
    }

    let answer = true;

    for (const [char1, freq1] of Object.entries(freqObj1)) {
        const freq2 = freqObj2[char1];

        if (!freq2) {
            answer = false;
            break;
        }

        if (freq1 !== freq2) {
            answer = false;
            break;
        }
    }

    return answer;
}

// 모범 답안
function _validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];

        // can't find letter **or letter is zero** then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}
