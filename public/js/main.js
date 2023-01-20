// includes functioning and calculation part 

// working of perloader is that it calls loading function when body is loaded using onload attribute 

function loading(){
    document.querySelector(".preloader").style.display="none";
    // document.querySelector("body").style.display="initial";
    
    }



// fixing navbar on top as we cant use sticky with overflow 

let navbar=document.querySelector(".nav_head");
document.addEventListener("scroll",()=>{
    if((window.innerHeight/window.scrollY)<2.908){
        navbar.style.position="fixed";
    }
    else{
        navbar.style.position="sticky";
    }
})


// working for footer copyright year 
document.querySelector(".curyear").innerHTML=new Date().getFullYear();;






// so now we will be having fruit animation \

// make random image size function 


// width we can change upto 9 % from 3 %

let fruit = document.querySelectorAll(".fruit");
fruit.forEach((element) =>{
    element.style.left=Math.floor(Math.random()*99)+"%";
    element.style.top=Math.floor(5+ (Math.random()*3))+"%";
    element.style.width=Math.floor(3*(Math.random()*3))+"%";

})

// previous mouse position 
let premouseX =0;
let premouseY=0;





// rotate fruit function 

function rotatefruit(){

    fruit.forEach(function(fruit){
        let x=(fruit.getBoundingClientRect().left)+(fruit.clientWidth/2);
        let y= (fruit.getBoundingClientRect().top)+(fruit.clientHeight/2);

        let radian = Math.atan2(event.pageX - x,event.pageY -y);

        // tracking mouse postition 
const mouseX= event.clientX;
const mouseY=event.clientY;


// getting current position of fruit 
let fruitl=fruit.style.left;
fruitl=parseFloat(fruitl);
let fruitt=fruit.style.top;
fruitt=parseFloat(fruitt);


// mouse moving from left to right 

// console.log(mouseX+"mousex"+premouseX+"premouse");

if(((Math.random()*99)*mouseX/window.innerWidth)<fruitl){
fruit.style.left=(fruitl+(Math.random()))+"%";
// fruit.style.top=(fruitt+(Math.random()))+"%";

}

// mouse moving right to left 
else{
    fruit.style.left=(fruitl-(Math.random()))+"%";
    // fruit.style.top=(fruitt-(Math.random()))+"%";

  // setting previous mouse positon for next move 
}


// console.log(mouseX+"y"+mouseY);



        // console.log(x/event.pageX );






        let rot =(radian*(100/Math.PI)*-1)+270;
        fruit.style.transform="rotate("+rot+"deg)";

    })
}

document.querySelector(".log-head").addEventListener("mousemove",rotatefruit);
