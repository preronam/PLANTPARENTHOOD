$(document).ready(function () {
  var plants =[];
    //When the form is submitted, the posts are done
    $(".search").on("submit", function (event) {
        event.preventDefault();

        var sunlight = $('#sun').val();
        var humidity = $('#humidity').val();
        var maintenance = $('#maintenance').val();
        // var price = $('#price').val();
        var poison = $('#pets').val();

        const url = `/api/plants?sunlight=${sunlight}&humidity=${humidity}&maintenance=${maintenance}&poison=${poison}`
        $.ajax({
            type: "GET",
            url: url
        }).then(function (response) {
            $("#results").empty();
            let html = "";
            response.forEach(plant => {
                html = `  
                <div id="plant">${plant.Common_Name}</div>
                <div id="sci">${plant.Scientific_Name}</div>
                <div id="sunlight">${plant.Sunlight_Needs}</div>
                <div id="humid">${plant.Humidity}</div>
                <div id="moisture">${plant.Moisture_Levels}</div>
                <div id="poison">${plant.Poisonous}</div>
                <div id="maintain">${plant.Maintenance_Level}</div>
                <div id="price">${plant.Price}</div>`;
            });
            $('#results').append(html);
    
        });

    });

});




    






