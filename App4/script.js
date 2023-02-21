
const startStopBtn =document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');


let seconds = 0;
let minutes=0;
let hours =0;

let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;

function stopWatch(){
    seconds++
    if(seconds/60 === 1){
        seconds=0;
        minutes++;

        if(minutes/60===1){
            minutes=0;
            hours++
        }
    }

    if(seconds<10){
        leadingSeconds="0"+seconds.toString();
    }else{
        leadingSeconds=seconds;
    }

    if(minutes<10){
        leadingMinutes="0"+minutes.toString();
    }else{
        leadingMinutes=minutes;
    }

    if(hours<10){
        leadingHours="0"+hours.toString();
    }else{
        leadingHours=hours;
    }

    
    let displayTimer=document.getElementById('timer').innerHTML=leadingHours+":"+leadingMinutes+":"+leadingSeconds;
}




let timerIntervel =null;
let timerStatus = "stopped"
let settings = document.querySelector('.settings');
var k = 1000;

settings.addEventListener('click',function(e){
    let slow =document.getElementById("slow");
    let normal =document.getElementById("normal");
    let fasts =document.getElementById("fast");

    if(e.target===slow){
        k=2000;
    }else if(e.target===fasts)
       k=500;
    else if(e.target===normal) k=1000;
});


startStopBtn.addEventListener('click',function(){
    if(timerStatus==='stopped'){
    timerIntervel=window.setInterval(stopWatch,k);   
    document.getElementById('startStopBtn').innerHTML=`<i class="bi bi-pause-fill" id="pause"></i>`;
    timerStatus="started";

    }else{
        window.clearInterval(timerIntervel);
        document.getElementById(`startStopBtn`).innerHTML=`<i class="bi bi-play-fill" id="play"></i>`;
        timerStatus="stopped";
        // text.innerText='Normal';
    }
});

resetBtn.addEventListener('click',function(){
    window.clearInterval(timerIntervel);
    seconds=0;
    minutes=0;
    hours=0;
    
    document.getElementById('timer').innerHTML="00:00:00";
    document.getElementById(`startStopBtn`).innerHTML=`<i class="bi bi-play-fill" id="play"></i>`;
})



//settings


let settingsBtn=document.querySelector(".settingsBtn");
let blur=document.querySelector(".background");
let close = document.querySelector(".close");

settingsBtn.addEventListener('click',function(){
settings.style.display="block";
blur.style.display="block";
window.clearInterval(timerIntervel);
document.getElementById(`startStopBtn`).innerHTML=`<i class="bi bi-play-fill" id="play"></i>`;
timerStatus="stopped";
})

close.addEventListener('click',function(){
    settings.style.display="none";
    blur.style.display="none";

});

blur.addEventListener('click',function(){
    settings.style.display="none";
    blur.style.display="none";

});

let speeds = document.getElementsByClassName('speeds');
let text = document.getElementById('text');
for(var i=0;i<speeds.length;i++){
    speeds[i].addEventListener('click',function(){
        settings.style.display="none";
        blur.style.display="none";
        text.innerText=this.textContent;
    })
}


//wallpapers


let wallpapers = document.querySelectorAll('.photo');

wallpapers.forEach(function(ele){
    ele.onclick = function(){
        wallpapers.forEach(function(ele){
            ele.classList.remove("selected");
        });
       this.classList.add('selected');
       if(this.classList.contains('pool')){
        document.body.classList='';
       document.body.classList.add('pool');
       } else if (this.classList.contains('study')){
        document.body.classList='';
        document.body.classList.add('study');
       } else {
        document.body.classList='';
        document.body.classList.add('jungle');
       }
       

    };
});


// let musicBtn = document.getElementById('openStopMusic');
// let music = document.getElementById(music);
// musicBtn.addEventListener ('click',function(){
// if (music.hasAttributeNode('autoplay'))
//     music.removeAttributeNode('autoplay');
// else
// music.setAttributeNode('autoplay');
// }
// )