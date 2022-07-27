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
  if (avaliaDescida() == true) {
    while (cima.firstChild) baixo.appendChild(cima.firstChild);
    baixo.style.visibility = "visible";
    cima.style.visibility = "hidden";
  }
}

function subir(event) {
  if (avaliaSubida() == true) {
    while (baixo.firstChild) cima.appendChild(baixo.firstChild);
    cima.style.visibility = "visible";
    baixo.style.visibility = "hidden";
  }
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

function avaliaDescida() {
  if (fazendeiro.parentElement == cima) return true;
  else return false;
}

function avaliaSubida() {
  if (fazendeiro.parentElement == baixo) return true;
  else return false;
}

function avaliaDerrota() {
  if (margemcima.childElementCount == 3) {
    if (
      lobo.parentElement == margemcima &&
      carneiro.parentElement == margemcima
    )
      return true;
    else if (
      carneiro.parentElement == margemcima &&
      alface.parentElement == margemcima
    )
      return true;
    else return false;
  } else if (margembaixo.childElementCount == 3) {
    if (
      lobo.parentElement == margembaixo &&
      carneiro.parentElement == margembaixo
    )
      return true;
    else if (
      carneiro.parentElement == margembaixo &&
      alface.parentElement == margembaixo
    )
      return true;
    else return false;
  }
}
