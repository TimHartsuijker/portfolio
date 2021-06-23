function toggleText(elem, image, text, color, title) {
    const el = document.getElementById(elem);
    const mouseover = "<img src=\"../images/" + image + "\" alt=" + image + " width='auto' height='300px'>";
    const mouseleave = text;
    el.innerHTML = "<header style=\"background-color:" + color + "\"><br/>" + title + "</header>" + mouseover;
    el.addEventListener("mouseover", function () {
        el.innerHTML = "<header style=\"background-color:" + color + "\"><br/>" + title + "</header>" + mouseleave;
    });
    el.addEventListener("mouseout", function () {
        el.innerHTML = "<header style=\"background-color:" + color + "\"><br/>" + title + "</header>" + mouseover;
    });
}