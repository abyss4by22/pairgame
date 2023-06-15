const cards = document.querySelectorAll(".memory-card");
let hasFlipped = false;
let firstCard
let secondCard
let lock = false
let counter = 0;
let flipCounter = document.getElementById("flips-counter");
let flips = 0;
function flipCard() {
    if (lock) {
        return
    }
    this.classList.toggle("flip")
    
    
    flips++
    flipCounter.innerText=flips;
    
    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        return
    } else {
        secondCard = this;
        hasFlipped = false;


        if (firstCard.dataset.card === secondCard.dataset.card) {
            firstCard.removeEventListener("click",flipCard);
            secondCard.removeEventListener("click",flipCard);
            counter++
        }else{
           unflip()
        }
        function unflip() {
            lock = true
            setTimeout(() => {
                firstCard.classList.remove("flip")
                secondCard.classList.remove("flip")
            }, 1000);
            lock = false
        }
    }
    if (counter == 2) {
        alert("you won")
    }
    if (counter != 2){
      let time =  120
      let timer_display= document.getElementById("time-counter")
      let timer = setInterval(function() {
        time--;
        timer_display.innerText = time
        if (time == 0) {
            clearInterval(timer);
            alert("Time's up!");
          }
        }, 1000);
    }
    
}
let time =  120
      let timer_display= document.getElementById("time-counter")
      let timer = setInterval(function() {
        time--;
        timer_display.innerText = time
        if (time == 0) {
            clearInterval(timer);
            alert("Time's up!");
            return
          }
        }, 1000);
cards.forEach(card => card.addEventListener("click", flipCard));




