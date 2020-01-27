$(".CheeseBur").on("click", function(event) {  
    event.preventDefault();
    var ingredients = "Turkey Burger";
      console.log(ingredients)
    $("#burgerEntry").text(ingredients);    
});
  
$(".ChickenBur").on("click", function(event) {  
    event.preventDefault();
    var ingredients = "Chicken Burger";
      console.log(ingredients)
    $("#burgerEntry").text(ingredients);
  });
  
  $(".TurkeyBur").on("click", function(event) {  
    event.preventDefault();
    var ingredients = "Turkey Burger";
      console.log(ingredients)
    $("#burgerEntry").text(ingredients);
  });

