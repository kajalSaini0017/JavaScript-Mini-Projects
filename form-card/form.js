let name=document.querySelector("#name");
let role=document.querySelector("#role");
let bio=document.querySelector("#bio");
let photo=document.querySelector("#photo");
let submit=document.querySelector("button");
let card=document.querySelector(".users");
let users=[];
submit.addEventListener("click",function(e){
    e.preventDefault();
    addUsers();

})
function addUsers(){
         users.push({
            name:name.value,
            role:role.value,
            bio:bio.value,
            photo:photo.value
         })
         cardUser();
}
function cardUser(){
    card.innerHTML="";
    users.forEach((user,index)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=user.photo;
        img.alt="photo";
        let h2=document.createElement("h2")
        h2.textContent=user.name;
        let h5=document.createElement("h5")
        h5.textContent=user.role;
        let p=document.createElement("p")
        p.textContent=user.bio;
        let dltbtn=document.createElement("button");
        dltbtn.textContent="DELETE";
        div.append(img,h2,h5,p,dltbtn);
        card.append(div);
        dltbtn.addEventListener("click",function(){
            users.splice(index,1);
            cardUser()

        })

    })
    name.value="";
    role.value="";
    bio.value="";
    photo.value="";
}
