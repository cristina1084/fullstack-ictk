function add(a,b){
    var c = a + b;
    return c;
}
function sub(a,b){
    var c = a - b;
    return c
}
function mul(a,b){
    var c = a * b;
    return c;
}
function div(a,b){
    var c = a / b;
    return c;
}
function arithmetic(){
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var n3;
    var o = document.getElementById("operation").value;
    
   if(o == "+"){
        //n3 = n1 + n2;
        n3 = add(n1, n2);
    }
    else if (o == "-"){
        //n3 = n1 - n2;
        n3 = sub(n1, n2);
    }
    else if (o == "*"){
        //n3 = n1 * n2;
        n3 = mul(n1, n2);
    }
    else if (o == "/"){
        if (n2==0){
            alert("Division by zero not possible");
        }
        else{
            //n3 = n1/n2;
            n3 = div(n1, n2)
        }
    }
    if (o == "/" && n2 == 0){
        document.getElementById("result").innerHTML = " ";
    }
    else{
        document.getElementById("result").innerHTML = "<b>"+n3+"</b>"; //can add html tags
    } 
    
}