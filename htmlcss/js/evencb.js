$(document).ready(function(){
    function even(x,callback){
        console.log(x);
        if(x%2==0) callback('Even');
        else callback('Odd');
    }

    $("#num1").change(function(){
        var x = $("#num1").val();
        console.log(x);
        even(x,(stat)=>{
            $("#result").text(stat);
        })
    })
})

/* function even(x,callback){
    console.log(x);
    
    if(x%2==0) callback('Even');
    else callback('Odd');
}

var x= document.getElementById("num1").value;
even(x,(stat)=>{
    document.getElementById("result").innerHTML = stat;
}) */


/* even($(document).ready(function(){
    $("#num1").click(function(){
        $('#num1').val();
    })
}) , (res)=>{
    $('#result').text(res);
}) */
