let images = document.querySelectorAll('.thumbnail');

let mainslide = document.querySelector('.mainslide');

function init(){
  
  mainslide.src = images[0].src;
}
function updateImage(event){
  
  
  let image = event.target;
  
  mainslide.src = image.src;
  mainslide.classList.add('animate__fadeIn');
  setTimeout(()=>{
    mainslide.classList.remove('animate__fadeIn');
  },800)
}
images.forEach((image)=>{
  image.addEventListener('click',updateImage)
})
init();


