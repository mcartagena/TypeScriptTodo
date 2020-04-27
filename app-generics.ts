function clone<T>(value: T): T{
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}

clone('Hello');

clone(123);

clone({name: 'Leito'});

var arrayNumber: number[] = [1, 2, 3];

var arrayNumber2: Array<number> = [1, 2, 3];

class KeyValuePair<Tkey, Tvalue>{
    constructor(
        public key: Tkey,
        public value: Tvalue
    ){
    }
}

let pair1 = new KeyValuePair(1,'First');
let pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));
let pair3 = new KeyValuePair<number, string>(3, 'Third');

class KeyValuePairPrinter<T, U> {
    
    constructor(private pairs: KeyValuePair<T, U>[]) {
    }
    
    print() {
        
        for ( let p of this.pairs ) {
            console.log(`${p.key}: ${p.value}`)
        }
    }
    
}


var printer = new KeyValuePairPrinter([ pair1, pair3 ])
printer.print();
