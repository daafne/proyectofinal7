
const items = document.querySelectorAll(".tituloicono");

const section1 = document.querySelector(".aboutme");
const section2 = document.querySelector(".recentworks");
const section3 = document.querySelector(".services");
const section4 = document.querySelector(".clientsreviews");
const section5 = document.querySelector(".getintouch");


// Detectamos el movimiento del scroll que hacemos sobre el navegador
// a medida que el scroll baja vamos viendo las diferentes secciones
// y por tanto, las marcamos con un borde
window.addEventListener("scroll", function () {
    let rect1 = section1.getBoundingClientRect();
    const alturaSection1 = rect1.top;
    



    let rect2 = section2.getBoundingClientRect();
    const alturaSection2 = rect2.top;
   

    let rect3 = section3.getBoundingClientRect();
    const alturaSection3 = rect3.top;
    

    let rect4 = section4.getBoundingClientRect();
    const alturaSection4 = rect4.top;
   

    let rect5 = section5.getBoundingClientRect();
    const alturaSection5 = rect5.top;
    

   
    const alturaPantalla = window.innerHeight;
   

    if (alturaSection1 < alturaPantalla && alturaSection1 >= 0) {
        items[0].style.borderBottom = "2px solid white";
        items[1].style.borderBottom = "0px";
        items[2].style.borderBottom = "0px";
        items[3].style.borderBottom = "0px";
        items[4].style.borderBottom = "0px";
       
       


    }
    if (alturaSection2 < alturaPantalla && alturaSection2 >= 0) {
        items[0].style.borderBottom = "0px";
        items[1].style.borderBottom = "2px solid white";
        items[2].style.borderBottom = "0px";
        items[3].style.borderBottom = "0px";
        items[4].style.borderBottom = "0px";
       
       


    }
    if (alturaSection3 < alturaPantalla && alturaSection3 >= 0) {
        items[0].style.borderBottom = "0px";
        items[1].style.borderBottom = "0px";
        items[2].style.borderBottom = "2px solid white";
        items[3].style.borderBottom = "0px";
        items[4].style.borderBottom = "0px";
       
       


    }
    if (alturaSection4 < alturaPantalla && alturaSection4 >= 0) {
        items[0].style.borderBottom = "0px";
        items[1].style.borderBottom = "0px";
        items[2].style.borderBottom = "0px";
        items[3].style.borderBottom = "2px solid white";
        items[4].style.borderBottom = "0px";
        
        


    }
    if (alturaSection5 < alturaPantalla && alturaSection5 >= 0) {
        items[0].style.borderBottom = "0px";
        items[1].style.borderBottom = "0px";
        items[2].style.borderBottom = "0px";
        items[3].style.borderBottom = "0px";
        items[4].style.borderBottom = "2px solid white";
       
      


    }
  
  








});