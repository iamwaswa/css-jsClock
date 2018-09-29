const POSITION_OFFSET = 90;
const MAX_DEGREES = 360;
const MAX_SECONDS = 60;
const MAX_MINUTES = MAX_SECONDS * MAX_SECONDS;
const MAX_HOURS = 12;

function updateSecondsDegrees(currentDate){

    let currentSecond = currentDate.getSeconds();
    let secondsDegrees = ((currentSecond / MAX_SECONDS) * MAX_DEGREES) + POSITION_OFFSET;

    let secondHand = document.querySelector(`.second-hand`);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    return currentSecond;
}

function updateMinutesDegrees(currentDate, currentSecond){

    let currentMinute = currentDate.getMinutes() + (currentSecond / MAX_SECONDS);
    let minutesDegrees = ((currentMinute / MAX_SECONDS) * MAX_DEGREES) + POSITION_OFFSET;

    let minuteHand = document.querySelector(`.min-hand`);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    return currentMinute;
}

function updateHoursDegrees(currentDate, currentMinute){

    let currentHour = currentDate.getHours() + (currentMinute / MAX_MINUTES);

    let hoursDegrees = ((currentHour / MAX_HOURS) * MAX_DEGREES) + POSITION_OFFSET;

    let hourHand = document.querySelector(`.hour-hand`);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function updateTime(){

    currentDate = new Date();

    let currentSecond = updateSecondsDegrees(currentDate);
    let currentMinute = updateMinutesDegrees(currentDate, currentSecond);
    updateHoursDegrees(currentDate, currentMinute);
}

setInterval(updateTime, 1000);