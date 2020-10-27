$(document).ready(function () {
    var plants = [];
    //When the form is submitted, the posts are done
    $(".search").on("submit", function (event) {
        event.preventDefault();

        var sunlight = $('#sun').val();
        var humidity = $('#humidity').val();
        var maintenance = $('#maintenance').val();
        var type = $('#plant').val();
        var poison = $('#pets').val();

         const url = `/api/plants?sunlight=${sunlight}&humidity=${humidity}&maintenance=${maintenance}&poison=${poison}`;

        $.ajax({
            type: "GET",
            url: url
        }).then(function (response) {
            $("#results-card").empty();
            let html = "";
            console.log(response);
            response.forEach(plant => {
                html = `  
                <ul>
                <li id="plant">Plant Name: ${plant.Common_Name}</li>
                <li id="sci">Scientific Name: ${plant.Scientific_Name}</li>
                <li id="sunlight">Sunlight Needs: ${plant.Sunlight_Needs}</li>
                <li id="humid">Humidity Needs: ${plant.Humidity}</li>
                <li id="moisture">Soil Moisture Needs: ${plant.Moisture_Levels}</li>
                <li id="poison">Toxic: ${plant.Poisonous}</li>
                <li id="maintain">Maintenance Level: ${plant.Maintenance_Level}</li>
                <li id="price">Price Range: ${plant.Price}</li>
               <img src="${plant.img_path}" >
 
                </ul>`;
                $('#results-card').append(html);

            });
        });
    });
});
