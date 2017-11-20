const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date()
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    const minuteDeg = ((minutes / 60) * 360) + 90;
    const hourDeg = ((hours / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();