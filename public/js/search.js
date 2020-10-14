$(document).ready(function(){

   var sunlight = $("sun").value;
   var humidity = $("humidity").value;
   var maintenance = $("maintenance").value;
   var price = $("price").value;
   var poison = $("children").value;

   //When the form is submitted, the posts are done.

    $(".form").on("submit", (function(event){
    event.preventDefault();
    var plant = {
     sunlightNeeds : sunlight.val().trim(),
      humid: humidity.val().trim(),
      maintain: maintenance.val().trim(),
      afford: price.val().trim(),
      poison : children. val().trim()
      
    };
    }));
function getSunlightNeeds() {
    $.ajax({
        type: "POST",
        url: "/api/plants/Sunlight_Needs/:Sunlight_Needs",
        data: sunlightNeeds
    }).then (function (response) {
        res.render(path.join(__dirname, "../partials/results"));
        res.render("results");
    });
}

function getHumidity() {
    $.ajax({
        type: "POST",
        url: "/api/plants/Humidity/:Humidity",
        data: humid
    }).then(function (response) {
        res.render(path.join(__dirname, "../partials/results"));
        res.render("results");
    });
}

function getMaintenance() {
    $.ajax({
        type: "POST",
        url: "/api/plants/Maintenance_Level/:Maintenance_Level",
        data: maintain
    }).then(function (response) {
        res.render(path.join(__dirname, "../partials/results"));
        res.render("results");
    });
}

function getPoisonous() {
    $.ajax({
        type: "POST",
        url: "/api/plants/Poisonous/:Poisonous",
        data: poison
    }).then(function (response) {
        res.render(path.join(__dirname, "../partials/results"));
        res.render("results");

    });
}
function getPrice() {
    $.ajax({
        type: "POST",
        url: "/api/plants/Price/:Price",
        data: afford
    }).then(function (response) {
        res.render(path.join(__dirname, "../partials/results"));
        res.render("results");

    });
}
});