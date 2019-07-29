//jQuery

/* $(document).ready( function () {     //document refers to DOM, ready function checks whether DOM has loaded
    $("h1").click( function (){
        //alert("Clicked");
        $(this).hide();           //'this' points to the current object
    });
}); */

$(document).ready( function(){
    $('#btn1').click(function(){
        $("#p1").show();
    });
    $('#btn2').click(function(){
        $('#p1').hide();
    });
});

//<h1> --->  $("h1")
//<h1 class="test">  --> $(".test")
//<h1 id="test">     --> $("#test")