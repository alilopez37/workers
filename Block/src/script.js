document.getElementById("btn-pulsar").addEventListener("click", () => {
  let fecha = new Date();
  while (new Date() - fecha < 10000);
  document.getElementById("caption").innerText = "Se presionó el boton Pulsar";
});
document.getElementById("btn-msn").addEventListener("click", () => {
  alert("Esto es un mensaje");
});

document.getElementById("btn-random").addEventListener("click", () => {
  let w;
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("./src/random.js");
      w.postMessage(10_000_000)
      w.onmessage = (e) => {
        document.getElementById("response").innerText = `${e.data[0]}:${e.data[1]}`
      }
    }
  }
});

let ww;
document.getElementById("btn-iniciar").addEventListener("click",()=>{
  if (typeof(Worker) !== "undefined") {
    if (typeof(ww) == "undefined") {
      ww = new Worker("./src/count.js");
      ww.onmessage = (e) => {
        document.getElementById("number").innerText = `${e.data}`  
      }
    }
  }
});

document.getElementById("btn-detener").addEventListener("click",()=>{
  ww.terminate();
})