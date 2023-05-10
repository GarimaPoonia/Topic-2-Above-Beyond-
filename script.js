$('#slider1').on('click', function () {
    if ($(this).prop("checked")) {

        document.getElementById("Bulb1").src = "bulb.png"

        $('#red1').on('click', function () {
            document.getElementById("Bulb1").className = "redgloweffect"
        });

        $('#green1').on('click', function () {
            document.getElementById("Bulb1").className = "greengloweffect"

        });

        $('#yellow1').on('click', function () {
            document.getElementById("Bulb1").className = "yellowgloweffect"

        });

    } else {
        // If the slider is turned off (unchecked), change the image back to its original state
        document.getElementById("Bulb1").src = "Light.png"
        document.getElementById("Bulb1").removeAttribute("class")
        document.getElementById("Bulb1").className = "glow-effect"
    }
});


