document.addEventListener("DOMContentLoaded", () => {

  // Seleccionamos todos los elementos con la clase 'variable'
  const elementos = document.querySelectorAll('.variable');

  // Para cada elemento con clase 'variable'
  elementos.forEach((elemento) => {
    // Descomponemos el texto en caracteres usando el operador de propagación
    const letras = [...elemento.textContent];

    // Limpiamos el contenido del elemento para empezar de cero
    elemento.innerHTML = '';

    // Calculamos los valores de font-weight
    const maxWeight = 900;
    const minWeight = 100;
    const step = (maxWeight - minWeight) / Math.floor(letras.length / 2);

    // Iteramos sobre las letras y aplicamos los pesos decrecientes desde los extremos hacia el centro
    letras.forEach((letra, index) => {
      const span = document.createElement('span');
      span.textContent = letra;

      // Calculamos el font-weight desde los extremos hacia el centro
      const mitad = Math.floor(letras.length / 2);

      let weight;
      if (index <= mitad) {
        // Letras del principio hacia la mitad
        weight = Math.round(maxWeight - step * index);
      } else {
        // Letras de la mitad hacia el final
        weight = Math.round(maxWeight - step * (letras.length - 1 - index));
      }

      // Asignamos el estilo del font-weight
      span.style.fontWeight = weight;

      // Insertamos el span dentro del elemento
      elemento.appendChild(span);
    });
  });





})