$(function(){
    $("#sh > input:eq(0)").click(function(){
        $("#sh > div").show();
    });
    $("#sh> input:eq(1)").click(function(){
        $("#sh > div").hide();
    });

    $("#sh > input:eq(2)").on("click", function(){
        $("#sh > div").toggle();
    });

    $("#fade > input:eq(0)").on("click", function(){
        $("#fade > div").fadeIn(3000);
    });

    $("#fade > input:eq(1)").on("click", function(){
        $("#fade > div").fadeOut(4000);
    });
    $("#fade > input:eq(2)").on("click", function(){
        $("#fade > div").fadeToggle(6000);
    });

    $("#slide > input:eq(0)").on("click", function(){
        $("#slide > div").slideDown(2000);
    });
    $("#slide > input:eq(1)").on("click", function(){
        $("#slide > div").slideUp(2000);
    });
    $("#slide > input:eq(2)").on("click", function(){
        $("#slide > div").slideToggle(2000);
    });
})

//$("#sh > input:eq(2)").click(function(){
    //$("#sh > div").hide();
//})





