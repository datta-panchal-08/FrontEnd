var btn  = document.querySelector("button");
var img1 = document.querySelector('#img1');
var img2 = document.querySelector("#img2");

img1.style.width = "300px";
img1.style.height = "300px";
img1.style.objectFit = "cover";

img2.style.width = "300px";
img2.style.height = "300px";
img2.style.objectFit = "cover";


btn.addEventListener('click',function(){
 var src1 = img1.src;
 var src2 = img2.src;

 img1.src = src2;
 img2.src = src1;
});