function changeBorder() {
    var img = document.getElementById("myImage");
    if (img.classList.contains("clicked")) {
        img.classList.remove("clicked");
    } else {
        img.classList.add("clicked");
    }
}
