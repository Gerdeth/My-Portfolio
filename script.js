const message = " A Web developer with a background in STEM education"

let index=0;
function writeMessage(){
    document.querySelector(".text-message").innerText= message.slice(0, index);
    index++;

    
}

setInterval(writeMessage, 200)

// const btn= document.createElement("button");
// btn.innerHTML="GitHub";

// const card=document.querySelector(".card-title");
// card.appendChild(btn);
