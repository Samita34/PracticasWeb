// Obtener el elemento por su ID
const colorChangeElement = document.getElementById('color-change');

// Función para cambiar el color al pasar el ratón
function changeColorOnMouseOver() {
  const randomColor = getRandomColor();
  colorChangeElement.style.backgroundColor = randomColor;
}

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Asignar el evento al pasar el ratón
colorChangeElement.addEventListener('mouseover', changeColorOnMouseOver);
