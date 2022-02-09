let beginning = new Date("03/16/2020"),
    timeElm = document.getElementById("time"),
    dateElm = document.getElementById("date");

let tick = 0;

function update() {
    // update reality
    let now = new Date();
    let startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    let day = Math.round((startOfDay - beginning) / (1000 * 60 * 60 * 24)) + 16;

    // set elements
    document.title = `March ${day}th`;
    dateElm.innerHTML = `March ${day}th`;

    let minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
    let ampm = now.getHours() >= 12 ? "pm" : "am";

    if (tick == 0) {
        timeElm.innerHTML = `${hours}:${minutes} ${ampm}`;
        tick++;
    } else {
        timeElm.innerHTML = `${hours} ${minutes} ${ampm}`;
        tick = 0;
    }
}

update();
var interval = setInterval(update, 1000);


function message() {
    let newElm = document.createElement("h1");
    newElm.innerHTML = "15 days to slow the spread";
    newElm.style.opacity = 0;
    newElm.style.position = "absolute";
    newElm.style.transition = "opacity 1s ease-in-out";
    newElm.style.top = `${Math.random() * (window.innerHeight-80)}px`;
    newElm.style.left = `${Math.random() * (window.innerWidth-400)}px`;
    newElm.style.fontSize = "1.5em";
    document.body.appendChild(newElm);

    // animate newElm to fade out
    setTimeout(function() {
        newElm.style.opacity = .2;
        setTimeout(function() {
            newElm.style.opacity = 0;
            setTimeout(function() {
                newElm.remove();
            }, 2000);
        }, 2000);
    }, 10);
}

document.onmouseenter = message;
document.onclick = message;
document.ontouchstart = message;