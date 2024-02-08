document.addEventListener("DOMContentLoaded", function () {
    // Get the arch element
    var arch = document.getElementById("arch-svg");

    // Function to change the arch color on click
    function changeArchColor() {
        var randomColor = getRandomColor();
        arch.style.stroke = randomColor;
    }

    // Add click event listener to the arch
    arch.addEventListener("click", changeArchColor);

    // Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
