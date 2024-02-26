let audio=new Audio('sounds\\gun.mp3')
let shoot=document.getElementById('gun')
let fire=document.getElementById('fire')
shoot.addEventListener('click',()=>{
    audio.play()
    shoot.style.scale="1.3"
    fire.style.scale="0.5"
    function back(){
        shoot.style.scale="1"
        fire.style.scale="0"
    }
    setTimeout(back,500)

})