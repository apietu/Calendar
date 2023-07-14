
const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days");




//getting new date, current year and month.
let date = new Date(),
currYear = date.getFullYear(),
currMonth =date.getMonth();

//storing full name of all months in an array.
const months = ["January", "February", "March", "April", "May", "June", "July",
                  "August", "September", "October", "November", "December"];




const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag+= `<li class = "inactive">${lastDateofLastMonth -i + 1}</li>`;

    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                    && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class = "${isToday}">${ i }</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class = "inactive">${i - lastDateofLastMonth + 1}</li>`;
 
    }


    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag; 


}


renderCalendar ();

