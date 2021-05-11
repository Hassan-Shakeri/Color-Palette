const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const one = document.querySelector(".numOne")
const two = document.querySelector(".numTwo")
const three = document.querySelector(".numThree")
const four = document.querySelector(".numFour")
const numOne = document.getElementById("one")
const numTwo = document.getElementById("two")
const numThree = document.getElementById("three")
const numFour = document.getElementById("four")

btn.addEventListener("click", ()=>{
    let hexOne = "#"
    let hexTwo = "#"
    let hexThree = "#"
    let hexFour = "#"

    for(let i = 0; i<6;i++){
        hexOne += hex[randNum()]
    }
    for(let j = 0; j<6; j++){
        hexTwo += hex[randNum()]
    }
    for(let k = 0; k<6; k++){
        hexThree += hex[randNum()]
    }
    for(let l = 0; l<6; l++){
        hexFour += hex[randNum()]
    }
   console.log("one", hexOne) 
   console.log("one", hexTwo) 
   console.log("one", hexThree) 
   console.log("one", hexFour) 



    one.style.backgroundColor = hexOne
    two.style.backgroundColor = hexTwo
    three.style.backgroundColor = hexThree
    four.style.backgroundColor = hexFour
    numOne.textContent = hexOne
    numTwo.textContent = hexTwo
    numThree.textContent = hexThree
    numFour.textContent = hexFour

    function randNum (){
        return Math.floor(Math.random() * hex.length)
    }

})