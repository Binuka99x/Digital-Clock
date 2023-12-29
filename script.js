setInterval(updateClock, 1000);
function updateClock() {
    let myDate = new Date();
    let myHours = myDate.getHours();
    let myMinutes = myDate.getMinutes();
    let mySeconds = myDate.getSeconds();

    if (myHours < 10) { myHours = "0" + myHours };
    if (myMinutes < 10) { myMinutes = "0" + myMinutes };
    if (mySeconds < 10) { mySeconds = "0" + mySeconds };

    let myClock = myHours + ":" + myMinutes + ":" + mySeconds;
    document.getElementById("clock").innerText = myClock;
}