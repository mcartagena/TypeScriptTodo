let myName: string = "Marcelo";

var container = document.getElementById('container');

var todo = {
    id: 123,
    name: 'Pick up drycleaning false',
    completed: false
}

container.innerHTML = `
<div todo='${todo.id}' class="list-group-item}">
    <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok">nose para que</i>
    <span class="name">${todo.name}</span>
</div>
`
var array = [
    "Pick up drycleaning",
    "Clean Batcave",
    "Save Gotham"
];

for (var index in array){
    let value = array[index];
    console.log(`${index} : ${value}`);
}

for (var value of array){
    console.log(`${value}`);
}

// destructuring

var array2 = [123,"Pick up drycleaning", false];

var [id, title, completed] = array2;

console.log(id);
console.log(title);
console.log(completed);

var a = 5;
var b = 6;

var [b, a] = [a, b];

console.log(a);
console.log(b);

function test(id){
    return {
            id: '123',
            name: "Pick up drycleaning false",
            completed: false
        };
}

var {completed: isCompleted, name: _name, id: id2} = test(123);

console.log(id2);
console.log(_name);
console.log(isCompleted);