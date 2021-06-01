const brainfrain = "TO THIS DAY, i still think this program is impressive"
let ratio = 8

function getAsciiCode(character) {
  return character.charCodeAt(0)
}

function getAsciiCodeAtPos(str, pos) {
  return getAsciiCode(str[pos])
}

function returnDivNum(num) {
  let retNum = num
  while(!(retNum % ratio == 0)) {
    retNum--;
  }
  return retNum
}

function randomNumber(min, max) { 
  return Math.random() * (max - min) + min;
} 

function getElementById(id) {
  return document.getElementById(id)
}

function convertToBrainfuck(str) {
  let code = ""
  for(let i = 0; i < str.length; i++) {
    let curChar = getAsciiCodeAtPos(str, i)
    let divNum = returnDivNum(curChar)
    let loopPluses = divNum / ratio
    code += `${"+".repeat(ratio)}[->${"+".repeat(loopPluses)}<]>${"+".repeat(curChar - divNum)}.>`
  }
  return code
}

window.onload=function()
 {
  getElementById("btn").addEventListener('click', () => {
    getElementById("btn").className = "button is-success is-loading"
    setTimeout(function(){
      getElementById("op").value = convertToBrainfuck(getElementById("bft").value)
      getElementById("btn").className = "button is-success is-success"
    },175);

  })
 }

