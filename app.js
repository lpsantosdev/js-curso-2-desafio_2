//Criar uma função que exibe "Olá, mundo!" no console.
function hello() {
    console.log("Hello, World!");
}
hello();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function showName(name) {
    console.log(`Hello, ${name}`);
}
showName("Leandro");

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numberDouble(number) {
    return number * 2;
  }
  
  let resultDouble = numberDouble(50);
  console.log(resultDouble);

//Criar uma função que recebe um número aleatorio como parâmetro e retorna o dobro desse número.
function takeNumber(){
return(parseInt(Math.random() *100 +1) * 2);
}

let finalNumber = takeNumber();
console.log(finalNumber);

//Criar uma função que recebe do usuario um número como parâmetro e retorna o dobro desse número.
let userNumber = prompt("Please, give me a number:");
function takeNumber2(){
    return(userNumber * 2);
    }
    
    let finalNumber2 = takeNumber2();
    console.log(finalNumber2);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function numbersAverage(number1, number2, number3) {
    return ((number1 + number2 + number3) / 3);
}
let varNumberAverage = numbersAverage(10,20,30);
console.log(`The average among 10, 20 and 30 is ${varNumberAverage}`);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
//let biggerNumber;
function compareNumber(newNumber1, newNumber2){
            if (newNumber1 > newNumber2)
            {
                return (newNumber1);
            } 
          else {
                return (newNumber2);
          }
            
    }
    let biggerNumber = compareNumber(955, 88);
    console.log(biggerNumber);   


//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numberTimesItself(number4){
return(number4 * number4);
}
let finalNumber4 = numberTimesItself(45);
console.log(finalNumber4);
