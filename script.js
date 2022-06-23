function carregar(){
var msg = document.getElementById("msg")
var image = document.getElementById("imagem")
date = new Date();
horas = date.getHours()
minutos = date.getMinutes()
var mensagem = document.getElementById("mensagem")
msg.innerHTML=`Agora São ${horas} Horas e ${minutos}  Minutos`



if(horas >= 0 && horas <12 ){
   
    imagem.src='image/manha.png'
    mensagem.innerHTML=("Bom Dia")
    document.body.style.background="#f6cc72"
    
}
else if(horas >=12 && horas <18){
    mensagem.innerHTML=("Boa Tarde")
    document.body.style.background="#cd6238"

imagem.src='image/tarde.png'
}


else{
    imagem.src='image/noite.png' 
    mensagem.innerHTML=("Boa Noite")
    document.body.style.background="#13080c"
}

}
