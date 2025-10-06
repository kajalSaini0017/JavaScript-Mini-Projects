// Common selectors
let input = document.querySelector(".input");
let inputbox = document.querySelector(".str");
let secondInput = document.querySelector(".second-input");
let strSecond = document.querySelector(".str-second");
let resultdiv = document.querySelector(".result");

// Reset input boxes before each operation
function resetInputs(showSecond = false) {
    input.classList.remove("hide");
    secondInput.classList.toggle("hide-second", !showSecond);
    inputbox.value = "";
    strSecond.value = "";
    resultdiv.innerText = "";
    inputbox.focus();
}

// Utility: attach one-time event
function onEnter(callback, second = false) {
    const target = second ? strSecond : inputbox;

    function handler(event) {
        if (event.key === "Enter") {
            callback();
            target.removeEventListener("keydown", handler); // remove after one use
        }
    }

    target.addEventListener("keydown", handler);
}

// 1. Palindrome
document.querySelector(".Palindrome").addEventListener("click", function () {
    resetInputs();
    onEnter(() => {
        let str = inputbox.value.trim().toLowerCase();
        let reverse = str.split("").reverse().join("");
        resultdiv.innerText = (str === reverse)
            ? `${inputbox.value} is a Palindrome`
            : `${inputbox.value} is not a Palindrome;`
    });
});

// 2. Vowel Count
document.querySelector(".vowel").addEventListener("click", function () {
    resetInputs();
    onEnter(() => {
        let str = inputbox.value.trim().toLowerCase();
        let count = 0;
        for (let ch of str) {
            if ("aeiou".includes(ch)) count++;
        }
        resultdiv.innerText = `Vowel Count = ${count}`;
    });
});

// 3. Reverse String
document.querySelector(".Reverse").addEventListener("click", function () {
    resetInputs();
    onEnter(() => {
        let reverse = inputbox.value.trim().split("").reverse().join("");
        resultdiv.innerText = `Reverse String = ${reverse}`;
    });
});

// 4. Count Cases
document.querySelector(".countCases").addEventListener("click", function () {
    resetInputs();
    onEnter(() => {
        let str = inputbox.value.trim();
        let upper = 0, lower = 0;
        for (let ch of str) {
            if (ch >= "a" && ch <= "z") lower++;
            else if (ch >= "A" && ch <= "Z") upper++;
        }
        resultdiv.innerText = `UpperCase = ${upper}, LowerCase = ${lower}`;
    });
});

// 5. First Non-Repeating Character
document.querySelector(".Non-Repeating").addEventListener("click", function () {
    resetInputs();
    onEnter(() => {
        let str = inputbox.value.trim().toLowerCase();
        for (let ch of str) {
            if (str.indexOf(ch) === str.lastIndexOf(ch)) {
                resultdiv.innerText =` First Non-Repeating Character = ${ch}`;
                return;
            }
        }
        resultdiv.innerText = "No Non-Repeating Character found";
    });
});

// 6. Maximum Occurring Character
document.querySelector(".Maximum").addEventListener("click", function () {
    resetInputs();
    onEnter(() => {
        let str = inputbox.value.trim().toLowerCase();
        let freq = {};
        for (let ch of str) {
            freq[ch] = (freq[ch] || 0) + 1;
        }
        let maxChar = "", maxCount = 0;
        for (let key in freq) {
            if (freq[key] > maxCount) {
                maxCount = freq[key];
                maxChar = key;
            }
        }
        resultdiv.innerText = `Max Char = ${maxChar}, Count = ${maxCount}`;
    });
});

// 7. Anagram Checker
document.querySelector(".Anagram").addEventListener("click", function () {
    resetInputs(true);
    onEnter(() => {
        strSecond.focus(); // move to second input
        onEnter(() => {
            let str1 = inputbox.value.trim().toLowerCase().split("").sort().join("");
            let str2 = strSecond.value.trim().toLowerCase().split("").sort().join("");
            resultdiv.innerText = (str1 === str2) ? "Anagram" : "Not an Anagram";
        }, true);
    });
});