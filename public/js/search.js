$(document).ready(function () {
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
            console.log(response);
        });
    });
});


