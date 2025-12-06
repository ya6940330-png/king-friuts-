alert("welcome to my site!👀")
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    let title = document.getElementById("title");
    title.innerText = "welcome to King Fruits Store👀";
    title.style.color ="gold";
})