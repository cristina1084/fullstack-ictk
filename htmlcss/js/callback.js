//callback functionality

const messages = [{
    'title':'First Message'
}];
function sendMessage1(){
    var output="";

    setTimeout(()=>{
        for(var i=0; i<messages.length; i++)
            output+="<li>" + messages[i].title + "</li>";
        document.getElementById('results').innerHTML = output;
    },1000)
}

function sendMessage2(msg,callback){
    setTimeout(()=>{
        messages.push(msg);
        callback();
    },2000) 
}

sendMessage1();
sendMessage2({'title':'Second Message'},sendMessage1);