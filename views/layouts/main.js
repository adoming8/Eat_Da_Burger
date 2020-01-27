const render = function (body) {
return `
<!Doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Burger Stand</title>

    <link rel="stylesheet" type="text/css" href="./css/style.css"> 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>

<body>
    <div class="jumbotron">
        <h1 id="h1_jumbotron">Burger Stand</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md">
               <h3>Menu</h3>
               <div id="cart">
                <button class='CheeseBur' id="burType">Cheese Burger</button> <br>
                <button class='ChickenBur' id="burType">Chicken Burger</button> <br>
                <button class='TurkeyBur' id="burType">Turkey Burger</button>
               </div>
            </div>
            <div class="col-md-5">
                <div class="form-row"><h6>Waiting to be Eaten</h6></div>
                <br>
                <div><h7 id ="burgerEntry"></h7></div>
                <div><button id="burger-submit">Devour Burger</button></div>
            </div>
            <div class="col-md">
               <h3>Devoured List</h3>
               <div id="eaten"></div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/script.js"></script>
</body>
</html>
`
}

exports.render = render