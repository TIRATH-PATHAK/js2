var x = document.getElementsByClassName('texts');


function btn(number) {
     var z = document.getElementById(number);
     if (z.classList.contains("hide")) {
         
          for (let i = 0; i < x.length; i++) {
              x[i].classList.add("hide")
          }
          z.classList.remove("hide")
          
      } else{
  
          z.classList.add("hide")
  
         
      }
}
