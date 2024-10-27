const btn=document.querySelector("#btn");
btn.addEventListener("click",toggleBorder);

function toggleBorder() {
    if (btn.style.border === "none" || !btn.style.border) {
        btn.style.border = "2px solid red"
        btn.style.borderRadius = "100%"
    }
    else if (btn.style.border === "2px solid red" ) {
        btn.style.border = "none";
    }
}