const colors = ['red','green','black','purple','#A31FF0','#FFB450'];//Colors used by function. 


function randomValue(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return random;
}

function setColor(fn, arr) {
    const element = document.getElementById('content');
    if(element){
        element.style.backgroundColor = arr[fn];
    }else{
        console.error('content does not exist');
    }
    
}

(() => setColor(randomValue(colors), colors))();



