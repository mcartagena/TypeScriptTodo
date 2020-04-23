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

function totalLengths(x: (string | any[]), y: (string | any[])): number{
    var total:number = x.length + y.length;
    
    x.slice(0);

    if(x instanceof Array){
        x.push('abc');
    }
    
    if( x instanceof String ){
        x.substring(1);
    }
    
    return total;
}

console.log(totalLengths([1,"hola",2],"chao"));

function totalCalculateLength(x: string, y: string): number
function totalCalculateLength(x: any[], y: any[]): number
function totalCalculateLength(x: (string | any[]), y: (string | any[])): number{
    var total:number = x.length + y.length;
    
    x.slice(0);

    if(x instanceof Array){
        x.push('abc');
    }
    
    if( x instanceof String ){
        x.substring(1);
    }
    
    return total;
}

console.log(totalCalculateLength([1,"hola",2],["chao"]));