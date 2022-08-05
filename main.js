let forma = document.forms[0];
let topT = document.querySelector(".up");
let bottomT = document.querySelector(".down");

forma.addEventListener('submit', function (e) {
    e.preventDefault();
    let topText = forma["top-text"].value;
    topT.textContent = topText;
    let bottomText = forma["bottom-text"].value;
    bottomT.textContent = bottomText;
    let picture = document.querySelector("img");
    let picSrc = picture.getAttribute("src");
    let newSrc = forma["url"].value;
    picture.setAttribute("src", newSrc);
})

let input1 = document.querySelector('input[name ="top-text"]');
input1.addEventListener("focus", (e) => {
    input1.value = "";
})
let input2 = document.querySelector('input[name ="bottom-text"]');
input2.addEventListener("focus", (e) => {
    input2.value = "";
})
let input3 = document.querySelector('input[name ="url"]');
input3.addEventListener("focus", (e) => {
    input3.value = "";
})
