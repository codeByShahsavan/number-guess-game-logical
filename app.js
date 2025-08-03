
const randomNumber=Math.ceil(Math.random()*100)
console.log(randomNumber)

const play=()=>{
  const number=prompt("Enter a number between 1 to 100")

  if(number===null){
    return
  }
    console.log(number)
}

play()