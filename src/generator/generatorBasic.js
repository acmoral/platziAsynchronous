function* gen(){
    yield 1;
    yield 2;
    yield 3;
    return 'it is done'
}

const g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

function* iterable(array){
    for(let value of array){
        yield value;
    }
    return 'its done';
}
const it = iterable(['andrea','carolina','mora','lopez']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);