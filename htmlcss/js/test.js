var x=10; //global scope
const y=12; //constant assignment, local scope
if (x<15){
    let x=16;  //local scope
    x=x+1;
    console.log(x)
    console.log(y)
}
console.log(x)