const socket = io()
let input =document.getElementById('info')
input.addEventListener('keyup',(e)=>{
    socket.emit('message',e.target.value)
})
socket.on('WELCOME',data=>{
    alert(data.message)
})
socket.on('log',data=>{
    let div= document.getElementById('log');
    if(div.firstChild) div.removeChild(div.firstChild);
    let p = document.createElement('p');
    p.innerHTML = data;
    div.appendChild(p);

})
