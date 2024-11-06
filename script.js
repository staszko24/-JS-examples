const colors = ['red','green','black','purple','#A31FF0','#FFB450'];//Colors used by function. 


function randomValue(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return random;
}

function setColor(fn) {
    const element = document.getElementById('content');
    element.style.backgroundColor = colors[fn];
}

(() => setColor(randomValue(colors)))();



