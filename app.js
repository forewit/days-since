let beginning = new Date("03/16/2020"),
    timeElm = document.getElementById("time"),
    dateElm = document.getElementById("date");

(function update() {
    let now = new Date(),
        startOfDay = new Date();

    startOfDay.setHours(0, 0, 0, 0);

    let day = Math.round((startOfDay - beginning) / (1000 * 60 * 60 * 24)) + 16,
        minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes(),
        hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours(),
        ampm = now.getHours() >= 12 ? "pm" : "am";

    document.title = `${day}th`;
    dateElm.innerHTML = `March ${day}th`;
    timeElm.innerHTML = now.getSeconds() % 2 ? `${hours}:${minutes} ${ampm}` : `${hours} ${minutes} ${ampm}`;

    setTimeout(update, 1000);
})();

function message() {
    let newElm = document.createElement("h1");
    newElm.className = "message";
    newElm.innerHTML = "15 days to slow the spread";
    newElm.style.top = `${Math.random() * (window.innerHeight - 80)}px`;
    newElm.style.left = `${Math.random() * (window.innerWidth - 400)}px`;
    document.body.appendChild(newElm);

    setTimeout(() => { newElm.style.opacity = 0.2 }, 20); // fade in
    setTimeout(() => { newElm.style.opacity = 0 }, 2000); // fade out
    setTimeout(() => { newElm.remove() }, 4000); // remove from dom
}

document.onmouseenter = message;
document.onmousedown = message;
document.ontouchstart = message;