const number = document.querySelector('#inputnum')
let userin;
number.addEventListener('input',(e)=>{
    userin = e.target.value
    // console.log(userin)
})
let result = document.getElementById("result")
const selectedWeight = document.querySelector("#selectedWeight")
const requiredWeight = document.querySelector("#requiredWeight")
const button =  document.querySelector(".btn_submit")

button.addEventListener("click",function (){
     
    console.log(userin)
     if(selectedWeight.value=="Kilogram"){
        
        if(requiredWeight.value=="Gram"){
            var gram = userin*1000
             result.value=gram
        }else if(requiredWeight.value=="Pound"){
            var pound = userin*2.2046
            result.value=pound
        }else if(requiredWeight.value=="Tonne"){
            var tonne = userin/1000
            result.value=tonne
        }else{
            result.value=userin
        }
     }else if(selectedWeight.value=="Gram"){
        if(requiredWeight.value=="Kilogram"){
            var kilogram = userin/1000
             result.value=kilogram
        }else if(requiredWeight.value=="Pound"){
            var pound = userin*2.2046/1000
            result.value=pound
        }else if(requiredWeight.value=="Tonne"){
            var tonne = userin/1000000
            result.value=tonne
        }else{
            result.value=userin
        }
     }else if(selectedWeight.value=="Pound"){
        if(requiredWeight.value=="Kilogram"){
            var kilogram = userin/2.2046
             result.value=kilogram
        }else if(requiredWeight.value=="Gram"){
            var gram = userin*453600
            result.value=gram
        }else if(requiredWeight.value=="Tonne"){
            var tonne = userin/2205
            result.value=tonne
        }else{
            result.value=userin
        }
     }else{
        if(requiredWeight.value=="Kilogram"){
            var kilogram = userin/1000
             result.value=kilogram
        }else if(requiredWeight.value=="Gram"){
            var gram = userin*1000000
            result.value=gram
        }else if(requiredWeight.value=="Pound"){
            var pound = userin/2205
            result.value=pound
        }else{
            result.value=userin
        }
     }



    })