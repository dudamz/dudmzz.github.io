const resultado = document.querySelector('#resultado')
const celsius = document.querySelector('#celsius')

const converterTemperatura = () => {
  if (celsius.value !== '') {
    const fahrenheit = (celsius.value * 9/5) + 32
    resultado.innerHTML = `${celsius.value}°C é igual a ${fahrenheit.toFixed(2)}°F`
  } else {
    resultado.innerHTML = 'Por favor, insira a temperatura em Celsius'
  }
}
