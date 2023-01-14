let elementos = document.querySelectorAll('.player-options div > img');
let playerOpt = "";
let inimigoOpt = "";
let namePlayer;
let nameInimigo;

   namePlayer = prompt("Digite seu nome: ");
   nameInimigo = prompt("Digite o nome do seu adversário: ");
   let resultado = document.querySelector(".resultado");

   function validarVitoria() {
      if(playerOpt == "papel") {

         if(inimigoOpt == "pedra") {
            resultado.innerHTML = namePlayer + " Venceu!";
            
         } else if(inimigoOpt == "tesoura") {
            resultado.innerHTML = nameInimigo + " Venceu";

         } else if(inimigoOpt == "papel") {
            resultado.innerHTML = "Empate!";

         }
      }

      if(playerOpt == "pedra") {

         if(inimigoOpt == "tesoura") {
            resultado.innerHTML = namePlayer + " Venceu!";
            
         } else if(inimigoOpt == "papel") {
            resultado.innerHTML = nameInimigo + " Venceu";

         } else if(inimigoOpt == "pedra") {
            resultado.innerHTML = "Empate!";

         }
      }

      if(playerOpt == "tesoura") {

         if(inimigoOpt == "papel") {
            resultado.innerHTML = namePlayer + " Venceu!";
            
         } else if(inimigoOpt == "pedra") {
            resultado.innerHTML = nameInimigo + " Venceu";

         } else if(inimigoOpt == "tesoura") {
            resultado.innerHTML = "Empate!";

         }
      }
   }

   function resetOpacityPlayer(){
      for(let i = 0; i < elementos.length; i++){
           elementos[i].style.opacity = 0.3;
     }
  }
 
     for(let i = 0; i < elementos.length; i++){
         elementos[i].addEventListener('click',function(t){
            resetOpacityPlayer();
            t.target.style.opacity = 1;
            playerOpt = t.target.getAttribute('opt');
 
         enemy();
       });
 
    }

    function resetEnemy() {
      for(let i = 0; i < enemyOptions.length; i++) {
              enemyOptions[i].childNodes[0].style.opacity = 0.3;
       }
     }
 
   const enemyOptions = document.querySelectorAll('.enemy-options div');

   function enemy() {
     let random = Math.floor(Math.random() * 3);

     const enemyOptions = document.querySelectorAll('.enemy-options div');

     resetEnemy();
     
     for(let i = 0; i < enemyOptions.length; i++) {
        if(i == random){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
     }
     validarVitoria();
   }



 
