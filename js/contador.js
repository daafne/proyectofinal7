import { CountUp } from '../countUp/dist/countUp.js';

const activador= document.querySelector(".activacontador");

//cuando se cargue la pagina web del ordenador
//empieza a animarse

window.onload = function () {
    var contador1 = new CountUp('contador1',16);
    var countup2 = new CountUp('contador2',100);
    var countup3 = new CountUp('contador3',1112);
    var countup4 = new CountUp('contador4',50);
    contador1.start(); 
    countup2.start();
    countup3.start();
    countup4.start();
}

