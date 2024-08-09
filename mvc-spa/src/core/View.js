export default class View {
    constructor($target) {
        this.$target = $target;

        // virtual DOM
        //// 가상의 DOM으로 메모리에 저장되어 있는, 아직 실체화 되지 않은 DOM
        //// 자바스크립트를 통해 DOM을 만들었으며 DOM을 실제로 브라우저에 부착하기 전까지는 메모리상에 존재하기만 한다.
        this.$newEl = this.$target.cloneNode(true);
    }

    init = () => {
        this.$newEl.innerHTML = this.getTemplate();
        this.$target.replaceWith(this.$newEl);
    };

    getTemplate = () => {};

    addEvent = () => {};
}
