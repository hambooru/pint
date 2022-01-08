var r = document.querySelector(':root');

document.querySelector(".getColor").addEventListener("click", function() {
    var color = this.value;
    r.style.setProperty("--color-calendar-graph-day-L3-bg", color);
})