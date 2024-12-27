const input=document.getElementById('user_input')
const sendBtn=document.getElementById('send')
const decrement=document.getElementById('decrement')
const counterdisplay=document.getElementById('counter')
const increment=document.getElementById('increment')
const colorpicker=document.getElementById('colorinput')




let counter=0
//send buttoni uchun event listner 
sendBtn.addEventListener('click',()=>{
    counterdisplay.textContent=input.value
})

// - bosilganda ayrilishi 

decrement.addEventListener('click',()=> {
   counter--
   counterdisplay.textContent=counter

})

increment.addEventListener('click',()=> {
    counter++
    counterdisplay.textContent=counter
})

colorpicker.addEventListener('input',()=>{
    counterdisplay.style.color = colorpicker.value
})