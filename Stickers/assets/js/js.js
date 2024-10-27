document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btn").addEventListener("click",function(){
    
        let sticker1=Number(document.getElementById('sticker1').value)
        let sticker2=Number(document.getElementById('sticker2').value)
        let sticker3=Number(document.getElementById('sticker3').value)
        let total=sticker1+sticker2+sticker3
        
        let mensaje=document.getElementById("mensaje")
        
        if (total<=10) {
            mensaje.innerText ='Puedes llevar los stickers';
        }
        else {
            mensaje.innerText ='No puedes llevar mas de 10 sticker';
        }
        }) 
        
})



