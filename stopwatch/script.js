let sec = document.querySelector(".sec");
let mint = document.querySelector(".mint");
let hour = document.querySelector(".hour");
let button = document.querySelectorAll("button");
let s = 0, m = 0, h = 0;
let time = function () {
    s++;
    if (s === 60) {
        s = 0;
        m++;
        if (m === 60) {
            m = 0;
            h++;
            if (h === 24) {
                h = 0;
            }
        }
    }
    sec.textContent = s < 10 ? "0" + s : s;
    mint.textContent = m < 10 ? "0" + m : m;
    hour.textContent = h < 10 ? "0" + h : h;
}
let timeId = null;
button.forEach((Btn) => {
    Btn.addEventListener("click", function () {
        if (Btn.textContent === "Start") {
            if (timeId === null) {
                timeId = setInterval(time, 1000);
            }
        }
        if (Btn.textContent === "Stop") {
            clearInterval(timeId);
            timeId = null;
        }
        if (Btn.textContent === "Reset") {
            clearInterval(timeId);
            timeId = null;
            s = 0, m = 0, h = 0;
            sec.textContent = "00";
            mint.textContent = "00";
            hour.textContent = "00";
        }

    })
})
