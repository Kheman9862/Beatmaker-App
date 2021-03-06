window.addEventListener("load",()=>{
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");
const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
];


//sound effect goes here
pads.forEach((pad,index)=>{
    pad.addEventListener('click',()=>{
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubbles(index); //passing index value
    });
});

//animation goes here

const createBubbles = (index) =>{
    const bubbles  = document.createElement("div");
    visual.appendChild(bubbles);
    bubbles.style.backgroundColor = colors[index];
    bubbles.style.animation = 'jump 1s ease';
    bubbles.addEventListener("animationend",function(){
        visual.removeChild(this);
    });
};

});