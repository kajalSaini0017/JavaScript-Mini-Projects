let button=document.querySelector(".button");
let div=document.querySelector(".circle");
let curntmode="light";
button.addEventListener("click",function(){
    if(curntmode==="light"){
         div.classList.add("move");
         document.querySelector("body").style.backgroundColor="black";
         curntmode="dark"
        
    }
    else{
        div.classList.remove("move");
        document.querySelector("body").style.backgroundColor="white";
        curntmode="light";

    }
    
})