let songindex=0;
let AudioElement = new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif =document.getElementById('gif');
let songs=[
    {songname:"gurbani 1",filepath:'1.mp3', cover:'1.jpg'},
    {songname:"gurbani 2",filepath:'2.mp3', cover:'2.jpg'},
    {songname:"gurbani 3",filepath:'3.mp3', cover:'3.jpg'},
    {songname:"gurbani 4",filepath:'4.mp3', cover:'4.jpg'},
    {songname:"gurbani 5",filepath:'5.mp3', cover:'5.jpg'},
    {songname:"gurbani 6",filepath:'6.mp3', cover:'6.jpg'},
    {songname:"gurbani 7",filepath:'7.mp3', cover:'7.jpg'},
    {songname:"gurbani 8",filepath:'8.mp3', cover:'8.jpg'},
    {songname:"gurbani 9",filepath:'9.mp3', cover:'9.jpg'},
    {songname:"gurbani 10",filepath:'10.mp3', cover:'10.jpg'}
]

//



masterplay.addEventListener('click',()=>{
    if(AudioElement.paused || AudioElement.currentTime<=0)
    {
        AudioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else 
    {
        AudioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})


//Eventlistener 
AudioElement.addEventListener('timeupdate',()=>
{
   
})


progress=parseInt((AudioElement.currentTime/AudioElement.duration)*100);

progressbar.value=progress;

progressbar.addEventListener('change', ()=>{
 AudioElement.currentTime=progressbar.value*AudioElement.duration/100

})