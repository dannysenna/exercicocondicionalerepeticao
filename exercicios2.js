//Exercícios JavaScript-Condicional e Repetição

//Exercício 1

var nota1 = 5;
var nota2 = 3;
var nota3 = 4;
var media = (nota1+nota2+nota3)/3;

if (media >=6)

{
  console.log("Aluno com notas: "+ nota1 + ", "+ nota2 +" e "+ nota3+ ", obteve a média: "+media + " e está Aprovado!");
}else
{
   console.log("Aluno com notas: "+ nota1 + ", "+ nota2 +" e "+ nota3+ ", obteve a média: "+media + " e está Reprovado!");
}



//Exercício 2

var A = prompt("Adicione o primeiro valor:");
var B = prompt("Adicione o segundo valor:");
var C = prompt("Adicione o terceiro valor:");

if (A>B && A>C)
{
    console.log("O número: "+ A + " é o maior valor");
}
else if (B>A && B>C)
{
    console.log("O número: "+ B + " é o maior valor!");
}
else if (C>A && C>B)
{
    console.log("O número: "+ C + " é o maior valor!");
}
else
{
    console.log("Você digitou números iguais, não pode, digite valores que sejam diferentes!");
} 



//Exercício 3

var a = prompt("Digite o primeiro valor:");
var b = prompt("Digite o segundo valor:");

// Função para verificar se a e b são múltiplos
function multiplos(a,b){
    // Verifica se a divisão de a por b tem resto zero
    if (a % b === 0 || b % a === 0) {
        return true; // São múltiplos
      } else {
        return false; // Não são múltiplos
      }
}
// Verifica se a e b são múltiplos e exibe a mensagem no console
  if (multiplos(a, b)) {
    console.log("Os números: " + a + " e " + b + " são múltiplos!");
  } else {
    console.log("Os números: " + a + " e " + b + " não são múltiplos!");
  }



//Exercício 4

var a = prompt("Digite um número para verificação");

if (a>=0)
{   
    if (a%2 == 0)
    {
        console.log(" O número: "+ a + " é um número par e positivo!");
    }else if(a%2!=0)
    {
        console.log(" O número: "+ a + " é um número ímpar e positivo!");
    }
}else if (a<=0)
{
    if (a%2 == 0)
    {
        console.log(" O número: "+ a + " é um número par e negativo!");
    }else if(a%2!=0)
    {
        console.log(" O número: "+ a + " é um número ímpar e negativo!");
    }
}



//Exercício 5

var a = prompt("Digite o primeiro valor:");
var b = prompt("Digite o segundo valor:");

if (a==b)
{
    console.log("Os números: "+ a +" e " + b + " são iguais!");
}else if(a>b)
{
    console.log("Os números: "+ a +" e " + b + " são diferentes e o primeiro valor digitado: "+ a+ " é o maior!");
}
else
{
    console.log("Os números: "+ a +" e " + b + " são diferentes e o segundo valor digitado: "+ b + " é o maior!");
}



//Exercício 6

var a = prompt("Digite sua altura:");
var b = prompt("Digite seu sexo: masculino ou feminino");

if (b == "masculino")
{
    imc=(72.7*a)-58;
    console.log("Pessoa do sexo: "+b+" com IMC igual a: "+imc+".");
}else
{
    imc=(62.1*a)-44.7;
    console.log("Pessoa do sexo: "+b+" com IMC igual a: "+imc+".");
}



//Exercício 7

for (num=10; num>=1; num--)
{
    console.log("Os números em ordem descrescentes são: "+ num);
}



//Exercício 8

for (num=50;num>=1;num--)
{
    if (num%5==0){
        console.log("Múltiplo de 5: " + num);
    }
}



//Exercício 9

var valores = [];

for ( i = 0; i < 5; i++) {
  var valor = parseFloat(prompt("Digite um valor " + (i + 1) + ":"));
  valores.push(valor);
}

var maior = valores[0];
var vezes = 0;

for ( i = 1; i < valores.length; i++) {
  if (valores[i] > maior) {
    maior = valores[i];
  }
}
for ( i = 0; i < valores.length; i++) {
    if (valores[i] === maior) {
      vezes++;
    }
  }

console.log("O maior valor é: " + maior + " e ele apareceu:" + vezes + " vezes.");



//Exercício 10
function pares(N) {
    if (Number.isInteger(N) && N > 0) {
      for ( i = 0; i <= N; i++) {
        if (i % 2 == 0) {
          console.log(i);
        }else if(N<0)
        {
            console.log("O número deve ser inteiro e maior que zero!");
        }
      }
    } else {
      console.log("O número deve ser inteiro e maior que zero!");
    }
  }
  
var N = parseInt(prompt("Digite um valor inteiro e maior que zero:"));
var n2 = 1;
console.log(N);
console.log(n2);

pares(N);
  


//Exercício 11

console.log("Essa é a tabuada de 7: " );
for (num=1; num<=10; num++)
{
    console.log("7 x " + num + " = " + num*7);
}



//Exercício 12

var num = prompt("Digite um número entre 1 e 7");

if (num==1)
{
    console.log("O dia da semana que corresponde ao número: "+ num + " é: Domingo!");
}else if(num==2)
{
    console.log("O dia da semana que corresponde ao número: "+ num + " é: Segunda-feira!");
}else if(num==3)
{
    console.log("O dia da semana que corresponde ao número: "+ num + " é: Terça-feira!");
}else if(num==4)
{
    console.log("O dia da semana que corresponde ao número: "+ num + " é: Quarta-feira!");
}else if(num==5)
{
    console.log("O dia da semana que corresponde ao número: "+ num + " é: Quinta-feira!");
}else if(num==6)
{
    console.log("O dia da semana que corresponde ao número: "+ num + " é: Sexta-feira!");
}else if(num==6)
{
    console.log("O dia da semana que corresponde ao número: "+ num + " é: Sábado!");
}else
{
    console.log("Digite um valor entre 1 e 7!");
}



//Exercício 13

function soma(a) {
    somapares = 0;
    for(i=0; i<=a; i+=2){
        somapares += i;
    }
    return somapares;
}

function multi(a)
{
    multimpares = 1;
    for(i=1; i<=a; i+=2){
        multimpares *= i;
    }
    return multimpares;
}

var a = prompt("Digite um valor aleatório:");

var somapares= soma(a);
console.log("A soma de todos os números pares até " + a + " é:" + somapares);

var multimpares = multi(a);
console.log("A multiplicação de todos os números ímpares até " + a + " são: "+ multimpares);



//Exercício 14

// Criação de um array vazio para armazenar os valores
var valores = [];

// Obtendo os cinco valores do usuário
for ( i = 0; i < 5; i++) {
  var valor = parseFloat(prompt("Digite um valor " + (i + 1) + ":"));
  valores.push(valor);
}

// Inicializando as variáveis de máximo e mínimo com o primeiro valor
var maior = valores[0];
var menor = valores[0];

// Percorrendo o array de valores para encontrar o maior e o menor
for ( i = 1; i < valores.length; i++) {
  if (valores[i] > maior) {
    maior = valores[i];
  }
  if (valores[i] < menor) {
    menor = valores[i];
  }
}

// Imprimindo o maior e o menor valor
console.log("O maior valor é:", maior);
console.log("O menor valor é:", menor);



//Exercício 15

console.log("15 primeiros números da Série Fibonacci:");
function fibonacci(n) {
    if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      var f = [0, 1];
      for (var i = 2; i < n; i++) {
        var num = f[i - 1] + f[i - 2];
        f.push(num);
      }
      return f;
    }
  }
  
  var fibonacciSequence = fibonacci(15);
  console.log(fibonacciSequence);
  


