import Controller from "../core/Controller";
import Utils from "../Utils";

const utils = new Utils();

const MainController = class extends Controller {
    constructor(_view, _model) {
        super(_view, _model);
        this.#render();
        // this.view.addEvent({
        //     handleAddTodo: this.handleAddTodo.bind(this),
        //     handleReverseTodo: this.handleReverseTodo.bind(this),
        // });
        utils.bindingMethods(this, "handle");
    }

    // 참고: class에서 화살표 함수로 정의한 경우
    // arrow function: 클래스의 Instance Method가 됨
    // standard function: 클래스의 Prototype Method가 됨
    #render = () => {
        const { todoList } = this.model;
        this.view.displayTodo(todoList);
    };

    /**
     *
     * @param {{id: number, text: string}} _todo
     */
    handleAddTodo = (_todo) => {
        this.model.addTodo(_todo);
        this.#render();
    };

    handleReverseTodo = () => {
        const { reverseTodoList } = this.model;
        this.view.displayTodo(reverseTodoList);
    };
};

export default MainController;
