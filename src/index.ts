
let operacoes: any[] = ["-", "+", "/", "*"]
let calculo = ""
let novoCalculoAux = 0;
let novoCalculo = 0;

function btNumero(event: Event): void {
  //if(){
  //iniciado novo calculo
  let valor = event.target.value
  console.log(valor)
  document.getElementById("display").value = valor;
  calculo += valor;
  //}
  /* let valor = event.target.value;
  console.log(valor)
  let display = document.getElementById("display");
  if(display.value.includes(".")){
      //iniciado novo calculo
      calculo += valor;
  }else{
      calculo += valor;
  }
  display.value = valor; */
}
function btOperacao(event: Event): void {
  console.log(event.target.value)
  calculo += event.target.value;
}
function igual(): void {
  let resultado: number = 0;
  if (calculo.includes("+")) {
    let calculoAux = calculo.split("+")
    let a = Number.parseFloat(calculoAux[0])
    let b = Number.parseFloat(calculoAux[1])
    resultado = soma(a, b)
  } else if (calculo.includes("-")) {
    let calculoAux = calculo.split("-")
    let a = Number.parseFloat(calculoAux[0])
    let b = Number.parseFloat(calculoAux[1])
    resultado = subtracao(a, b)
  } else if (calculo.includes("/")) {
    let calculoAux = calculo.split("/")
    let a = Number.parseFloat(calculoAux[0])
    let b = Number.parseFloat(calculoAux[1])
    resultado = divisao(a, b)
  } else if (calculo.includes("*")) {
    let calculoAux = calculo.split("*")
    let a = Number.parseFloat(calculoAux[0])
    let b = Number.parseFloat(calculoAux[1])
    resultado = multiplicao(a, b)
  }
  console.log(resultado)
  //plota resultado
  document.getElementById("display").value = resultado.toString();
  calculo = "";
}
function soma(a: number, b: number): number {
  return a + b;
}
function subtracao(a: number, b: number): number {
  return a - b;
}
function divisao(a: number, b: number): number {
  if (b === 0) {
    return -0.3
  }
  return a / b;
}
function multiplicao(a: number, b: number): number {
  return a * b;
}
function clearDisplay(): void {
  document.getElementById("display")!.value = "";
  calculo = "";
}
function setDecimal(event: Event) {
  let simbolo = event.target.value
  document.getElementById("display").value += simbolo;
  calculo += simbolo;
}



