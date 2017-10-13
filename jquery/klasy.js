$(document).ready(function() {

    $("#tlo1").click(function() {
        $("#akapit").addClass("tlo1");
    });

    $("#tlo2").click(function() {
        $("#akapit").addClass("tlo2");
    });

    $("#brak").click(function() {
        //$("#akapit").removeClass("tlo1");
        $("#akapit").removeClass();
    });

    $("#testtlo1").click(function() {

        alert( $("#akapit").hasClass("tlo1") );
    });

});
