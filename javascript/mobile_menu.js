function topmenu() {
    var x =
document.getElementById("topnav");
    if(x.className === "gn-content"){
        x.className += " responsive";
    } else {
        x.className = "gn-content";
    }
}