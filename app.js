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

    if (tick == 0) {
        // convert to 12 hour time
        if (now.getHours() > 12) {
            timeElm.innerHTML = `${now.getHours() - 12} ${now.getMinutes()} pm`;
        } else {
            timeElm.innerHTML = `${now.getHours()} ${now.getMinutes()} am`;
        }
        tick++;
    } else {
        // convert to 12 hour time
        if (now.getHours() > 12) {
            timeElm.innerHTML = `${now.getHours() - 12}:${now.getMinutes()} pm`;
        } else {
            timeElm.innerHTML = `${now.getHours()}:${now.getMinutes()} am`;
        } 
        tick = 0;
    }
}

update();
var interval = setInterval(update, 1000);