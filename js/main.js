
let respuestasJson;
let preguntaActual = 0;

// Llamada para cargar el archivo JSON
fetch('./js/preguntas.json')
  .then(response => response.json())
  .then(data => {
    respuestasJson = data;
    hacerPreguntas();
  })
  .catch(error => console.error('No se encontró el archivo Json', error));

function hacerPreguntas() {
  const containerPreguntas = document.getElementById('container-preguntas');

  if (preguntaActual < respuestasJson.preguntas.length) {
    const pregunta = respuestasJson.preguntas[preguntaActual];

    containerPreguntas.innerHTML = `
      <p class="pregunta">${pregunta.enunciado}</p>
      <input id="respuesta" class="input"type="text" placeholder="Escribe tu respuesta aquí">
      <button class="input-btn" onclick="validarPreguntas()">Enviar respuesta</button>
    `;
  } else {
    containerPreguntas.innerHTML = `
      <p class="pregunta">¡Felicidades! ¡Contestaste todas las preguntas!</p>
    `; 

    location.reload()
  }
}

function validarPreguntas() {
  const preguntaContestada = document.getElementById('respuesta').value;
  const preguntaAcertada = respuestasJson.preguntas[preguntaActual].respuesta;

  if (preguntaContestada.toLowerCase() === preguntaAcertada.toLowerCase()) {
    alert('Contestaste bien, pasa a la siguiente pregunta.');
    preguntaActual++;
    hacerPreguntas();
  } else {
    alert('Tu respuesta es incorrecta.SOS UN IDIOTA LAS PREGUNTAS NO PUEDEN SER MAS PELOTUDAS.');
  }
}
