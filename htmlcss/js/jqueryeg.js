//jQuery

/* $(document).ready( function () {     //document refers to DOM, ready function checks whether DOM has loaded
    $("h1").click( function (){
        //alert("Clicked");
        $(this).hide();           //'this' points to the current object
    });
}); */

/* $(document).ready( function(){
    $('#btn1').click(function(){   //dblclick() --> for double click
        $("#p1").show(10000);  //set time delay
    });
    $('#btn2').click(function(){
        $('#p1').hide();
    });
    $('#p1').mouseenter(function(){
        $('#p1').css("background-color","yellow");  //manipulate css
    });
}); */
var i = 1;
$(document).ready(function(){
    $("#btn1").click(function(){
       // $("#p1").toggle();           //toggle btwn hiding & showing , can add delay
        //var y = $("#ip").val();       //to read input value
        //console.log(y);
        $("#p1").text("You clicked me " + i +" times");  //display value
        i++;
        if(i==11){
            $("#btn1").prop("disabled","true");  //button property
        }
        
    });
});

//<h1> --->  $("h1")
//<h1 class="test">  --> $(".test")
//<h1 id="test">     --> $("#test")
