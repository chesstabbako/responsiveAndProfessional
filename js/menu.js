let ubicacionPrincipal= window.pageYOffset;//Esto tambien puede colocarse en cero, es decir, que empiece valiendo cero.
  
AOS.init();

window.addEventListener("scroll", pantalla);

function pantalla(){
  
 let desplazamientoActual= window.pageYOffset;
  
 if(ubicacionPrincipal>=desplazamientoActual){
   
   document.getElementsByTagName("nav")[0].style.top="0px";
   
 }else{
   
  document.getElementsByTagName("nav")[0].style.top="-100px"; 
   
 }
  
ubicacionPrincipal=desplazamientoActual;
  
}

//Menu 

let enlacesHeader= document.querySelectorAll(".enlaces-header")[0];

let semaforo=true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", menu);

function menu(){

   enlacesHeader.classList.toggle("menudos");

 if(semaforo){
  
  document.querySelectorAll(".hamburger")[0].style.color="white"; 
  
  semaforo=false;
 
 }else{
  
  document.querySelectorAll(".hamburger")[0].style.color="#000"; 
  
  semaforo=true;  
  
}
 
}