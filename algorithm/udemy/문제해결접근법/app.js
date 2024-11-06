// https://www.notion.so/seminriver/bb93e98f00ef4b64b38d4ed5182dde19?pvs=4

/**
 * Write a function which takes in a string and returns counts of each character in the string
 * 숫자를 추적하고 모든 문자를 추적하는 한편 문자를 소문자로 바꾸기
 * 단, 공백이나 기호는 추가하지 않는다
 * @param {string} str
 * @returns
 */
export const charCount = (str) => {
    // 1. 문자열의 문자 유형 및 개수를 담을 객체를 선언한다.
    const answer = {};

    // 2. str 문자열에 대해 루프를 돈다.
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        //// 해당 문자를 소문자화 한다.
        char = char.toLowerCase();
        //// 해당 문자가 영문 또는 숫자에 속하지 않는 경우 => 다음 루프로 넘어간다.
        if (!/[a-z0-9]/.test(char)) continue;

        //// 해당 문자가 영문 또는 숫자에 속하는 경우 => 아래 단계를 진행한다.
        if (answer[char] === undefined) {
            ////// 각 문자가 1에서 선언한 객체에 없는 경우 => 객체(1)에 해당 문자를 등록한 뒤, 개수를 1로 초기화한다.
            answer[char] = 1;
        } else {
            ////// 각 문자가 객체(1)에 있는 경우 => 해당 문자의 개수에 플러스 1을 한다.
            answer[char] += 1;
        }
    }

    // 3. 객체(1)을 리턴한다.
    return answer;
};
