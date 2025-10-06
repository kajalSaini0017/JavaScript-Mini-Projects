let button=document.querySelectorAll("button");
let span=document.querySelector("span")
let count = 0;
button.forEach((btn)=>{
    btn.addEventListener("click",function(){
        if(btn.textContent=== "+"){
            count++;
        }
        if(btn.textContent==="-"){
            count--;
        }
        if(btn.textContent==="Reset"){
            count=0;
        }
        if(count>=0){
        span.style.color="black"
        span.textContent=`${count}`;
        }
        if(count<0){
        span.style.color="red"
        span.textContent=`${count}`;
        }
    })
})
