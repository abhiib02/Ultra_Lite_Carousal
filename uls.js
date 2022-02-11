var slider=document.querySelector('.slider-wrapper');
var images=document.querySelectorAll('.slide');
var imgsrc=[];
var thumbnails=document.querySelector('.thumbnails');
function addHidetoslide(){
  for(let i =0;i<images.length;i++){
    images[i].classList.add("hide");
  }
}
function imagetoimgsrc(){
  for(let i =0;i<images.length;i++){
    imgsrc[i]=images[i].getAttribute("src");
      console.log(imgsrc[i]);
  }
  addHidetoslide();
};

function makingthumbnails(){
  thumbnails.innerHTML='';
   for(let i =0;i<imgsrc.length;i++){
     thumbnails.innerHTML= thumbnails.innerHTML + `
      <img class="thumbnail" src="${imgsrc[i]}">
    `;
   }
  console.log(thumbnails);
}
imagetoimgsrc();
makingthumbnails();
images[0].classList.remove("hide");
function thumbClicks(){
  var thumbnail=document.querySelectorAll('.thumbnail');
let thumb;
console.log(thumbnail);
  
thumbnail.forEach((thumb,index)=>{
  thumb.addEventListener('click',(thumb)=>{
    addHidetoslide();
     images[index].classList.remove("hide");
  });
})
}
thumbClicks();
autoplay(10000);
function autoplay(speed){
  let i=0;
  setInterval((i)=>{
    addHidetoslide();
    images[i].classList.remove("hide");
    i++;
  },speed);
}
