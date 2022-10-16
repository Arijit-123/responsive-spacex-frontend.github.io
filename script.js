
const btn = document.getElementById('menu-btn');
const overlay= document.getElementById('overlay');
const menu=document.getElementById('mobile-menu');
const counter=document.querySelectorAll('.counter');
let scrollStarted= false;
//const datatarget=document.getElementById('data-target');
btn.addEventListener('click', navToggle);
overlay.classList.toggle('click', navToggle)
document.addEventListener('scroll',scrollPage);
function navToggle() {

    btn.classList.toggle('open'); 
   
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu'); 
}
function scrollPage(){

    const scrollpos = window.scrollY;
    console.log(scrollpos);
   if(scrollpos>100 && !scrollStarted){
      countUp();
   }
 else if(scrollpos<100 && scrollStarted){
     reset();
     scrollStarted=false;
   }

       
    
}
scrollPage();

function countUp(){
counter.forEach((counter)=>{
    console.log(counter);
    counter.innerText= '0';


    const updateCounter= () => {
        //Get count target
        const target = counter.getAttribute('data-target');
        console.log(target);
        //get current counetr value
        const c = +counter.innerText;
        //create an increment
        const increment = target/100;
        //if counter is less than target add increment
        if(c < target){
            counter.innerText= `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter,195);
        }
       else{
        counter.innerText = target;
       }
        
    };


    updateCounter();
});

}

function reset() {
    counters.forEach((counter)=>(counter.innerHTML='0'))
}