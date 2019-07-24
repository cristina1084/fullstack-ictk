var x=10; //global scope
const y=12; //constant assignment, local scope
//y=y+1 -> error
if (x<15){
    let x=16;  //local scope
    x=x+1;
    const a = 13;
    console.log(x)
    console.log(y)
}
console.log(x)
// console.log(a) -> error "a is not defined"