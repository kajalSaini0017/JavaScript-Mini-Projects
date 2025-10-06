let progress=document.querySelector(".progress .fill");
let percent=document.querySelector(".percent");
let downlode=document.querySelector(".title")
let count = 0;
let inter=setInterval(function () {
    if (count < 100) {
        count++;
        progress.style.width=`${count}%`
        percent.textContent=`${count}%`
    }
    else{
        downlode.textContent=`Downloaded`;
        clearInterval(inter);
    }
}, 30);