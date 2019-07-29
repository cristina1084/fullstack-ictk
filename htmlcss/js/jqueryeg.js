//jQuery

$(document).ready( function () {     //document refers to DOM, ready function checks whether DOM has loaded
    $("h1").click( function (){
        //alert("Clicked");
        $(this).hide();           //'this' points to the current object
    });
});


//<h1> --->  $("h1")
//<h1 class="test">  --> $(".test")
//<h1 id="test">     --> $("#test")