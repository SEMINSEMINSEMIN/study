import View from "../core/View";

const MainView = class extends View {
    constructor() {
        super(document.querySelector("main"));
        this.init();
    }

    getTemplate = () => {
        return `
            <ul></ul>
            <button class="add_button">Add</button>
            <button class="reverse_button">Reverse</button>
        `;
    };

    /**
     *
     * @param {[{id: number, text: string}]} _todoList
     */
    displayTodo = (_todoList) => {
        const ul = this.$newEl.querySelector("ul");
        ul.innerHTML = `${_todoList
            .map(
                (_todo) => `
                <li data-id="${_todo.id}">
                    ${_todo.text} ${_todo.id}
                </li>
            `
            )
            .join("")}`;
    };

    /**
     *
     * @param {{handleAddTodo: (_todo: {id: number, text: string}) => {}, handleReverseTodo: () => {}}} _handlers
     */
    addEvent = (_handlers) => {
        this.$newEl.addEventListener(
            "click",
            this.#runDomEvents(_handlers),
            true // 캡처링 단계에서 이벤트 수행
        );
    };

    /**
     *
     * @param {{handleAddTodo: (_todo: {id: number, text: string}) => {}, handleReverseTodo: () => {}}} param0
     * @returns
     */
    #runDomEvents = ({ handleAddTodo, handleReverseTodo }) => {
        return ({ target }) => {
            if (target.classList.contains("add_button")) {
                const $lastTodoListItem =
                    this.$newEl.querySelector("li:last-child");
                const nextId = Number($lastTodoListItem.dataset.id) + 1;
                const todo = {
                    id: nextId,
                    text: "todo",
                };

                handleAddTodo(todo);
            }

            if (target.classList.contains("reverse_button")) {
                handleReverseTodo();
            }
        };
    };
};

export default MainView;
