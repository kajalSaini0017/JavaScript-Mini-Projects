let div = document.querySelector("button");
let box=document.querySelector(".box");
let ul=document.createElement("ul");
box.append(ul);
let count=1;
div.addEventListener("click", function () {
    let li = document.createElement("li")
    ul.append(li);
    li.textContent = `List items ${count++}`
})