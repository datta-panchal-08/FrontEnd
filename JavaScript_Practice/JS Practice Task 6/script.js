var divs = document.querySelectorAll('.tab');
var texts = document.querySelectorAll('h3');

texts[0].style.display = "block";
texts[0].style.width = "50%";

divs.forEach(function(div,index){
     div.addEventListener('click',function(){
        hideAllTexts();
        texts[index].style.display = "block";
        texts[index].style.width = '50%';
     });
});

function hideAllTexts(){
    texts.forEach(function(text){
          text.style.display = "none";
    });
}