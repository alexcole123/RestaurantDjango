// document.addEventListener('DOMContentLoaded', () => { var h = document.getElementById('aboutHeader'), c = ['#ff0000', '#00ff00', '#0000ff'], i = 0; setInterval(() => { h.style.color = c[i]; i = (i + 1) % c.length; }, 3000); });

setInterval(() => {
    const aboutHeader = document.getElementById("aboutHeader");
    if(aboutHeader){
        aboutHeader.style.color = "#" + Math.floor(Math.random() *16777215).toString(16);
    }

}, 3000);