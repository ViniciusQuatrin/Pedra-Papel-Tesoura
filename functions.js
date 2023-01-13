let elementos = document.querySelectorAll('.player-options div > img');
let playerOpt = "";
let inimigoOpt = "";

   function resetEnemy() {
    for(let i = 0; i < enemyOptions.length; i++) {
            enemyOptions[i].childNodes[0].style.opacity = 0.3;
     }
   }

   function enemy() {
     let random = Math.floor(Math.random() * 3);

     const enemyOptions = document.querySelectorAll('.enemy-options div');

     resetEnemy()
     for(let i = 0; i < enemyOptions.length; i++) {
        if(i == random){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
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
