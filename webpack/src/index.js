function component() {
    const element = document.createElement("div");

    // _.join()은 Lodash 메서드로서, 배열의 모든 요소를 구분 기호로 구분된 문자열로 변환하는 데 사용된다.
    // 아래 명령어 실행시, "Hello webpack"이라는 문자열이 반환된다.
    // 아래 명령어가 작동하기 위해서는, Lodash가 필요하다.
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    return element;
}

document.body.appendChild(component());
