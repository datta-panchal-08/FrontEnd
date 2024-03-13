var ul  = document.querySelector('ul');
var Add = document.querySelector('#add');
var Remove = document.querySelector("#remove");
var inp = document.querySelector('input');
var li;
Add.addEventListener('click',function(){
    if(inp.value.trim() === ''){}
    else{
       let value  = inp.value;
       li = document.createElement('li');
       li.textContent = value;
       ul.appendChild(li);
       inp.value = "";
     

    }      
});

Remove.addEventListener("click",function(){
    ul.removeChild(li);
})
