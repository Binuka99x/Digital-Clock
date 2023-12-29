setInterval(updateClock, 1000);
function updateClock(){
    let myDate = new Date();
    let myHours = myDate.getHours();
    let myMinutes = myDate.getMinutes();
    let mySeconds = myDate.getSeconds();
    let myClock = myHours + ":" + myMinutes + ":" + mySeconds;
    document.getElementById("clock").innerText = myClock;
}