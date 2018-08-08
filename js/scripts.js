$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    var chip = $("input:radio[name=chip]:checked").val();
    var food = $("#food").val();
    var beverage = $("#beverage").val();
    $("#output #rchip").text(chip);
    $("#output #rfood").text(food);
    $("#output #rbeverage").text(beverage);
  });
});
