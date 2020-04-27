interface TodoCustomType{
    name: string;
    completed?: boolean;
    state: TodoStateCustomType
}

interface ITodoCustomTypeService{
    add(TodoCustomType: TodoCustomType): TodoCustomType;
    delete(TodoCustomTypeId: number): void;
    getAll(): TodoCustomType[];
    getById(TodoCustomTypeId: number): number;
}

// Enums

enum TodoStateCustomType {
    New = 1,
    Active,
    Complete,
    Deleted
}

var TodoCustomType2:  TodoCustomType = {
    name: "Pick up drycleaning",
    get state(){
        return this._state;
    },
    set state(newState){

        if(newState == TodoStateCustomType.Complete){
            var canBeCompleted = TodoStateCustomType.Active || this.state ==  TodoStateCustomType.Deleted;

            if(!canBeCompleted){
                throw 'TodoCustomType must be Active or Deleted in order to be marked completed'
            }
        }

        this._state = newState;
    }
}

TodoCustomType2.state = TodoStateCustomType.Complete;
