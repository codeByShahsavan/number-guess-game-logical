
const randomNumber=Math.ceil(Math.random()*100)
console.log(randomNumber)

const validateNumber=value=>{
     if(isNaN(value)){
      return "please enter a valid number"
     }else if(+value<1 || +value>100){
      return "please enter a number between 1 to 100"
     }
}

const play=()=>{
  const number=prompt("Enter a number between 1 to 100")

  if(number===null) return


  const validation=validateNumber(number)
  console.log(validation)
  if(validation){
    return play()
  }
}




play()