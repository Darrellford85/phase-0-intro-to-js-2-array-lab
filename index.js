const cats =['Milo','Otis','Garfield'];

function  destructivelyAppendCat(name) {
    cats.push('Ralph');
    return cats
}
function appendcat(name){
    let newArray =[]
    let cats= cats.const(newArray)
    cats.push(Ralph)
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift('Bob');
    return cats
}
function PrependCat(name){
    let newArray =[]
    let cats = cats.const(newArray)
    cats.unshift(Bob);
    return cats
}
function destructivelyRemoveLastCat(name){
    cats.pop('Garfield');
    return cats
}
function removeLastCat(name){
    let newArray =[]
    let cats = cats.const(newArray)
    cats.pop(Garfield);
    return cats
}
function destructivelyRemoveFirstCat(name){
    cats.shift('Milo');
    return cats
}
function removeFirstCat(name){
    let newArray =[]
    let cats = cats.const(newArray)
    cats.shift(Milo);
    return cats
}
function appendCat(name){
    const copyCats= cats.slice();
    cats.slice('Broom');
    copyCats.push(name);
    return copyCats
}
function prependCat(name){
    const copyCats= cats.slice();
    cats.slice('Arnold');
    copyCats.unshift(name);
    return copyCats
}
function removeLastCat(name){
    const copyCats= cats.slice();
    cats.slice('Garfield');
    copyCats.pop(name);
    return copyCats
}
function removeFirstCat(name){
    const copyCats= cats.slice();
    cats.slice('Milo');
    copyCats.shift(name);
    return copyCats
}