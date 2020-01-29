$(".CheeseBur").on("click", function(event) {  
    event.preventDefault();
    var newBurger = {
      burger_name:"Cheese Burger" ,
      devoured: false
    };
      // console.log(newBurger)
    $("#burgerEntry").text(newBurger.burger_name);   
    $.post("/api/new", newBurger)
    // On success, run the following code
    .then(function (res) {
        console.log(res);
    });

});
  
$(".ChickenBur").on("click", function(event) {  
    event.preventDefault();
    var newBurger = {
      burger_name:"Chicken Burger" ,
      devoured: false
    };
      // console.log(newBurger)
      $("#burgerEntry").text(newBurger.burger_name);   
      $.post("/api/new", newBurger)
      // On success, run the following code
      .then(function (res) {
          console.log(res);
      });
  });
  
  $(".TurkeyBur").on("click", function(event) {  
    event.preventDefault();
    var newBurger = {
      burger_name:"Turkey Burger" ,
      devoured: false
    };
      // console.log(newBurger)
    $("#burgerEntry").text(newBurger);   
    $("#burgerEntry").text(newBurger.burger_name);   
    $.post("/api/new", newBurger)
    // On success, run the following code
    .then(function (res) {
        console.log(res);
    });
  });


  // When the page loads, grab all of devoure burgers

  $.get("/api/all", function(data) {
  });