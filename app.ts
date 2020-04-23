// javascript types
var animal = {
    name: "Fido",
    species: "Dog",
    age: 5,
    speak: function(){
        console.log('wolf!');
    }
}

function makeTheAnimalSpeak(animal){
    animal.speak();
}

makeTheAnimalSpeak(animal);
