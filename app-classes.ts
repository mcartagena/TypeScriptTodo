// ES5 does not have class definition ES6 does

/*
function TodoService(){
    this.todos = ['Wash your hands','Take a course','See the cars'];
}

TodoService.prototype.getAll = function(){
    return this.todos;
}

var service = new TodoService();
console.log(service.getAll());

*/

/* ES6 definition

class TodoService{
    todos;

    constructor(){
        this.todos = [];
    }

    getAll(){

    }
} */

// Typescript definition
interface Todo{
    id: number;
    name: string;
    completed?: boolean;
    state: TodoState
}
interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}
interface IIdGenerator {
    nextId: number;
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}


class TodoService implements ITodoService, IIdGenerator{

    private static _lastId: number = 0;

    get nextId() {
        return TodoService.getNextId();
    }

    set nextId(nextId) {
        TodoService._lastId = nextId - 1;
    }

    constructor(private todos: Todo[]){
        this.todos = todos;
    }

    getAll(){
        return this.todos;
    }
    getById(todoId: number): Todo {
        var filtered = 
            this.todos.filter(x => x.id == todoId);
            
        if( filtered.length ) {
            return filtered[0];
        }
        
        return null;
    }
    static getNextId() {
        return TodoService._lastId += 1;
    }

    add(todo: Todo): Todo {
        todo.id = this.nextId;
        
        this.todos.push(todo);
        
        return todo;
    }
    delete(todoId: number): void {
        var toDelete = this.getById(todoId);
        
        var deletedIndex = this.todos.indexOf(toDelete);
        
        this.todos.splice(deletedIndex, 1);
    }    

}

let todoS = new TodoService([{
    id: 0,
    name: "Wash your hands",
    completed: true,
    state: 1
}]);

console.log(todoS.getAll());
console.log(todoS.add({
    id: 1,
    name: "Dry your hands",
    completed: false,
    state: 1
}));

class SmartTodo {
    name: string;
    _state: TodoState;

    constructor(name: string){
        this.name = name;
        this._state = TodoState.New;
    }

    get state(){
        return this._state;
    }

    set state(newState){

        if(newState == TodoState.Complete){
            console.log("set state",newState);
            var canBeCompleted = this.state == TodoState.Active || this.state ==  TodoState.Deleted;
            console.log("set state",canBeCompleted);

            if(!canBeCompleted){

                throw 'Todo must be Active or Deleted in order to be marked completed'
            }
        }

        this._state = newState;
    }
}

//let varSmartTodo = new SmartTodo("Pick up drycleannig");

//varSmartTodo.state = TodoState.Complete;

// console.log(varSmartTodo);

// inheriting behaviour from a base class

abstract class TodoStateChanger {
    constructor(protected newState: TodoState){

    }
    /*
    abstract canChangeState(todo: Todo): boolean{
        return !!todo;
    } */

    abstract canChangeState(todo: Todo): boolean;

    changeState(todo: Todo): Todo {
        if(this.canChangeState(todo)){
            todo.state = this.newState;
        }
        return todo;
    }
}

class CompleteTodoStateChanger extends TodoStateChanger{
    constructor(){
        super(TodoState.Complete);
    }
    canChangeState(todo: Todo): boolean{
        // remove for abstract method return super.canChangeState(todo) && (
        return !!todo && (
                todo.state == TodoState.Active
            || todo.state == TodoState.Deleted
        );
    }
}

let cmpStateChanger = new CompleteTodoStateChanger();
let newTodo: Todo = {
    id : 2,
    name: 'Marcelo',
    state: TodoState.New    
};

console.log('canChangeState',cmpStateChanger.canChangeState(newTodo));