const fazendeiro = document.querySelector("#fazendeiro");
const lobo = document.querySelector("#lobo");
const carneiro = document.querySelector("#carneiro");
const alface = document.querySelector("#alface");
const desce = document.querySelector("#desce");



fazendeiro.addEventListener("click", moveFazendeiro);
lobo.addEventListener("click", moveLobo);
carneiro.addEventListener("click", moveCarneiro);
alface.addEventListener("click", moveAlface);
desce.addEventListener("click", descer);

function moveFazendeiro(event) {
  if(fazendeiro.parentElement == margemcima){
    if (cima.childElementCount == 2)
    return;
    else cima.appendChild(fazendeiro);
  }   
  else margemcima.appendChild(fazendeiro);
}

function moveLobo(event) {
  if(lobo.parentElement == margemcima){
    if (cima.childElementCount == 2)
    return;
    else cima.appendChild(lobo);
  }   
  else margemcima.appendChild(lobo);
}

function moveCarneiro(event) {
  if(carneiro.parentElement == margemcima){
    if (cima.childElementCount == 2)
    return;
    else cima.appendChild(carneiro);
  }   
  else margemcima.appendChild(carneiro);
}

function moveAlface(event) {

  if(alface.parentElement == margemcima){
    if (cima.childElementCount == 2)
    return;
    else cima.appendChild(alface);
  }   
  else margemcima.appendChild(alface);
}

function descer(event){
    const eNovo = cima.children;
    baixo.appendChild(eNovo[0]);
} 