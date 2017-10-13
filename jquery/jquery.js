jQuery(document).ready(function() {

    $("#tekst").click(function() {

        //$("#lorem").toggle();
        //$("#lorem").toggle("slow");
        //$("#lorem").toggle("normal");
        //$("#lorem").toggle("fast");
        $("#lorem").toggle(500);


        $("div").css("background", "yellow");

        $(".tekst").css("background", "#86d0f2");

        $("#id1").css("background", "red");
        $("#id2").css("color", "white");

        $("#id1").css({"background":"white", "color":"red"});

        $("p").css("font-family", "Arial, Verdana");
        $("p").css({"color":"red", "font-size": "120%"});

    });


    $("#zmien_kolor").click(function() {
        $("p").css("color", "lime");
    });


    $("a").css("color", "green");
    $("#link a").css("color", "red");


});


