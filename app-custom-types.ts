interface Todo{
    name: string;
    completed?: boolean;
    state: TodoState
}

interface ITodoService{
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): number;
}

// Enums

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

var todo2:  Todo = {
    name: "Pick up drycleaning",
    state: TodoState.New
}


