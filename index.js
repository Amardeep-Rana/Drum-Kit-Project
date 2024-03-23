


var noOfButton = document.querySelectorAll(".drum");

// noOfButton[1].addEventListener("click", ()=>{
        
//     console.log(this);

// })

for(var i=0;i<noOfButton.length;i++){
    noOfButton[i].addEventListener("click",function (){
        
        
        playSound(this.classList[0]);
        animationButton(this.classList[0])
    })
}

function playSound(key){
    switch (key) {
        case "w":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play(); 
            break;
            
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break

        case "j":
            var tom5 = new Audio("sounds/snare.mp3");
            tom5.play();
            break

        case "k":
            var tom6 = new Audio("sounds/crash.mp3");
            tom6.play();
            break

        case "l":
            var tom7 = new Audio("sounds/kick-bass.mp3");
            tom7.play();
            break
        
    }
}

document.addEventListener("keypress",function(e){
    playSound(e.key);
    animationButton(e.key);
})

function animationButton(key){
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}