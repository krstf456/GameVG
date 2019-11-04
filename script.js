//Här anges de 3 konstanten som jar kommer att använda genom hela spelet
const text = document.querySelector('p')
const input = document.querySelector('input')
const button = document.querySelector('button')

//Denna funktion är  huvudfunktionen 
function start() {
    const answer = input.value
    input.value = ""
    
    if (answer === "start") {
        text1()

    }

    else if (choice === "wayChoice"){
        wayChoice(answer)
    }
     else if (choice === "knifeChoice"){
         knifeChoice(answer)
     }
     else if (choice === "flashlightChoice") {
         flashlightChoice(answer)
    
     }
     else if(choice === "kebabrulleChoice") {
         kebabrulleChoice(answer)
     }
     else if(choice === "runOrFight") {
         runOrFight(answer)
     }
     else if(choice === "acceptOrFightTicTac") {
         runOrAcceptTicTac(answer)
     }
     else if(choice === "acceptOrFight") {
         acceptOrFight(answer)
     }
     else if(choice === "restart") {
        location.reload()
    }
     
    
    
}
//Den funtion visas direkt efter att man påbörjade spelet
function text1(){
    text.innerHTML = "The year is 2100 and we live in a very dangerous world because of the zombie apocalyps.\
    \ You decided to leave the house and you can grab one item, that you will carry with yourself on the journey outside of the house. \
    It's either <b>knife</b>,<b>flashlight</b> or <b>kebabrulle</b> "
    return choice  = "wayChoice"
}
//Den funktion bestämmer att vilket håll ska man gå

function wayChoice(answer) {
    if (answer === "knife")
 {
        text.innerHTML = "This might not be the best weapon against a zombie, they are already dead you know. A knife won't help you survive this, but lets see how is it going. Now you should choose a way to go either <b>right</b>,<b>left</b> or <b>forward</b>."
    return choice = "knifeChoice"}
    
   else if (answer === "flashlight") 
    {text.innerHTML = "Thats totally unnecessary, zombies will find you at the moment when you use it, but lets see how is it going. Now you should choose a way to go either <b>right</b>,<b>left</b> or <b>forward</b>."
    return choice = "flashlightChoice"
}

    if (answer === "kebabrulle")
 {   text.innerHTML = "Kebabrulle, hmm intresting choice. We will see how is it going. Now you should choose a way to go either <b>right</b>,<b>left</b> or <b>forward</b>."
    return choice = "kebabrulleChoice"
}
}
//Efter att användaren har valt knife, funktionen körs beroende att vilket håll ska man gå
function knifeChoice(answer) {
    if (answer === "right") {
        text.innerHTML = "You just run into a zombie, what do you do? <b>Run</b> away or <b>fight</b> it?"
        return choice = "runOrFight"
    }
    else if(answer === "left") {
        text.innerHTML = "You just run into a big gang of zombies and they ate you alive. Game Over!" 
        gameOver()
    }
    else if(answer === "forward") {
        text.innerHTML = "You met an other apocalypse survival, but he sees the weapon in your hand and shoot you in the head because he thinks that you are dangerous. Game Over!"
        gameOver()
    }
    
}
//Efter att användaren har valt flashlight, funktionen körs beroende att vilket håll ska man gå
function flashlightChoice(answer) {
    if (answer === "right")
    {text.innerHTML = "You just run into a zombie because you choose flashlight you can only run away from him. But in the next 10 minutes you will die either way. Game Over!"
    gameOver()
}
    else if(answer === "left") {
        text.innerHTML = "You just run into a big gang of zombies and they ate you alive. Game Over!" 
        gameOver()
    }
    else if(answer === "forward") {
        text.innerHTML = "You met an other apocalypse survival, he wants to trade the flashlight for a TicTac? You can either <b>accept</b> it or <b>fight</b> him."
        return choice = "acceptOrFightTicTac"
    }
}
//Efter att användaren har valt kebabrulle, funktionen körs beroende att vilket håll ska man gå
function kebabrulleChoice(answer) {
    if (answer === "right")
    {text.innerHTML = "You just run into a zombie because the zombie is extra sensitive to the kebabrulle smell he is going to be extra fast and will eat you alive. Game Over!"
        gameOver()
    }
    
    else if(answer === "left") {
        text.innerHTML = "You just run into a big gang of zombies and they ate you alive. Game Over!" 
        gameOver()
        
    }
    else if(answer === "forward") {
        text.innerHTML = "You met an other apocalypse survival, he wants to trade the flashlight for an AK-47 because he just loves the kebabrulle and can't live without it. You can <b>accept</b> it or <b>fight</b> him."
    return choice = "acceptOrFight"
    }
}
//Det här är gameover funktionen som gör det möjligt att köra spelet igen och tar bort imputfältet och knappen blev play again knapp
function gameOver() {
  button.innerHTML = "play again"
  input.style.display = "none"
  return choice = "restart"
 }
 //Den körs om man väljer att man vill springa bort eller slåssa 
function runOrFight(answer) {
    if (answer === "fight") {
        text.innerHTML = "That was pretty obvious, you died. Game Over!"
        gameOver()
    }
    else if(answer === "run") {
        text.innerHTML = "Congrats you will live for an other 10minutes, but you cant run forever. Game Over!"
        gameOver()
    }
}
// Den körs när man väljer mellan att acceptera tictac eller slåssa.
function acceptOrFightTicTac(answer) {
    if (answer === "fight") {
        text.innerHTML = "Well, he was a prepared apocalypse fighter. You didnt stand any chance against him. Game Over!"
        gameOver()
    }
    else if(answer === "accept") {
        text.innerHTML = "Now your breath is going to be much better but this is even more useless then the flashlight was. You will die shortly. Game Over!"
        gameOver()
    }
}
// den körs när man väljer mellan att acceptera Ak eller slåssa
function acceptOrFight(answer) {
    if (answer === "fight") {
        text.innerHTML = "Well, he was a prepared apocalypse fighter. You didnt stand any chance against him. Game Over!"
        gameOver()
    }
    else if(answer === "accept") {
        text.innerHTML = "Congrats you just got a weapon that will increase your chances to survive. You won the game!"
        gameOver()
    }
}