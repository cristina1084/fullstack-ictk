function add(a,b,callback){
    var c = a+b;
    callback(c);
}

/* function display(res){
    document.getElementById('results').innerHTML = res;
} 
 */

add(5,6,(res)=>{
    document.getElementById('results').innerHTML = res;  //ecma script 6
});