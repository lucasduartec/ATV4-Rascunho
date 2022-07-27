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
  // Parte de cima

  if (fazendeiro.parentElement == margemcima) {
    if (cima.childElementCount == 2) return;
    else cima.appendChild(fazendeiro);
  } else if (fazendeiro.parentElement == cima)
    margemcima.appendChild(fazendeiro);
  //Parte de baixo
  else if (fazendeiro.parentElement == margembaixo) {
    if (baixo.childElementCount == 2) return;
    else baixo.appendChild(fazendeiro);
  } else if (fazendeiro.parentElement == baixo)
    margembaixo.appendChild(fazendeiro);
}

function moveLobo(event) {
  // Parte de cima

  if (lobo.parentElement == margemcima) {
    if (cima.childElementCount == 2) return;
    else cima.appendChild(lobo);
  } else if (lobo.parentElement == cima) margemcima.appendChild(lobo);
  //Parte de baixo
  else if (lobo.parentElement == margembaixo) {
    if (baixo.childElementCount == 2) return;
    else baixo.appendChild(lobo);
  } else if (lobo.parentElement == baixo) margembaixo.appendChild(lobo);
}

function moveCarneiro(event) {
  // Parte de cima

  if (carneiro.parentElement == margemcima) {
    if (cima.childElementCount == 2) return;
    else cima.appendChild(carneiro);
  } else if (carneiro.parentElement == cima) margemcima.appendChild(carneiro);
  //Parte de baixo
  else if (carneiro.parentElement == margembaixo) {
    if (baixo.childElementCount == 2) return;
    else baixo.appendChild(carneiro);
  } else if (carneiro.parentElement == baixo) margembaixo.appendChild(carneiro);
}

function moveAlface(event) {
  // Parte de cima

  if (alface.parentElement == margemcima) {
    if (cima.childElementCount == 2) return;
    else cima.appendChild(alface);
  } else if (alface.parentElement == cima) margemcima.appendChild(alface);
  //Parte de baixo
  else if (alface.parentElement == margembaixo) {
    if (baixo.childElementCount == 2) return;
    else baixo.appendChild(alface);
  } else if (alface.parentElement == baixo) margembaixo.appendChild(alface);
}

function descer(event) {
  while (cima.firstChild) baixo.appendChild(cima.firstChild);
}

function subir(event) {
  while (baixo.firstChild) cima.appendChild(baixo.firstChild);
}
