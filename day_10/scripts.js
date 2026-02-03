
const date = document.querySelector('#date');
const time = document.querySelector('#time');

// Current date displayed over the timer

const currentDate = Temporal.Now.plainDateISO()

function showCurrentWeekday() {
    return currentDate.toLocaleString('en-US', {
        weekday: 'short'
    })
}

function showCurrentDay() {
    return currentDate.toLocaleString('en-US', {
        day: 'numeric'
    })
}

function showCurrentMonth() {
    return currentDate.toLocaleString('en-US', {
        month: 'short'
    })
}

function showCurrentYear() {
    return currentDate.toLocaleString('en-US', {
        year: 'numeric'
    })
}

date.innerHTML = `${showCurrentWeekday()} ${showCurrentDay()} ${showCurrentMonth()} ${showCurrentYear()}`;

// 

function getCurrentTime() {
    return time.innerHTML.split(':');
}

function getMinutes() {
    return Number(getCurrentTime()[0]);
}

function getSeconds() {
    return Number(getCurrentTime()[1]);
}

function startTimer() {
    let minutes = getMinutes();
    let seconds = getSeconds();
    setInterval ( () => {
        if(seconds<59){
            seconds++
        } else if(seconds==59){
            minutes++
            seconds=0;
        }

        updateTime(minutes, seconds);
    }, 1000)
    console.log(`${updateTime(getMinutes(), getSeconds())}`);
}

function updateTime(minutes, seconds) {
    if(minutes < 10){
        minutes = `0${minutes}`;
    }

    if(seconds < 10){
        seconds = `0${seconds}`;
    }

    return time.innerHTML = minutes + ':' + seconds;
}


startTimer();