Window.onload = function() {
 var stage = document.getElementById("stage");
 var ctx = stage.getContext("2d");
 document.addEventListener("keydown", keyPush);
 setInterval(game, 85);

 // qtde casinhas andar
 
 const velocidade =1;

 // eixo x e y 
 var vx = vy = 0;

 // cabeca da cobra
 var px = 10;
 
 // cauda da cobra
 var py = 15;

 // tamanho da peca
 var tp = 30;

 // quantidade de peca do tabuleiro
 var qp = 20;

 // apple x e y
 var ax=ay=15;

 //rastro da cobra
 var trail= [];

 // tamanho da cobra
 var tail = 5;

 function game(){
    // quando a cobra andar printar a tela novamente
    // posicao mais velocidade x
   px += vx;
   py += vy;


   if (px <0){
     px = qp-1;

   };

   if ( px> qp-1) {
    // py = qp-1;
     px=0;

   }

   if (py < 0) {
     py = qp-1;
    
   }

   if (py > qp-1) {
    py =0;

   }


 //contextos
   ctx.fillStyle= "black";
   ctx.fillRect(0, 0, stage.width, stage.height);

   // cor da maca
   ctx.fillStyle= "red";
   ctx.fillRect(ax*tp, ay*tp, tp, tp);

   // pintar rastro da cobra
   ctx.fillStyle= "gray";

   for (var i=0; i< trail.length; i++) {
     ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1, tp-1);
   
    // se a cabeca bater na cauda 
     if ( trail[i].x == px && trail[i].y == py) {

        vx =vy =0;
        tail = 5;
     }
   } // for
   trail.push({x:px, y:py});
    while(trail.length > tail) {
       trail.shift();
    } // while
    if (ax==px && ay==py) {
      tail++;
      ax= Math.floor(Math.random()*qp);
      ay= Math.floor(Math.random()*qp);
    } // if
 
 }; // game

  function keyPush(event){
    switch (event.keyCode) {
       case 37:
           vx = -velocidade;
           vy =0;
           break;
        case 38:
            vx =0;
            vy = -velocidade;
            break;
        case 39:
            vx = velocidade;
            vy =0;
            break;
        case 40:
            vx = 0;
            vy = velocidade;
            break;
        default:
            break;
    }; // switch

   }; // keypush
};
