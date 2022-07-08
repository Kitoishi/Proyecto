$(function(){
  $("#formu").on("click", function(){
    var i = $(this).index();
    $("#usua").hide();
    $("#usua").eq(i).show();
    $("#trans").hide();
    $("#trans").eq(i).show();
    $("#form").removeClass("active");
    $(this).find("form").addClass("active");
  });
});