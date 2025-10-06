let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form")
form.addEventListener("submit",function(dets){
       dets.preventDefault();
       let isValid=true;
       document.querySelector("#emailError").textContent="";
       document.querySelector("#passwordError").textContent="";
      const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    let emailans=emailRegex.test(email.value);
    let passwordans=passwordRegex.test(password.value)

    if(!emailans){
          document.querySelector("#emailError").textContent="Email is incorrect";
          isValid=false;
    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent="password is incorrect";
        isValid=false;
    }

    if(isValid){
        document.querySelector("#resultMessage").textContent="Everthing is correct";
    }
})

