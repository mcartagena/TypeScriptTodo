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
