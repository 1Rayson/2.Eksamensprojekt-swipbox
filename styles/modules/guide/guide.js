// Automatic image slider  
const radioBtn = document.querySelectorAll('.radio');
let counter = 1;
setInterval(function(){
    radioBtn[counter - 1].checked = true;
    counter++;
    if(counter > document.querySelectorAll('.slide').length) {
        counter = 1;
    }
},11000);

for(let j = 0; j < radioBtn.length; j++) {
    radioBtn[j].addEventListener('click', function(e){
        e.preventDefault;
        counter = j + 1;
    });
}