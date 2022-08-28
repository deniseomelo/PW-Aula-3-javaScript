/*  SENAC-TADS-Prrogramação Web
 Exemplo de função anonima   */

 let valor1 = 3;
 let valor2 = 6
 //Aqui estamos a definir a arrow function
 let somaDoValores = (parcela1, parcela2) => {
    let resultado = parcela1 + parcela2;
    return resultado;
 };
 //vamos chamar a função e mostar o resultado
 console.logo(`O resultado da soma de ${valor1}
  + ${valor2} = ${somaDoValores(valor1, valor)} `);
