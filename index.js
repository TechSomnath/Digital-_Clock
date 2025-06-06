function updatetime() {
    const timeElement = document.querySelector('.time'); 
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = (hours >= 12) ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`; 

    const dateElement = document.querySelector('.date'); 
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = now.getDate();
    let year = now.getFullYear();
    let month = monthNames[now.getMonth()];
    dateElement.textContent = `${date} ${month} ${year}`; 

    const dayElement = document.querySelector('.day'); 
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = dayNames[now.getDay()];  
    dayElement.textContent = `${day}`; 
}
updatetime() ;
setInterval(updatetime,1000);
