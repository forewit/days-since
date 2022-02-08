let beginning = new Date("03/16/2020"),
    timeElm = document.getElementById("time"),
    dateElm = document.getElementById("date");

let tick = 0;
var interval = setInterval(function() { 
    // update reality
    let now = new Date();
    let startOfDay = new Date();
    startOfDay.setHours(0,0,0,0);
    let day = Math.round((startOfDay-beginning)/(1000*60*60*24)) + 16;

    // set elements
    document.title = `March ${day}th`;
    dateElm.innerHTML = `Today is March ${day}th, 2020`;

    if (tick == 0) {
        timeElm.innerHTML = `${now.getHours()} ${now.getMinutes()}`;
        tick++;
    } else {
        timeElm.innerHTML = `${now.getHours()}:${now.getMinutes()}`;
        tick = 0;
    }
}, 1000);