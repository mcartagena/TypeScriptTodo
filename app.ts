// javascript types
var animal = {
    name: "Fido",
    species: "Dog",
    age: calculateAge(2010),
    speak: function(){
        console.log('wolf!');
    }
}

function makeTheAnimalSpeak(animal){
    animal.speak();
}

function calculateAge(birthYear){
    return new Date(Date.now()).getFullYear() - birthYear;
}

makeTheAnimalSpeak(animal);

console.log(animal.age.toString());

// the following functions is only for apply knowledge

function totalLength(x: any[],y:string): number{
    var total:number = x.length + y.length;
    return total;
}

console.log(totalLength([1,"hola",2],"chao"));