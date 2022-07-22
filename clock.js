function showTime () {
    let DateTime = new Date();
    let hours = DateTime.getHours();
    let minute = DateTime.getMinutes();
    let sec = DateTime.getSeconds();

    document.querySelector("#hour").innerHTML = hours;
    document.querySelector("#minute").innerHTML = minute;
    document.querySelector("#sec").innerHTML = sec
    

}
setInterval(showTime, 5)

const THEMES = document.querySelector("body")
function show () {
    THEMES.style.backgroundColor =  "#546255"
}
function show1 () {
    THEMES.style.backgroundColor =  "blue"
}
function show2 () {
    THEMES.style.backgroundColor =  "dodgerblue"
}
function show3 () {
    THEMES.style.backgroundColor =  "green"
}
function show4 () {
    THEMES.style.backgroundColor =  "grey"
}
function show5 () {
    THEMES.style.backgroundColor =  "red"
}
function show6 () {
    THEMES.style.backgroundColor =  "crimson"
}
function show7 () {
    THEMES.style.backgroundColor =  "violet"
}
function show8 () {
    THEMES.style.backgroundColor =  "gold"
}
function show9 () {
    THEMES.style.backgroundColor =  "black"
}