
let homeS = document.getElementById("homeS")
let guestS = document.getElementById("guestS")

let homeScore = 0
let guestScore = 0

function plus1h() {
   homeScore += 1
   homeS.innerText = homeScore
} 
function plus2h() {
   homeScore += 2
   homeS.innerText = homeScore
} 
function plus3h() {
   homeScore += 3
   homeS.innerText = homeScore
} 
function plus1g() {
   guestScore += 1
   guestS.innerText = guestScore
} 
function plus2g() {
   guestScore += 2
   guestS.innerText = guestScore
} 
function plus3g() {
   guestScore += 3
   guestS.innerText = guestScore
} 
function newGame() {
    
    homeS.innerText = 0
    guestS.innerText = 0
    homeScore = 0
    guestScore = 0
}
