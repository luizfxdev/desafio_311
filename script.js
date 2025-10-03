// Elementos do DOM
const coordinatesInput = document.getElementById('coordinates-input');
const calculateBtn = document.getElementById('calculate-btn');
const backBtn = document.getElementById('back-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');
const backgroundAudio = document.getElementById('background-audio');

// Controles de Áudio
playAudioBtn.addEventListener('click', () => {
  backgroundAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  backgroundAudio.pause();
});

// Função para verificar se um número é primo
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Função para parsear a entrada do usuário
function parseCoordinates(input) {
  try {
    // Remove espaços extras
    const cleanInput = input.trim();

    if (!cleanInput) {
      throw new Error('Por favor, insira as coordenadas!');
    }

    // Substitui parênteses por colchetes para criar arrays válidos
    const jsonString = cleanInput.replace(/\(/g, '[').replace(/\)/g, ']');

    // Parse do JSON
    const coordinates = JSON.parse(jsonString);

    // Valida se é um array
    if (!Array.isArray(coordinates)) {
      throw new Error('Entrada deve ser uma lista de tuplas');
    }

    // Valida cada tupla
    for (let coord of coordinates) {
      if (!Array.isArray(coord) || coord.length !== 2) {
        throw new Error('Cada coordenada deve ser uma tupla com 2 elementos');
      }
      if (typeof coord[0] !== 'number' || typeof coord[1] !== 'number') {
        throw new Error('As coordenadas devem conter apenas números');
      }
    }

    return coordinates;
  } catch (error) {
    throw new Error('Formato inválido! Use: [(x1, y1), (x2, y2), ...]');
  }
}

// Função principal para encontrar as Esmeraldas do Caos
function findChaosEmeralds(coordinates) {
  const emeralds = [];
  const calculations = [];

  coordinates.forEach((coord, index) => {
    const [x, y] = coord;
    const sum = x + y;
    const primeCheck = isPrime(sum);

    // Armazena o cálculo detalhado
    calculations.push({
      coordinate: coord,
      x: x,
      y: y,
      sum: sum,
      isPrime: primeCheck
    });

    // Se a soma é prima, adiciona às esmeraldas encontradas
    if (primeCheck) {
      emeralds.push(coord);
    }
  });

  return { emeralds, calculations };
}

// Função para exibir o resultado detalhado
function displayResult(coordinates) {
  try {
    const parsedCoords = parseCoordinates(coordinates);
    const { emeralds, calculations } = findChaosEmeralds(parsedCoords);

    let html = '<h3 style="color: #00d4ff; margin-bottom: 15px;">🔍 Análise Detalhada:</h3>';

    // Exibe cada cálculo
    calculations.forEach((calc, index) => {
      html += `
                <div class="calculation-step">
                    <strong>Coordenada ${index + 1}:</strong> 
                    <span class="coordinate">(${calc.x}, ${calc.y})</span>
                    <br>
                    <strong>Soma:</strong> 
                    <span class="sum">${calc.x} + ${calc.y} = ${calc.sum}</span>
                    <br>
                    <strong>É primo?</strong> 
                    <span class="${calc.isPrime ? 'prime-yes' : 'prime-no'}">
                        ${calc.isPrime ? '✓ SIM' : '✗ NÃO'}
                    </span>
                    ${calc.isPrime ? ' <strong style="color: #00ff88;">💎 Esmeralda encontrada!</strong>' : ''}
                </div>
            `;
    });

    // Exibe o resultado final
    html += `
            <div class="final-result">
                <div class="final-result-title">⚡ Esmeraldas do Caos Encontradas:</div>
                <div class="final-result-value">${JSON.stringify(emeralds)}</div>
                <p style="margin-top: 10px; color: #a8e6ff;">
                    Total: ${emeralds.length} esmeralda${emeralds.length !== 1 ? 's' : ''}
                </p>
            </div>
        `;

    resultContent.innerHTML = html;
    resultSection.classList.add('active');
  } catch (error) {
    resultContent.innerHTML = `
            <div class="error-message">
                <strong>⚠️ Erro:</strong><br>
                ${error.message}
            </div>
        `;
    resultSection.classList.add('active');
  }
}

// Event Listeners dos Botões
calculateBtn.addEventListener('click', () => {
  const input = coordinatesInput.value;
  displayResult(input);
});

backBtn.addEventListener('click', () => {
  resultSection.classList.remove('active');
  coordinatesInput.value = '';
  coordinatesInput.focus();
});

// Permite calcular pressionando Enter
coordinatesInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    calculateBtn.click();
  }
});
