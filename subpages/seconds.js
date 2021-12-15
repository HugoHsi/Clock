let loading = true


const secondElement = document.querySelector(".second")
const timeElement = document.querySelector(".time")



function updateTime(){
  const time = new Date();
  
  const second = time.getSeconds()
  
  if(!loading){

secondElement.style.transition = `${second === 0 ? "none" : "all 1s ease-in"}`
  }else{
   
secondElement.style.transition = `${second === 0 ? "none" : "all 0.3s ease-in"}`
  }
  
 
  secondElement.style.transform = `translate(-50%,-100%) rotate(${scale(second,0,59,0,359)}deg)`


  loading = false
  
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


setInterval(updateTime,100)