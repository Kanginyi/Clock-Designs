 const hour = document.querySelector("#hour");
 const minute = document.querySelector("#minute");
 const second = document.querySelector("#second");

let set_clock = setInterval(() => {
    const date = new Date();

    const dateHour = date.getHours();
    const dateMinute = date.getMinutes();
    const dateSecond = date.getSeconds();

    let hourTick = (dateHour * 30) + (dateMinute / 2);
    let minTick = (dateMinute * 6) + (dateSecond / 10);
    let secTick = dateSecond * 6;

    hour.style.transform = `rotate(${hourTick}deg)`;
    minute.style.transform = `rotate(${minTick}deg)`;
    second.style.transform = `rotate(${secTick}deg)`;
}, 1000);