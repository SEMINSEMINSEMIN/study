import Model from "../core/Model";

const MainModel = class extends Model {
    constructor() {
        super();
        this.todoList = [
            {
                id: 0,
                text: "todo",
            },
        ];
    }

    // 모델에는 '데이터'를 '조작'하는 함수가 포함될 수 있다.
    /**
     *
     * @param {[{id: number, text: string}]} _todo
     */
    addTodo = (_todo) => {
        // this.todoList.push(_todo) 대신 아래 코드가 더 좋은 이유
        //// 데이터를 추가하거나 가공할 경우 "불변성"을 지켜주면 좋다.
        this.todoList = [...this.todoList, _todo];
    };

    // 모델에는 '데이터'를 '가공'하여 리턴하는 함수가 포함될 수 있다.
    get reverseTodoList() {
        return [...this.todoList].reverse();
    }
};

export default MainModel;
