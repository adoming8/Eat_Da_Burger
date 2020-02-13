$(".CheeseBur").on("click", function(event) {  
    event.preventDefault();
    var newBurger = {
      burger_name:"Cheese Burger" ,
      devoured: false
    };
      // console.log(newBurger)
    // $("#burgerEntry").text(newBurger.burger_name);   
    $.post("/api/new", newBurger)
    // On success, run the following code
    .then(function (res) {
        console.log(res);
        var row = $("<div class= 'burgbox'>");
        row.append(`<p> ${newBurger.burger_name}  </p>`);
        row.append(`<button class= "devour" data-id=${res.id}>Devour</button>`);

        $("#burgerEntry").prepend(row);
         window.tburger = newBurger
    });

});
  
$(".ChickenBur").on("click", function(event) {  
    event.preventDefault();
    var newBurger = {
      burger_name:"Chicken Burger" ,
      devoured: false
    };
      // console.log(newBurger)
      $.post("/api/new", newBurger)
      // On success, run the following code
      .then(function (res) {
          console.log(res);
          var row = $("<div class= 'burgbox'>");
          row.append(`<p> ${newBurger.burger_name}  </p>`);
          row.append(`<button class= "devour" data-id=${res.id}>Devour</button>`);
  
          $("#burgerEntry").prepend(row);
           window.tburger = newBurger
      });
  });
  
$(".TurkeyBur").on("click", function(event) {  
    event.preventDefault();
    var newBurger = {
      burger_name: "Turkey Burger" ,
      devoured: false
    };
      // console.log(newBurger.burger_name);   

    $.post("/api/new", newBurger)
    // On success, run the following code
    .then(function (res) {
        console.log(res);
        var row = $("<div class= 'burgbox'>");
        row.append(`<p> ${newBurger.burger_name}  </p>`);
        row.append(`<button class= "devour" data-id=${res.id}>Devour</button>`);

        $("#burgerEntry").prepend(row);
         window.tburger = newBurger
    });
  });



$("#burgerEntry").on("click", ".devour", function (event) {
    event.preventDefault();
    var id = $(this).attr("data-id");
    // console.log('hello' + id)
    console.log(window.tburger.burger_name)
    var row = $("<div class = 'burgboxeaten'>");
    $("#eaten").prepend(row);
    row.append(`<p>  ${window.tburger.burger_name}  </p>`);


$.ajax({
    url:"/api/updated/" + id,
    method: "PUT",
    data: {devoured:true} })
        // On success, run the following code
        .then(function (res) {
        });
});