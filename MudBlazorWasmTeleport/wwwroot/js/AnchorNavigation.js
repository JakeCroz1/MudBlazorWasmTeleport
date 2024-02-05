function BlazorScrollToId(id) {

    //document.getElementById("mobilemenu").style.setProperty('display', 'none', 'important');

    const element = document.getElementById(id);
    if (element instanceof HTMLElement) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
    //document.getElementById("mobilemenu").style.setProperty('display', 'none', 'important');
    //document.getElementsByClassName("header-mobile-menu").style.setProperty('display', 'none', 'important');
    //document.getElementById("mobilemenu").style.display = "none !important";
    // document.getElementsByClassName("header-mobile-menu").style.backgroundColor = "blue";
}