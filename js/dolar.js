const resultado = document.querySelector('#resultado')
const dolar = document.querySelector('#dolar')

const converterDolar = () => {
  if (dolar.value !== '') {
    const valorDolar = parseFloat(dolar.value)
    const taxaCambio = 5.80
    const real = valorDolar * taxaCambio
    resultado.innerHTML = `${valorDolar.toFixed(2)} dolares é igual a R$ ${real.toFixed(2)} reais`
  } else {
    resultado.innerHTML = 'Por favor, insira um valor em dólares'
  }
}
