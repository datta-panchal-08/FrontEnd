var input = document.querySelector('input');
var person =[ 
     {name : "datta",src : 'https://images.pexels.com/photos/17572202/pexels-photo-17572202/free-photo-of-a-black-and-white-photo-of-a-man-smiling.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
     {name : "sonu",src : 'https://images.pexels.com/photos/20434992/pexels-photo-20434992/free-photo-of-jasmine-bajwa-model-shoot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
     {name : "param",src : 'https://images.pexels.com/photos/17489928/pexels-photo-17489928/free-photo-of-artist-sitting-in-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
     {name : "anjali",src : 'https://images.pexels.com/photos/17484153/pexels-photo-17484153/free-photo-of-the-stare-3.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
     {name : "adarsh",src : 'https://images.pexels.com/photos/20411323/pexels-photo-20411323/free-photo-of-dark-mode.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
     {name : "rita",src : 'https://images.pexels.com/photos/18962926/pexels-photo-18962926/free-photo-of-asian-model-posing-on-a-lakeside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}

     
 ]
var pers ='';
  
person.forEach(function(elem){
      pers +=`  <div class="person">
      <div class="img">
          <img src="${elem.src}" alt="">
      </div>
      <h4>${elem.name}</h4>
  </div>`; 
}); 

document.querySelector('.people').innerHTML = pers;

input.addEventListener('input',function(){
   var matching = person.filter(function(e){
       return e.name.startsWith(input.value);
   });
    
   var newUsers = "";
   matching.forEach(function(elem){
    newUsers +=`  <div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`; 
}); 

document.querySelector('.people').innerHTML = newUsers;
});