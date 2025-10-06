let palindrome = document.querySelector(".Palindrome");
let input = document.querySelector(".input");
let inputbox = document.querySelector(".str");
let resultdiv = document.querySelector(".result");
palindrome.addEventListener("click", function () {

    input.classList.remove("hide");
    inputbox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let str = inputbox.value.trim();
            if (str) {
                let temp = str.toLowerCase();
                let reverse = temp.split("").reverse().join("");
                if (reverse === temp) {
                    resultdiv.innerText = `${str} = is  a palindrome`;
                }
                else {
                    resultdiv.innerText = `${str} = is not a palindrome`
                    
                }


            }
        }
    })
})
let vowel = document.querySelector(".vowel");
vowel.addEventListener("click", function () {
    input.classList.remove("hide");
    inputbox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let str = inputbox.value.trim();
            if (str) {
                let count = 0;
                str = str.toLowerCase();
                for (let i of str) {
                    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
                        count++;
                    }
                }
                resultdiv.innerText = `vowel count = ${count}`;
        
            }
        }
    })
})
let Reverse = document.querySelector(".Reverse");
Reverse.addEventListener("click", function () {
    input.classList.remove("hide");
    inputbox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let str = inputbox.value.trim();
            if (str) {
                let reverse = str.split("").reverse().join("");
                resultdiv.innerText = `Reverse String = ${reverse}`;
            }
        }

    })
})
let countCases = document.querySelector(".countCases");
countCases.addEventListener("click", function () {
    input.classList.remove("hide");
    inputbox.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            let str = inputbox.value.trim();
            if (str) {
                let UpperCase = 0;
                let LowerCase = 0;
                for (let i of str) {
                    if (i >= "a" && i <= "z") {
                        LowerCase++;
                    }
                    else if (i >= "A" && i <= "Z") {
                        UpperCase++;
                    }
                }
                resultdiv.innerText = `UpperCase Letter = ${UpperCase} , LowerCase Letter = ${LowerCase}`;
            
            }
        }
    })
})
let NonRepeating = document.querySelector(".Non-Repeating");
NonRepeating.addEventListener("click", function () {
    input.classList.remove("hide");
    inputbox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let str = inputbox.value.trim();
            if (str) {
                let string = str.toLowerCase();
                for (let i of string) {
                    let count = 0;
                    for (let a of string) {
                        if (i === a) {
                            count++;
                        }
                    }
                    if (count === 1) {
                        resultdiv.innerText = `First Non-Repeating Character is ${i}`;
                        break;
                    }
                }
            }
        }
    })
})
let Maximum = document.querySelector(".Maximum");
Maximum.addEventListener("click", function () {
    input.classList.remove("hide");
    inputbox.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let str = inputbox.value.trim();
            if (str) {
                str = str.toLowerCase();
                let maxcount = 0;
                let maxchar = "";
                for (let i of str) {
                    let count = 0;
                    for (let a of str) {
                        if (i === a) {
                            count++;
                        }
                    }
                    if (count > maxcount) {
                        maxcount = count;
                        maxchar = i;
                    }
                }
                resultdiv.innerText = `Max Count = 
                ${maxcount}, Max Char = ${maxchar}`;
            }
        }
    })
})
let Anagram = document.querySelector(".Anagram");
let SecondInput = document.querySelector(".second-input");
let StrSecond = document.querySelector(".str-second");
Anagram.addEventListener("click", function () {
    input.classList.remove("hide");
    SecondInput.classList.remove("hide-second")
    input.addEventListener("keydown", function (event) {
        SecondInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                if (str && secstr) {
                    let str = inputbox.value.trim();
                    let secstr = StrSecond.value.trim();
                    let abc = str.split("").sort().join("");
                    let xyz = secstr.split("").sort().join("");
                    if (abc === xyz) {
                        resultdiv.innerText = `Anagram`;
                
                    }
                    else {
                        resultdiv.innerText = `Not a Anagram`;
                    
                    }
                }

            }
        })
    })
})