function comparacao(num1, num2) {
  const saoIguais = num1 === num2;
  const soma = num1 + num2;
  const retornoIguais = `Os numeros ${num1} e ${num2} são iguais.`;
  const retornoDiferentes = `Os numeros ${num1} e ${num2} não são iguais.`;
  const retornoSomaMenorDez = `A soma dos números é: ${soma} , que é menor que 10`;
  const retornoIgualDez = `A soma dos números é: ${soma} , que é igual 10`;
  const retornoSomaEntreDezEvinte = `A soma dos número é: ${soma} , que é maior que 10 e menor que 20`;
  const retornoIgualVinte = `A soma dos número é: ${soma} , que é igual a 20`;
  const retornoSomaMaiorVinte = `A soma dos números é: ${soma} , que é maior que 20`;

  if (saoIguais && soma < 10) {
    return `${retornoIguais} ${retornoSomaMenorDez}`;
  }
    else if (saoIguais && soma <= 10){
      return `${retornoIguais} ${retornoIgualDez}`;
    }
  if (saoIguais && soma > 10 && soma < 20) {
    return `${retornoIguais} ${retornoSomaEntreDezEvinte}`;
  }
  else if(saoIguais && soma > 10 && soma <= 20){
    return `${retornoIguais} ${retornoIgualVinte}`
  }
  if (saoIguais && soma > 20) {
    return `${retornoIguais} ${retornoSomaMaiorVinte}`;
  }
  if (!saoIguais && soma < 10) {
    return `${retornoDiferentes} ${retornoSomaMenorDez}`;
  }
  else if (!saoIguais && soma <= 10) {
    return `${retornoDiferentes} ${retornoIgualDez}`;
  }
  if (!saoIguais && soma > 10 && soma < 20) {
    return `${retornoDiferentes} ${retornoSomaEntreDezEvinte}`;
  }
  else if (!saoIguais && soma > 10 && soma <= 20) {
    return `${retornoDiferentes} ${retornoIgualVinte}`;
  }
  if (!saoIguais && soma > 20) {
    return `${retornoDiferentes} ${retornoSomaMaiorVinte}`;
  }
}

console.log(comparacao(5, 5));
