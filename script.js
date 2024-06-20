const colors = ['red','green','black','purple','#A31FF0','#FFB450'];//Colors used by function. 


function randomValue(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return random;
}

function setColor(fn) {
    const elm = document.getElementById('content');
    elm.style.backgroundColor = colors[fn];
}

console.log(randomValue(colors));//Check the index of returned value. Only for developing purpose. Delete in final version!

(() => setColor(randomValue(colors)))();
setColor(randomValue(colors))


