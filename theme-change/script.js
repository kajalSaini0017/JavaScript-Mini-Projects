let btn=document.querySelector("#toggleTheme");
let wind=window.matchMedia("(prefers-color-scheme:dark)");
function applytheme(theme){
    document.body.classList.remove("dark","light");
    document.body.classList.add(theme);
    localStorage.setItem("theme",theme);
}
function systemTheme(){
    return wind.matches ? "dark" : "light"
}
let saved=localStorage.getItem("theme");
if(saved){
    applytheme(saved)
}
else{
    applytheme(systemTheme())

}
wind.addEventListener("change",function(){
      if(!localStorage.getItem("theme")){
        applytheme(systemTheme())
      }
})

btn.addEventListener("click",function(){
   let current = document.body.classList.contains("dark") ? "dark" : "light";
   applytheme(current === "dark" ? "light" : "dark")
})
