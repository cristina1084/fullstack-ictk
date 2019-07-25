var m = Array();
var i = 0;

function getMovieName(){
    
    m[i] = document.getElementById("movie").value;
    i++;
    var result = "";
    for(j=0;j<m.length;j++){
        result+=m[j]+"<br>";                //important!
    }
    //var mov = document.getElementById("movie").value;
    document.getElementById("listmovie").innerHTML = result;
    console.log(m);
}

