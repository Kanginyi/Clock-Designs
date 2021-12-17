 const hour = document.querySelector("hour");
 const minute = document.querySelector("minute");
 const second = document.querySelector("second");

let set_clock = setInterval(() => {
    const date = new Date();

    const dateHour = date.getHours();
    const dateMinute = date.getMinutes();
    const dateSecond = date.getSeconds();

    console.log(dateHour, dateMinute, dateSecond)
}, 1000);