const fazendeiro = document.querySelector("#fazendeiro");
const lobo = document.querySelector("#lobo");
const carneiro = document.querySelector("#carneiro");
const alface = document.querySelector("#alface");

const desce = document.querySelector("#desce");
const sobe = document.querySelector("#sobe");

fazendeiro.addEventListener("click", moveFazendeiro);
lobo.addEventListener("click", moveLobo);
carneiro.addEventListener("click", moveCarneiro);
alface.addEventListener("click", moveAlface);

desce.addEventListener("click", descer);
sobe.addEventListener("click", subir);

function moveFazendeiro(event) {
  embarque_desembarque(fazendeiro);
}

function moveLobo(event) {
  embarque_desembarque(lobo);
}

function moveCarneiro(event) {
  embarque_desembarque(carneiro);
}

function moveAlface(event) {
  embarque_desembarque(alface);
}

function descer(event) {
  while (cima.firstChild) baixo.appendChild(cima.firstChild);
}

function subir(event) {
  while (baixo.firstChild) cima.appendChild(baixo.firstChild);
}

function embarque_desembarque(passageiro) {
  //Parte de cima
  if (passageiro.parentElement == margemcima) {
    if (cima.childElementCount == 2) return;
    else cima.appendChild(passageiro);
  } else if (passageiro.parentElement == cima)
    margemcima.appendChild(passageiro);
  //Parte de baixo
  else if (passageiro.parentElement == margembaixo) {
    if (baixo.childElementCount == 2) return;
    else baixo.appendChild(passageiro);
  } else if (passageiro.parentElement == baixo)
    margembaixo.appendChild(passageiro);
}
