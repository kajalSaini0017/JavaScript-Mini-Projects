let input = document.querySelector("input");
let span = document.querySelector("span");
input.addEventListener("input", function () {
   let left=span.textContent=20-input.value.length;
    
    if(left<0){
        span.style.color="red";
    }
    else{
        span.style.color="black";
    }
    

})
