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


var acc = document.getElementsByClassName('button');

for(i = 0;i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active');
        
    });
}