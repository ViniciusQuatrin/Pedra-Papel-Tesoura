let elementos = document.querySelectorAll('.player-options div > img');
let playerOpt = "";
let inimigoOpt = "";
let namePlayer;
let nameInimigo;
let playerScore = 0;
let inimigoScore = 0;

    let playerS = document.querySelector(".playerScore");
    let inimigoS = document.querySelector(".inimigoScore");

   namePlayer = prompt("Digite seu nome: ");

   let resultado = document.querySelector(".resultado");
   let nomeJogador = document.querySelector(".nameP");
    nomeJogador.innerHTML = namePlayer;

   function validarVitoria() {
      if(playerOpt == "papel") {

         if(inimigoOpt == "pedra") {
            resultado.innerHTML = namePlayer + " Venceu!";
            
         } else if(inimigoOpt == "tesoura") {
            resultado.innerHTML = "Bot Venceu";

         } else if(inimigoOpt == "papel") {
            resultado.innerHTML = "Empate!";

         }
      }

      if(playerOpt == "pedra") {

         if(inimigoOpt == "tesoura") {
            resultado.innerHTML = namePlayer + " Venceu!";
            
         } else if(inimigoOpt == "papel") {
            resultado.innerHTML = "Bot Venceu";

         } else if(inimigoOpt == "pedra") {
            resultado.innerHTML = "Empate!";

         }
      }

      if(playerOpt == "tesoura") {

         if(inimigoOpt == "papel") {
            resultado.innerHTML = namePlayer + " Venceu!";
            
         } else if(inimigoOpt == "pedra") {
            resultado.innerHTML = "Bot Venceu";

         } else if(inimigoOpt == "tesoura") {
            resultado.innerHTML = "Empate!";

         }
      }
      contarScore(resultado);
   }

   function contarScore(resultado) {
      if(resultado.innerHTML == namePlayer + " Venceu!") {
         playerScore++;
         playerS.innerHTML = playerScore;
      } else if(resultado.innerHTML == "Bot Venceu") {
         inimigoScore++
         inimigoS.innerHTML = inimigoScore;
      }
   }

   function resetStylePlayer(){
      for(let i = 0; i < elementos.length; i++){
           elementos[i].style.opacity = 0.3;
           elementos[i].style.boxShadow = "none";
      }       
   }

     for(let i = 0; i < elementos.length; i++){
         elementos[i].addEventListener('click',function(t){
            resetStylePlayer();
            t.target.style.transition = "all 0.5s";
            t.target.style.boxShadow = "0px 1px 12px 5px #007bff"
            t.target.style.opacity = 1;
            playerOpt = t.target.getAttribute('opt');
 
         enemy();
       });
 
    }

    function resetEnemy() {
      for(let i = 0; i < enemyOptions.length; i++) {
              enemyOptions[i].childNodes[0].style.opacity = 0.3;
              enemyOptions[i].childNodes[0].style.boxShadow = "none";
       }
     }
 
   const enemyOptions = document.querySelectorAll('.enemy-options div');

   function enemy() {
     let random = Math.floor(Math.random() * 3);

     const enemyOptions = document.querySelectorAll('.enemy-options div');

     resetEnemy();
     
     for(let i = 0; i < enemyOptions.length; i++) {
        if(i == random){
            enemyOptions[i].childNodes[0].style.transition = "all 0.5s";
            enemyOptions[i].childNodes[0].style.boxShadow = "0px 1px 12px 5px #f72c2c"
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
     }
     validarVitoria();

     
   }