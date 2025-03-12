let card1= document.querySelector(".nav-card-1");
let landing = document.querySelector("#Landing");
let card2= document.querySelector(".nav-card-2");
let pages = document.querySelector("#pages");
let card3= document.querySelector(".nav-card-3");
let accounts = document.querySelector("#accounts");

alert("Warning! This site is in developing phase as it is not responsive");

function cardhold1(){
card1.addEventListener("mouseover",function(){
    card1.style.display = "block";
})
card1.addEventListener("mouseleave",function(){
    card1.style.display = "none";
})
}
function cardhold3(){
card3.addEventListener("mouseover",function(){
    card3.style.display = "block";
})
card3.addEventListener("mouseleave",function(){
    card3.style.display = "none";
})
}

function cardhold2(){
    card2.addEventListener("mouseover",function(){
        card2.style.display = "block";
    })
    card2.addEventListener("mouseleave",function(){
        card2.style.display = "none";
    })
}


function displayCard1(){
    card1.style.display = "none";
    landing.addEventListener("mouseenter",function(){
        if (card1.style.display = "none"){
            card1.style.display = "block";
        }
    })
    landing.addEventListener("mouseleave",function(){
        if (card1.style.display = "block"){
            card1.style.display = "none";
        }
    })
}
function displayCard3(){
    card3.style.display = "none";
    accounts.addEventListener("mouseenter",function(){
        if (card3.style.display = "none"){
            card3.style.display = "block";
        }
    })
    accounts.addEventListener("mouseleave",function(){
        if (card3.style.display = "block"){
            card3.style.display = "none";
        }
    })
}

function displayCard2(){
    card2.style.display = "none";
    
    pages.addEventListener("mouseenter",function(){
        if (card2.style.display = "none"){
            card2.style.display = "block";
        }
    })
    pages.addEventListener("mouseleave",function(){
        if (card2.style.display = "block"){
            card2.style.display = "none";
        }
    })
}



displayCard1();
cardhold2();
displayCard2();
cardhold1();
displayCard3();
cardhold3();

document.addEventListener("mousemove", parallex);

function parallex(e){
    let object = document.querySelectorAll(".object");

    object.forEach(function(move){
        let movingValue = move.getAttribute("data-value");
        let x = (e.clientX * movingValue)/250;
        let y = (e.clientY * movingValue)/250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    })
}

document.addEventListener("mousemove",parallex2);

function parallex2(e){
   let circle = document.querySelectorAll(".circle");
   circle.forEach(function(move){
    
    let movingValue = move.getAttribute("data-value");
    let x = (e.clientX * movingValue)/250;
    let y = (e.clientY * movingValue)/250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    
})
}

let img = document.querySelector("#four-people");
img.addEventListener("mousemove",function(e){
    let movingVal = img.getAttribute("data-value");
    let x = (e.clientX * movingVal)/250;
    let y = (e.clientY * movingVal)/200;
    img.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    
})

let nav = document.getElementById("navbar");
window.addEventListener("scroll",function(){
    if(this.window.scrollY > 600){
       nav.style.position = "fixed";
       nav.style.backgroundColor = "#0E0F1B"
       nav.style.zIndex = "5"
    }
    else{
        nav.style.position = "sticky";
       nav.style.backgroundColor = "transparent";
    }
})

let videoLink = document.getElementById("video-link");
let play = document.getElementById("play");

videoLink.addEventListener("mouseenter",function(){
    if ( play.style.backgroundColor = "#fff"){
    play.style.backgroundColor = "#6366F1";
    play.style.color = "#fff";
    }
})
videoLink.addEventListener("mouseleave",function(){
    if ( play.style.backgroundColor = "#6366F1"){
    play.style.backgroundColor = "#fff";
    play.style.color = "#6366F1";
    }
})