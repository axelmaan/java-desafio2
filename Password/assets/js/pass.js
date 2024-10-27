document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn").addEventListener("click", function(){
 
        
        
        let digito1=document.getElementById("digito1").value
        let digito2=document.getElementById("digito2").value
        let digito3=document.getElementById("digito3").value
        let password=digito1+digito2+digito3
        let passwordOK1="911"
        let passwordOK2="714"
        let mensaje=document.getElementById("mensaje")
        if (password == passwordOK1 ||password == passwordOK2 ) {
            mensaje.innerText="Password correcta"
        }
        
        else {
            mensaje.innerText="Password Incorrecta"
        }
        }
        
        )
})



