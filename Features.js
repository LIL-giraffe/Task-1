var slider=document.getElementById("slider")
var val=document.getElementById("value")
var btn=document.getElementById("btn1")
var btn1=document.getElementById("btn2")
var btn2=document.getElementById("btn3")
var card1=document.getElementById("card1")
var card2=document.getElementById("card2")
var card3=document.getElementById("card3")

val.innerHTML=slider.value

slider.oninput=function(e){
    // val.innerHTML=this.value
    const value=e.currentTarget.value
    val.innerHTML=value
    // console.log(value)
    if(value>1 && value<11){
        btn.disabled=false
        card1.style.opacity="1"
        value=1
        
    }
    else if(value>11 && value<21){
      btn1.disabled=false
      card2.style.opacity="1"
      value=1
    }
    else {
        btn2.disabled=false
        card3.style.opacity="1"
        value=1
    }
    
}


//cursor-not-allowed
// slider.addEventListener("click",(e)=>{
//     const value=e.currentTarget.value
//     console.log(value)
//     if(value>0 && value<11){
//         btn.disabled=false
//     }
//     else if(value>10 && value<21){
//       btn1.disabled=false
//     }
//     else {
//         btn2.disabled=false
//     }
// })