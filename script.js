 const hour = document.getElementsByClassName("hour");
 const minute = document.getElementsByClassName("minute");
 const second = document.getElementsByClassName("second");

 let set_clock = setInterval(() => {
    const date = new Date();

    const dateHour = date.getHours();
    const dateMinute = date.getMinutes();
    const dateSecond = date.getSeconds();

    let hourTick = (dateHour * 30) + (dateMinute / 2);
    let minTick = (dateMinute * 6) + (dateSecond / 10);
    let secTick = dateSecond * 6;

    hour[0].style.transform = `rotate(${hourTick}deg)`;
    hour[1].style.transform = `rotate(${hourTick}deg)`;
    minute[0].style.transform = `rotate(${minTick}deg)`;
    minute[1].style.transform = `rotate(${minTick}deg)`;
    second[0].style.transform = `rotate(${secTick}deg)`;
    second[1].style.transform = `rotate(${secTick}deg)`;
}, 1000);