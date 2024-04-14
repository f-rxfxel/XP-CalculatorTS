let operacoes: any[] = ["-", "+", "/", "*"]
let calculo = ""
let novoCalculoAux = 0;
let novoCalculo = 0;
let ans = "";

function atualizaDisplay(texto: string){
  const displayRef:any = document.getElementById("display");
  displayRef.value = texto;
}
function calcularExpressao(expressao) {
  // Remove espaços em branco da expressão
  expressao = expressao.replace(/\s+/g, '');

  // Array para armazenar os números e operadores
  const pilha: any[] = [];
  let num = '';

  
  // Percorre a expressão caractere por caractere
  for (let i = 0; i < expressao.length; i++) {
    const char = expressao[i];

    // Se o caractere for um número, adiciona ao número atual
    if (!isNaN(Number(char)) || char === '.') {
      num += char;
    } else {
      // Se não for um número, verifica se existe um número anterior para adicionar à pilha
      if (num !== '') {
          pilha.push(parseFloat(num));
          num = '';
      }

      // Se o caractere for um operador, adiciona à pilha
      if (char === '+' || char === '-' || char === '*' || char === '/') {
          pilha.push(char);
      } else if (char === '(') {
          // Se for um parêntese de abertura, avalia a expressão dentro dos parênteses
          let subExpressao = '';
          let parentesesBalanceados = 1;
          i++;

          // Encontra a subexpressão dentro dos parênteses
          while (parentesesBalanceados > 0 && i < expressao.length) {
              if (expressao[i] === '(') parentesesBalanceados++;
              if (expressao[i] === ')') parentesesBalanceados--;
              if (parentesesBalanceados > 0) subExpressao += expressao[i];
              i++;
          }

          // Avalia a subexpressão dentro dos parênteses e adiciona à pilha
          pilha.push(calcularExpressao(subExpressao));
      }
    }
  }

  // Adiciona o último número à pilha
  if (num !== '') {
      pilha.push(parseFloat(num));
  }

  // Realiza as operações de multiplicação e divisão primeiro
  for (let i = 0; i < pilha.length; i++) {
      if (pilha[i] === '*') {
          const resultado: any = pilha[i - 1] * pilha[i + 1];
          pilha.splice(i - 1, 3, resultado);
          i -= 2;
      } else if (pilha[i] === '/') {
          const resultado = pilha[i - 1] / pilha[i + 1];
          pilha.splice(i - 1, 3, resultado);
          i -= 2;
      }
  }

  // Realiza as operações de adição e subtração
  let resultadoFinal: any = pilha[0];
  for (let i = 1; i < pilha.length; i += 2) {
      const operador = pilha[i];
      const proximoNumero = pilha[i + 1];
      if (operador === '+') {
          resultadoFinal += proximoNumero;
      } else if (operador === '-') {
          resultadoFinal -= proximoNumero;
      }
  }

  // Retorna o resultado final
  return resultadoFinal;
}
function igualAux(){
  ans = calcularExpressao(calculo)
  calculo = "";
  atualizaDisplay(ans)
}
function usarANS(){
  calculo += ans;
  atualizaDisplay(calculo)
}
function soma(a: number, b: number): number {
  return a + b;
}
function subtracao(a: number, b: number): number {
  return a - b;
}
function divisao(a: any, b: any): number {
  if (b === 0) {
    return -0.3
  }
  return a / b;
}
function multiplicao(a: any, b: any): number {
  return a * b;
}
function addCaracter({target}){
  let simbolo = target.value
  calculo += simbolo;
  atualizaDisplay(calculo)
}
function clearDisplay(): void {
  calculo = "";
  atualizaDisplay(calculo)
}
function deletaCaracter(){
  calculo = calculo.substring(0, calculo.length - 1)
  atualizaDisplay(calculo)
}