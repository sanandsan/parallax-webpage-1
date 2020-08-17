

function clickdownArrow(){
    if(document.getElementById("changeId").className=="far fa-arrow-alt-circle-down"){
        document.getElementById("changeId").className = "far fa-arrow-alt-circle-up";
        document.getElementById("scrollbutton").href="#foodmain";
      }else{
        document.getElementById("changeId").className = "far fa-arrow-alt-circle-down";
        document.getElementById("scrollbutton").href="#forest-main"
      } 
   
}


function scrolledforest(){
   const percentage= window.pageYOffset(document.getElementById("forest-main")).scrollTop;
   console.log(percentage);
}

function onScrollForest(){
const banner1=document.getElementById("right-banner")
banner1.animate({},)
banner1.style({left:-3000})

}