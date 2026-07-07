const messages=[

"Te iubesc infinit ❤️",

"Zâmbetul tău îmi face ziua mai frumoasă ☀️",

"Ești locul în care mă simt acasă 🤍",

"Îți mulțumesc că exiști ❤️",

"Fiecare zi alături de tine este un cadou 🎁",

"Ești cea mai frumoasă poveste din viața mea 💖",

"Pentru mine vei fi mereu Gurița mea ❤️"

];

const button=document.getElementById("loveBtn");
const text=document.getElementById("loveMessage");

button.onclick=()=>{

const random=Math.floor(Math.random()*messages.length);

text.innerHTML=messages[random];

for(let i=0;i<40;i++){

createHeart();

}

};

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.fontSize=(15+Math.random()*30)+"px";

heart.style.animationDuration=(3+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(()=>{

createHeart();

},500);
