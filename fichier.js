"use strict"

function myFunction() {
    var x = document.getElementById("nav");
        if (x.className === "navi") {
            x.className += " responsive";
        } else {
            x.className = "navi";
        }
}
