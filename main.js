/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
    //var id = category + "-dropdown;"
    document.getElementById("jewelry-dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
function rmvdropdown() {
    //var content = category+"-dropdown-content";
    if 
    var dropdowns = document.getElementsByClassName("jewelry-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}