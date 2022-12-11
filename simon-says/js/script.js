const myButton = document.getElementById('button');
let clickCount = 0;
let block = false;


myButton.addEventListener('click', function(){
    if(!block){
        clickCount++
        myButton.innerHTML = '#' + clickCount;
        if(clickCount >= 10){
            clickCount = 0;
            block = true;
        }
        setTimeout(() => {
            block = false;
        }, 10 * 1000);
    }
})