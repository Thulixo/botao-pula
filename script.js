function sim() {
  alert("IHUUUUUU");
}

function desvia() {
  var btn = document.getElementById("btn");
  btn.style.position = "absolute";
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
  console.log("opa");
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}
