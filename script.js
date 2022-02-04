setInterval(misto, 10000)

let contador = 1;
var banca_total = 200;
var dado_selecionado = 0;
var contaconta = 0;
var valor_da_aposta = 0

function misto() {
   let ale = (Math.floor(Math.random() * 6 + 1));

   document.getElementById("posicao12").src = document.getElementById("posicao11").src;
   document.getElementById("posicao11").src = document.getElementById("posicao10").src;
   document.getElementById("posicao10").src = document.getElementById("posicao9").src;
   document.getElementById("posicao9").src = document.getElementById("posicao8").src;
   document.getElementById("posicao8").src = document.getElementById("posicao7").src;
   document.getElementById("posicao7").src = document.getElementById("posicao6").src;
   document.getElementById("posicao6").src = document.getElementById("posicao5").src;
   document.getElementById("posicao5").src = document.getElementById("posicao4").src;
   document.getElementById("posicao4").src = document.getElementById("posicao3").src;
   document.getElementById("posicao3").src = document.getElementById("posicao2").src;
   document.getElementById("posicao2").src = document.getElementById("posicao1").src;

   if (ale === 1) { document.getElementById("dado_tela").src = "img/dado1.png"; document.getElementById("posicao1").src = "img/dado1.png"; }
   if (ale === 2) { document.getElementById("dado_tela").src = "img/dado2.png"; document.getElementById("posicao1").src = "img/dado2.png"; }
   if (ale === 3) { document.getElementById("dado_tela").src = 'img/dado3.png'; document.getElementById("posicao1").src = "img/dado3.png"; }

   if (ale === 4) { document.getElementById("dado_tela").src = "img/dado4.png"; document.getElementById("posicao1").src = "img/dado4.png"; }
   if (ale === 5) { document.getElementById("dado_tela").src = "img/dado5.png"; document.getElementById("posicao1").src = "img/dado5.png"; }
   if (ale === 6) { document.getElementById("dado_tela").src = "img/dado6.png"; document.getElementById("posicao1").src = "img/dado6.png"; }

   contador++;
   contaconta++;
   if (contador > 10) { contador = 1; }

   valor_da_aposta = document.getElementById("campo_valor_aposta").value;

   if (valor_da_aposta > banca_total) {
      document.getElementById("campo_valor_aposta").value = ""; valor_da_aposta = 0;
      alert("VOCÊ NÃO TEM SALDO SUFICIENTE !")
   }

   if (ale === dado_selecionado) { banca_total = banca_total + valor_da_aposta * 5; }   // se ganhar 
   else { if (dado_selecionado !== 0) banca_total = banca_total - valor_da_aposta; }   // se perder

   document.getElementById("varios1").style.backgroundColor = 'yellow';
   document.getElementById("varios2").style.backgroundColor = 'yellow';
   document.getElementById("varios3").style.backgroundColor = 'yellow';
   document.getElementById("varios4").style.backgroundColor = 'yellow';
   document.getElementById("varios5").style.backgroundColor = 'yellow';
   document.getElementById("varios6").style.backgroundColor = 'yellow';
   dado_selecionado = 0;
   document.querySelector('.bar').classList.add('anima');

   document.getElementById("valor_total").innerHTML = 'R$   ' + banca_total + ',00';

}

function selecionado1() {

   dado_selecionado = 1;
   document.getElementById("varios1").style.backgroundColor = 'blue';
   document.getElementById("varios2").style.backgroundColor = 'yellow';
   document.getElementById("varios3").style.backgroundColor = 'yellow';
   document.getElementById("varios4").style.backgroundColor = 'yellow';
   document.getElementById("varios5").style.backgroundColor = 'yellow';
   document.getElementById("varios6").style.backgroundColor = 'yellow';

}
function selecionado2() {
   dado_selecionado = 2;
   document.getElementById("varios1").style.backgroundColor = 'yellow';
   document.getElementById("varios2").style.backgroundColor = 'blue';
   document.getElementById("varios3").style.backgroundColor = 'yellow';
   document.getElementById("varios4").style.backgroundColor = 'yellow';
   document.getElementById("varios5").style.backgroundColor = 'yellow';
   document.getElementById("varios6").style.backgroundColor = 'yellow';
}
function selecionado3() {
   dado_selecionado = 3;
   document.getElementById("varios1").style.backgroundColor = 'yellow';
   document.getElementById("varios2").style.backgroundColor = 'yellow';
   document.getElementById("varios3").style.backgroundColor = 'blue';
   document.getElementById("varios4").style.backgroundColor = 'yellow';
   document.getElementById("varios5").style.backgroundColor = 'yellow';
   document.getElementById("varios6").style.backgroundColor = 'yellow';

}
function selecionado4() {
   dado_selecionado = 4;
   document.getElementById("varios1").style.backgroundColor = 'yellow';
   document.getElementById("varios2").style.backgroundColor = 'yellow';
   document.getElementById("varios3").style.backgroundColor = 'yellow';
   document.getElementById("varios4").style.backgroundColor = 'blue';
   document.getElementById("varios5").style.backgroundColor = 'yellow';
   document.getElementById("varios6").style.backgroundColor = 'yellow';
}
function selecionado5() {
   dado_selecionado = 5;
   document.getElementById("varios1").style.backgroundColor = 'yellow';
   document.getElementById("varios2").style.backgroundColor = 'yellow';
   document.getElementById("varios3").style.backgroundColor = 'yellow';
   document.getElementById("varios4").style.backgroundColor = 'yellow';
   document.getElementById("varios5").style.backgroundColor = 'blue';
   document.getElementById("varios6").style.backgroundColor = 'yellow';

}
function selecionado6() {
   dado_selecionado = 6;
   document.getElementById("varios1").style.backgroundColor = 'yellow';
   document.getElementById("varios2").style.backgroundColor = 'yellow';
   document.getElementById("varios3").style.backgroundColor = 'yellow';
   document.getElementById("varios4").style.backgroundColor = 'yellow';
   document.getElementById("varios5").style.backgroundColor = 'yellow';
   document.getElementById("varios6").style.backgroundColor = 'blue';
}
function limpar() {

   document.getElementById("campo_valor_aposta").value = "";

}
function maisum() {
   if (document.getElementById("campo_valor_aposta").value == "") { document.getElementById("campo_valor_aposta").value = 1 } else {
      document.getElementById("campo_valor_aposta").value = parseInt(document.getElementById("campo_valor_aposta").value) + 1;
   }
}
function maiscinco() {
   if (document.getElementById("campo_valor_aposta").value == "") { document.getElementById("campo_valor_aposta").value = 5 } else {
      document.getElementById("campo_valor_aposta").value = parseInt(document.getElementById("campo_valor_aposta").value) + 5;
   }
}
function maisdez() {
   if (document.getElementById("campo_valor_aposta").value == "") { document.getElementById("campo_valor_aposta").value = 10 } else {
      document.getElementById("campo_valor_aposta").value = parseInt(document.getElementById("campo_valor_aposta").value) + 10;
   }
}
function vezesdois() {
   if (document.getElementById("campo_valor_aposta").value == "") { document.getElementById("campo_valor_aposta").value = 1 } else {
      document.getElementById("campo_valor_aposta").value = parseInt(document.getElementById("campo_valor_aposta").value) * 2;
   }
}
function dividedois() {
   if (document.getElementById("campo_valor_aposta").value == "") { document.getElementById("campo_valor_aposta").value = 1 } else {
      document.getElementById("campo_valor_aposta").value = parseInt(document.getElementById("campo_valor_aposta").value) / 2;
   }
}
function max() {
   document.getElementById("campo_valor_aposta").value = banca_total;
}