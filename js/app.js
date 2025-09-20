/*
  © 2025 Robson Cassiano — MIT License
  This file is part of a project licensed under the MIT License. See the LICENSE file at the repository root for full text.
  Este arquivo faz parte de um projeto licenciado sob a Licença MIT. Consulte o arquivo LICENSE na raiz do repositório para o texto completo.
*/
// --- LÓGICA DE INTERNACIONALIZAÇÃO (I18N) ---
const translations = {
  'pt': {
    title: 'Codificador de Texto Ternário Balanceado',
    theoryTitle: 'Teoria',
    theoryText: 'Neste dispositivo, 3 bits são convertidos em 2 trits (dígitos ternários). Como 3 bits representam 8 valores ($2^3$) e 2 trits representam 9 ($3^2$), há uma perda de 11,11% da capacidade.<br><br>No entanto, isso reduz o número de códigos em 1,5 vezes, compactando os dados. A conversão usa um sistema ternário balanceado com os símbolos <code class="bg-slate-200 px-1 rounded">-</code>, <code class="bg-slate-200 px-1 rounded">0</code>, e <code class="bg-slate-200 px-1 rounded">+</code>.',
    encodeTitle: 'Codificar: Texto → Ternário',
    inputTextLabel: 'Digite o texto',
    inputTextPlaceholder: 'Escreva algo aqui...',
    encodeButton: 'Codificar',
    binaryLabel: 'Binário',
    ternaryLabel: 'Ternário',
    decodeTitle: 'Decodificar: Ternário → Texto',
    ternaryInputLabel: 'Digite o código ternário',
    ternaryInputPlaceholder: 'Cole o código ternário aqui...',
    decodeButton: 'Decodificar',
    decodedTextLabel: 'Texto Decodificado',
    errorEvenLength: 'O comprimento do código ternário deve ser par.',
    errorInvalidBlock: 'Bloco ternário inválido encontrado: ',
    footerLicense: '&copy; Robson Cassiano. Lançado sob a licença MIT.',
    footerMotto: 'Vida Longa e Próspera 🖖🏻',
    explainTheoryButton: 'Explicar de Outra Forma ✨',
    resetTheoryButton: 'Original',
    generatingExplanation: 'A gerar uma nova explicação...',
    generateRiddleButton: 'Gerar Charada ✨',
    riddleLabel: 'Charada Gerada',
    generatingRiddle: 'A gerar charada...',
    explainTheoryPrompt: "Explique o seguinte conceito de uma forma simples e com uma analogia. O conceito é: '{theory}'",
    generateRiddlePrompt: "Gere uma charada curta e inteligente em português cujo resultado seja o seguinte texto: '{text}'. A charada não deve conter a resposta.",
    apiError: 'Ocorreu um erro ao comunicar com a API.',
    safetyError: 'O conteúdo não pôde ser gerado devido às políticas de segurança.',
    efficiencyTitle: 'Eficiência do Ternário Balanceado',
    efficiencyText: 'Teoricamente, o sistema ternário é mais eficiente. Por ser a base inteira mais próxima do número de Euler ($e \\approx 2.718$), ele oferece a melhor "economia de base", necessitando de menos componentes para representar números. Além disso, operações como negação e arredondamento são computacionalmente mais simples do que em binário.',
    clearButton: 'Limpar Tudo',
    detailedExplanationTitle: 'Ver Explicação Detalhada',
    detailedExplanationContent: `
                    <p>Vamos quebrar este conceito complexo em partes mais simples e usar uma analogia para ilustrar.</p>
                    <hr class="my-4">
                    <h3 class="text-lg font-semibold text-slate-700">O Conceito: Conversão de 3 Bits para 2 Trits</h3>
                    <p>Imagine que estamos lidando com a forma como um dispositivo armazena ou processa informações, mas em vez de usar apenas o sistema binário (com dois estados, como "ligado" ou "desligado"), ele também pode usar um sistema ternário (com três estados, como "desligado", "médio" ou "forte").</p>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">1. Bits e Trits: Os Blocos de Construção da Informação</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Bit (dígito binário):</strong> Pense nele como uma <strong>lâmpada que só tem dois estados: LIGADA (1) ou DESLIGADA (0)</strong>. Cada bit pode representar uma escolha entre duas opções.</li>
                        <li><strong>Trit (dígito ternário):</strong> Pense nele como uma <strong>lâmpada mais avançada que tem três estados: DESLIGADA (0), FRACA (+) ou FORTE (-)</strong>. Cada trit pode representar uma escolha entre três opções.</li>
                        <li><em>Nota sobre -, 0, +:</em> Neste sistema específico, em vez de usar 0, 1, 2, eles usam -, 0, + para representar os três estados. É apenas uma forma diferente de "nomear" as opções, geralmente para simplificar alguns cálculos internos.</li>
                    </ul>
                    <hr class="my-4">
                    <h3 class="text-lg font-semibold text-slate-700">A Analogia: Cartões de Mensagem vs. Discos de Código</h3>
                    <p>Imagine que você tem um conjunto de <strong>8 mensagens secretas diferentes</strong> que você quer enviar ou armazenar.</p>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">Como representar essas 8 mensagens usando bits?</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Você precisaria de <strong>3 lâmpadas (bits)</strong>. Cada lâmpada pode estar LIGADA ou DESLIGADA.</li>
                        <li>Com 3 lâmpadas, você pode criar $2^3 = 2 \\times 2 \\times 2 = <strong>8 combinações únicas</strong>$ (por exemplo: DESLIGADA-DESLIGADA-DESLIGADA, LIGADA-DESLIGADA-DESLIGADA, etc.). Cada uma dessas 8 combinações representaria uma das suas 8 mensagens.</li>
                        <li><strong>Sua representação da mensagem:</strong> Seria algo como "001" ou "110".</li>
                    </ul>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">Como podemos representar essas mensagens usando trits?</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Agora, vamos usar as <strong>lâmpadas mais avançadas (trits)</strong>, que têm 3 estados cada.</li>
                        <li>Se você usasse <strong>2 lâmpadas avançadas (2 trits)</strong>, cada uma podendo ser DESLIGADA, FRACA ou FORTE.</li>
                        <li>Com 2 lâmpadas avançadas, você pode criar $3^2 = 3 \\times 3 = <strong>9 combinações únicas</strong>$ (por exemplo: DESLIGADA-DESLIGADA, FRACA-DESLIGADA, FORTE-DESLIGADA, etc.). Cada uma dessas 9 combinações pode ser uma forma de representar algo.</li>
                        <li><strong>Sua representação da mensagem:</strong> Seria algo como "-0" ou "+-".</li>
                    </ul>
                    <hr class="my-4">
                    <h3 class="text-lg font-semibold text-slate-700">Explicando os Pontos Específicos do Conceito:</h3>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">1. "3 bits representam 8 valores ($2^3$) e 2 trits representam 9 ($3^2$)"</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Analogia:</strong> Você tem 8 mensagens secretas que precisam ser enviadas.</li>
                        <li>Para codificá-las com bits, você precisa de <strong>3 cartões</strong> (onde cada cartão pode ser "virado para cima" ou "virado para baixo"). Esses 3 cartões te dão exatamente 8 formas diferentes de arranjá-los, uma para cada mensagem.</li>
                        <li>Para codificá-las com trits, você usa <strong>2 discos</strong> (onde cada disco pode ser girado para 3 diferentes posições). Esses 2 discos te dão 9 formas diferentes de girá-los.</li>
                    </ul>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">2. "há uma perda de 11,11% da capacidade."</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Analogia:</strong> Você tem 8 mensagens para codificar. O sistema de 2 trits oferece 9 combinações possíveis.</li>
                        <li>Você vai usar 8 dessas 9 combinações para suas mensagens. Uma combinação (uma "posição" no disco) vai ficar <strong>sempre vazia/sem uso</strong>.</li>
                        <li>Essa "vaga extra" é a "perda de capacidade". Não significa que você perdeu alguma mensagem ou dado! Significa apenas que o sistema de 2 trits tem um pouco mais de "espaço" do que o estritamente necessário para as 8 mensagens.</li>
                        <li>(1 vaga não utilizada de 9 = 1/9 = 0.1111... = 11.11%).</li>
                    </ul>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">3. "No entanto, isso reduz o número de códigos em 1,5 vezes, compactando os dados."</h4>
                     <ul class="list-disc list-inside space-y-1">
                        <li><strong>Analogia:</strong> Esta é a grande vantagem!</li>
                        <li>Para enviar ou armazenar uma das suas 8 mensagens usando bits, você precisava de <strong>3 cartões (ou 3 lâmpadas físicas)</strong>.</li>
                        <li>Para enviar ou armazenar a <em>mesma</em> mensagem usando trits, você agora precisa de <strong>apenas 2 discos (ou 2 lâmpadas físicas avançadas)</strong>.</li>
                        <li>Você foi de precisar de <strong>3 elementos físicos</strong> (bits) para precisar de <strong>2 elementos físicos</strong> (trits).</li>
                        <li>Isso significa que você usou 1,5 vezes <em>menos</em> elementos (3 dividido por 2 = 1,5). Suas mensagens estão mais "compactas", ocupando menos "espaço" ou exigindo menos "componentes" no dispositivo. Você economizou um terço dos seus componentes!</li>
                    </ul>
                     <h4 class="text-md font-semibold text-slate-700 mt-2">4. "A conversão usa um sistema ternário balanceado com os símbolos -, 0, e +"</h4>
                     <ul class="list-disc list-inside space-y-1">
                        <li><strong>Analogia:</strong> Em vez de chamar as posições do disco de "posição 0, posição 1, posição 2", este dispositivo escolheu chamar de "negativo (-), zero (0), e positivo (+)".</li>
                        <li>É como se você tivesse 3 botões em um elevador, mas em vez de "Térreo, 1º Andar, 2º Andar", eles chamassem de "Subsolo, Térreo, Cobertura". A função é a mesma, só os nomes mudam, muitas vezes para facilitar certas operações ou representar números negativos de forma mais natural.</li>
                    </ul>
                    <hr class="my-4">
                    <h3 class="text-lg font-semibold text-slate-700">Em Resumo com a Analogia:</h3>
                    <p>Você tem <strong>8 mensagens únicas</strong> para enviar.</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Com bits:</strong> Você usa 3 pequenos cartões (que só podem estar virados para cima ou para baixo) para codificar cada mensagem. Você precisa de 3 cartões por mensagem.</li>
                        <li><strong>Com trits:</strong> Você descobre uma nova tecnologia de 2 discos (cada disco pode ser girado para 3 posições). Esses 2 discos podem, na verdade, representar até 9 coisas diferentes.</li>
                        <li>Você usa 8 dessas 9 posições para suas 8 mensagens. Uma posição dos discos ficará sempre sem uso (a "perda de capacidade").</li>
                        <li><strong>A grande sacada:</strong> Em vez de usar 3 cartões, você agora usa apenas 2 discos para a <em>mesma mensagem</em>. Você reduziu a quantidade de "hardware" (cartões/discos) por mensagem em 1,5 vezes! E os estados dos discos são chamados de -, 0, e +.</li>
                    </ul>
                    <p class="mt-2">Então, o dispositivo está trocando uma pequena ineficiência na <em>capacidade total</em> (uma vaga de estacionamento sobrando) por uma grande eficiência na <em>quantidade física de componentes</em> necessários para representar a informação (economizando um terço dos componentes).</p>
                `
  },
  'en': {
    title: 'Balanced Ternary Text Encoder',
    theoryTitle: 'Theory',
    theoryText: 'In this device, 3 bits are converted into 2 trits (ternary digits). As 3 bits represent 8 values ($2^3$) and 2 trits represent 9 ($3^2$), there is a loss of 11.11% of the capacity.<br><br>However, this reduces the number of codes by 1.5 times, compacting the data. The conversion uses a balanced ternary system with the symbols <code class="bg-slate-200 px-1 rounded">-</code>, <code class="bg-slate-200 px-1 rounded">0</code>, and <code class="bg-slate-200 px-1 rounded">+</code>.',
    encodeTitle: 'Encode: Text → Ternary',
    inputTextLabel: 'Enter text',
    inputTextPlaceholder: 'Write something here...',
    encodeButton: 'Encode',
    binaryLabel: 'Binary',
    ternaryLabel: 'Ternary',
    decodeTitle: 'Decode: Ternary → Text',
    ternaryInputLabel: 'Enter ternary code',
    ternaryInputPlaceholder: 'Paste the ternary code here...',
    decodeButton: 'Decode',
    decodedTextLabel: 'Decoded Text',
    errorEvenLength: 'The length of the ternary code must be even.',
    errorInvalidBlock: 'Invalid ternary block found: ',
    footerLicense: '&copy; Robson Cassiano. Released under the MIT license.',
    footerMotto: 'Live Long and Prosper 🖖🏻',
    explainTheoryButton: 'Explain Differently ✨',
    resetTheoryButton: 'Original',
    generatingExplanation: 'Generating new explanation...',
    generateRiddleButton: 'Generate Riddle ✨',
    riddleLabel: 'Generated Riddle',
    generatingRiddle: 'Generating riddle...',
    explainTheoryPrompt: "Explain the following concept in a simple way with an analogy. The concept is: '{theory}'",
    generateRiddlePrompt: "Generate a short, clever riddle in English whose answer is the following text: '{text}'. The riddle should not contain the answer.",
    apiError: 'An error occurred while communicating with the API.',
    safetyError: 'Content could not be generated due to safety policies.',
    efficiencyTitle: 'Efficiency of Balanced Ternary',
    efficiencyText: `Theoretically, the ternary system is more efficient. As the integer base closest to Euler's number ($e \\approx 2.718$), it offers the best 'radix economy,' requiring fewer components to represent numbers. Additionally, operations like negation and rounding are computationally simpler than in binary.`,
    clearButton: 'Clear All',
    detailedExplanationTitle: 'View Detailed Explanation',
    detailedExplanationContent: `
                    <p>Let's break this complex concept into simpler parts and use an analogy to illustrate.</p>
                    <hr class="my-4">
                    <h3 class="text-lg font-semibold text-slate-700">The Concept: 3-Bit to 2-Trit Conversion</h3>
                    <p>Imagine we're dealing with how a device stores or processes information, but instead of just using the binary system (with two states, like "on" or "off"), it can also use a ternary system (with three states, like "off," "medium," or "strong").</p>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">1. Bits and Trits: The Building Blocks of Information</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Bit (binary digit):</strong> Think of it as a <strong>light bulb with only two states: ON (1) or OFF (0)</strong>. Each bit can represent a choice between two options.</li>
                        <li><strong>Trit (ternary digit):</strong> Think of it as a more <strong>advanced light bulb with three states: OFF (0), DIM (+) or BRIGHT (-)</strong>. Each trit can represent a choice between three options.</li>
                        <li><em>Note on -, 0, +:</em> In this specific system, instead of using 0, 1, 2, they use -, 0, + to represent the three states. It's just a different way of "naming" the options, often to simplify some internal calculations.</li>
                    </ul>
                    <hr class="my-4">
                    <h3 class="text-lg font-semibold text-slate-700">The Analogy: Message Cards vs. Code Disks</h3>
                    <p>Imagine you have a set of <strong>8 different secret messages</strong> you want to send or store.</p>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">How to represent these 8 messages using bits?</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li>You would need <strong>3 light bulbs (bits)</strong>. Each bulb can be ON or OFF.</li>
                        <li>With 3 bulbs, you can create $2^3 = 2 \\times 2 \\times 2 = <strong>8 unique combinations</strong>$ (e.g., OFF-OFF-OFF, ON-OFF-OFF, etc.). Each of these 8 combinations would represent one of your 8 messages.</li>
                        <li><strong>Your message representation:</strong> Would be something like "001" or "110".</li>
                    </ul>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">How can we represent these messages using trits?</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Now, let's use the more <strong>advanced light bulbs (trits)</strong>, which have 3 states each.</li>
                        <li>If you used <strong>2 advanced bulbs (2 trits)</strong>, each could be OFF, DIM, or BRIGHT.</li>
                        <li>With 2 advanced bulbs, you can create $3^2 = 3 \\times 3 = <strong>9 unique combinations</strong>$ (e.g., OFF-OFF, DIM-OFF, BRIGHT-OFF, etc.). Each of these 9 combinations can be a way to represent something.</li>
                        <li><strong>Your message representation:</strong> Would be something like "-0" or "+-".</li>
                    </ul>
                    <hr class="my-4">
                    <h3 class="text-lg font-semibold text-slate-700">Explaining the Specific Points of the Concept:</h3>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">1. "3 bits represent 8 values ($2^3$) and 2 trits represent 9 ($3^2$)"</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Analogy:</strong> You have 8 secret messages that need to be sent.</li>
                        <li>To encode them with bits, you need <strong>3 cards</strong> (where each card can be "face up" or "face down"). These 3 cards give you exactly 8 different ways to arrange them, one for each message.</li>
                        <li>To encode them with trits, you use <strong>2 disks</strong> (where each disk can be turned to 3 different positions). These 2 disks give you 9 different ways to turn them.</li>
                    </ul>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">2. "there is a loss of 11.11% of the capacity."</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Analogy:</strong> You have 8 messages to encode. The 2-trit system offers 9 possible combinations.</li>
                        <li>You will use 8 of these 9 combinations for your messages. One combination (one "position" on the disk) will always be <strong>empty/unused</strong>.</li>
                        <li>This "extra slot" is the "loss of capacity." It doesn't mean you lost any message or data! It just means the 2-trit system has a little more "space" than strictly necessary for the 8 messages.</li>
                        <li>(1 unused slot out of 9 = 1/9 = 0.1111... = 11.11%).</li>
                    </ul>
                    <h4 class="text-md font-semibold text-slate-700 mt-2">3. "However, this reduces the number of codes by 1.5 times, compacting the data."</h4>
                     <ul class="list-disc list-inside space-y-1">
                        <li><strong>Analogy:</strong> This is the big advantage!</li>
                        <li>To send or store one of your 8 messages using bits, you needed <strong>3 cards (or 3 physical light bulbs)</strong>.</li>
                        <li>To send or store the <em>same</em> message using trits, you now need <strong>only 2 disks (or 2 advanced physical light bulbs)</strong>.</li>
                        <li>You went from needing <strong>3 physical elements</strong> (bits) to needing <strong>2 physical elements</strong> (trits).</li>
                        <li>This means you used 1.5 times <em>fewer</em> elements (3 divided by 2 = 1.5). Your messages are more "compact," taking up less "space" or requiring fewer "components" in the device. You saved a third of your components!</li>
                    </ul>
                     <h4 class="text-md font-semibold text-slate-700 mt-2">4. "The conversion uses a balanced ternary system with the symbols -, 0, and +"</h4>
                     <ul class="list-disc list-inside space-y-1">
                        <li><strong>Analogy:</strong> Instead of calling the disk positions "position 0, position 1, position 2," this device chose to call them "negative (-), zero (0), and positive (+)".</li>
                        <li>It's like having 3 buttons in an elevator, but instead of "Floor G, Floor 1, Floor 2," they're called "Basement, Ground, Penthouse." The function is the same, only the names change, often to make certain operations or representing negative numbers more natural.</li>
                    </ul>
                    <hr class="my-4">
                    <h3 class="text-lg font-semibold text-slate-700">In Summary with the Analogy:</h3>
                    <p>You have <strong>8 unique messages</strong> to send.</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>With bits:</strong> You use 3 small cards (which can only be face up or face down) to encode each message. You need 3 cards per message.</li>
                        <li><strong>With trits:</strong> You discover a new technology of 2 disks (each disk can be turned to 3 positions). These 2 disks can actually represent up to 9 different things.</li>
                        <li>You use 8 of these 9 positions for your 8 messages. One disk position will always be unused (the "loss of capacity").</li>
                        <li><strong>The big takeaway:</strong> Instead of using 3 cards, you now use only 2 disks for the <em>same message</em>. You've reduced the amount of "hardware" (cards/disks) per message by 1.5 times! And the disk states are called -, 0, and +.</li>
                    </ul>
                    <p class="mt-2">So, the device is trading a small inefficiency in <em>total capacity</em> (one leftover parking space) for a large efficiency in the <em>physical quantity of components</em> needed to represent the information (saving a third of the components).</p>
                `
  }
};

const originalTheory = {
  'pt': translations.pt.theoryText,
  'en': translations.en.theoryText
};

let currentLanguage = 'pt';
const langSwitcher = document.getElementById('lang-switcher');
const theoryContent = document.getElementById('theoryContent');

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(elem => {
    const key = elem.dataset.key;
    if (translations[lang][key]) {
      elem.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-key-placeholder]').forEach(elem => {
    const key = elem.dataset.keyPlaceholder;
    if (translations[lang][key]) {
      elem.placeholder = translations[lang][key];
    }
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  theoryContent.innerHTML = originalTheory[lang];
  document.getElementById('detailedExplanationContent').innerHTML = translations[lang]['detailedExplanationContent'];
  document.getElementById('resetTheoryButton').classList.add('hidden');

  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [ {left: "$", right: "$", display: false} ]
    });
  }
}

langSwitcher.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
  setLanguage(currentLanguage);
});

// --- LÓGICA DA APLICAÇÃO ---

const inputText = document.getElementById('inputText');
const encodeButton = document.getElementById('encodeButton');
const encodeResults = document.getElementById('encodeResults');
const binaryOutput = document.getElementById('binaryOutput');
const ternaryOutput = document.getElementById('ternaryOutput');
const binaryCount = document.getElementById('binaryCount');
const ternaryCount = document.getElementById('ternaryCount');
const ternaryInput = document.getElementById('ternaryInput');
const decodeButton = document.getElementById('decodeButton');
const decodeResult = document.getElementById('decodeResult');
const decodedTextOutput = document.getElementById('decodedTextOutput');
const decodeError = document.getElementById('decodeError');
const clearButton = document.getElementById('clearButton');
const toggleExplanationButton = document.getElementById('toggleExplanationButton');
const detailedExplanationContentWrapper = document.getElementById('detailedExplanationContentWrapper');
const explanationIcon = document.getElementById('explanationIcon');


// --- ELEMENTOS GEMINI ---
const explainTheoryButton = document.getElementById('explainTheoryButton');
const resetTheoryButton = document.getElementById('resetTheoryButton');
const theoryLoader = document.getElementById('theoryLoader');
const geminiFeatures = document.getElementById('geminiFeatures');
const generateRiddleButton = document.getElementById('generateRiddleButton');
const riddleResult = document.getElementById('riddleResult');
const riddleLoader = document.getElementById('riddleLoader');
const riddleOutput = document.getElementById('riddleOutput');

const BINARY_TO_TERNARY_MAP = {
  '000': '-0', '001': '-+', '010': '0-', '011': '00',
  '100': '0+', '101': '+-', '110': '+0', '111': '++'
};
const TERNARY_TO_BINARY_MAP = Object.fromEntries(Object.entries(BINARY_TO_TERNARY_MAP).map(([k, v]) => [v, k]));

function stringToBinary(str) {
  return str.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join('');
}

function binaryToTernary(binaryStr) {
  let paddedBinary = binaryStr;
  while (paddedBinary.length % 3 !== 0) {
    paddedBinary += '0';
  }
  let ternaryStr = '';
  for (let i = 0; i < paddedBinary.length; i += 3) {
    const chunk = paddedBinary.substring(i, i + 3);
    ternaryStr += BINARY_TO_TERNARY_MAP[chunk];
  }
  return ternaryStr;
}

encodeButton.addEventListener('click', () => {
  const text = inputText.value;
  if (!text) {
    encodeResults.classList.add('hidden');
    geminiFeatures.classList.add('hidden');
    return;
  }
  const binaryStr = stringToBinary(text);
  const ternaryStr = binaryToTernary(binaryStr);
  binaryCount.textContent = `(${binaryStr.length} bits)`;
  binaryOutput.textContent = formatWithSpaces(binaryStr, 8);
  ternaryCount.textContent = `(${ternaryStr.length} trits)`;
  ternaryOutput.textContent = formatWithSpaces(ternaryStr, 2);
  encodeResults.classList.remove('hidden');
  geminiFeatures.classList.remove('hidden');
  riddleResult.classList.add('hidden');
});

function ternaryToBinary(ternaryStr) {
  let binaryStr = '';
  const cleanTernary = ternaryStr.replace(/\s/g, '');
  if (cleanTernary.length % 2 !== 0) {
    return { error: translations[currentLanguage].errorEvenLength };
  }
  for (let i = 0; i < cleanTernary.length; i += 2) {
    const chunk = cleanTernary.substring(i, i + 2);
    if (TERNARY_TO_BINARY_MAP[chunk]) {
      binaryStr += TERNARY_TO_BINARY_MAP[chunk];
    } else {
      return { error: `${translations[currentLanguage].errorInvalidBlock}"${chunk}"` };
    }
  }
  return { result: binaryStr };
}

function binaryToString(binaryStr) {
  let text = '';
  const byteLength = Math.floor(binaryStr.length / 8);
  for (let i = 0; i < byteLength; i++) {
    const byte = binaryStr.substring(i * 8, (i + 1) * 8);
    text += String.fromCharCode(parseInt(byte, 2));
  }
  return text;
}

decodeButton.addEventListener('click', () => {
  const text = ternaryInput.value;
  decodeError.textContent = '';
  if (!text) {
    decodeResult.classList.add('hidden');
    return;
  }
  const conversion = ternaryToBinary(text);
  if (conversion.error) {
    decodedTextOutput.textContent = '';
    decodeError.textContent = conversion.error;
  } else {
    const decodedText = binaryToString(conversion.result);
    decodedTextOutput.textContent = decodedText;
  }
  decodeResult.classList.remove('hidden');
});

clearButton.addEventListener('click', () => {
  inputText.value = '';
  ternaryInput.value = '';

  encodeResults.classList.add('hidden');
  decodeResult.classList.add('hidden');
  geminiFeatures.classList.add('hidden');
  riddleResult.classList.add('hidden');
  detailedExplanationContentWrapper.classList.add('hidden');
  explanationIcon.classList.remove('rotate-180');


  binaryOutput.textContent = '';
  ternaryOutput.textContent = '';
  binaryCount.textContent = '';
  ternaryCount.textContent = '';
  decodedTextOutput.textContent = '';
  decodeError.textContent = '';
  riddleOutput.textContent = '';
});

toggleExplanationButton.addEventListener('click', () => {
  detailedExplanationContentWrapper.classList.toggle('hidden');
  explanationIcon.classList.toggle('rotate-180');
});


// --- FUNÇÕES GEMINI ---

async function callGemini(prompt, retries = 3, delay = 1000) {
  const apiKey = ""; // Deixar como está
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
  const payload = { contents: [{ parts: [{ text: prompt }] }] };

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();
      const candidate = result.candidates?.[0];

      if (candidate?.content?.parts?.[0]?.text) {
        return candidate.content.parts[0].text;
      } else {
        console.warn('Resposta da API inesperada ou conteúdo em falta:', result);
        return candidate?.finishReason === 'SAFETY'
          ? `[${translations[currentLanguage].safetyError}]`
          : `[${translations[currentLanguage].apiError}]`;
      }
    } catch (error) {
      console.error(`Tentativa ${i + 1} falhou:`, error);
      if (i === retries - 1) return `[${translations[currentLanguage].apiError}]`;
      await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
    }
  }
}

explainTheoryButton.addEventListener('click', async () => {
  theoryContent.classList.add('hidden');
  theoryLoader.classList.remove('hidden');
  explainTheoryButton.disabled = true;

  const originalText = originalTheory[currentLanguage].replace(/<[^>]*>/g, '');
  const prompt = translations[currentLanguage].explainTheoryPrompt.replace('{theory}', originalText);
  const newExplanation = await callGemini(prompt);

  theoryContent.innerHTML = newExplanation.replace(/\n/g, '<br>');
  if (window.renderMathInElement) { renderMathInElement(theoryContent); }

  theoryLoader.classList.add('hidden');
  theoryContent.classList.remove('hidden');
  resetTheoryButton.classList.remove('hidden');
  explainTheoryButton.disabled = false;
});

resetTheoryButton.addEventListener('click', () => {
  theoryContent.innerHTML = originalTheory[currentLanguage];
  if (window.renderMathInElement) { renderMathInElement(theoryContent); }
  resetTheoryButton.classList.add('hidden');
});

generateRiddleButton.addEventListener('click', async () => {
  const textToMakeRiddle = inputText.value;
  if (!textToMakeRiddle) return;

  riddleResult.classList.remove('hidden');
  riddleLoader.classList.remove('hidden');
  riddleOutput.textContent = '';
  generateRiddleButton.disabled = true;

  const prompt = translations[currentLanguage].generateRiddlePrompt.replace('{text}', textToMakeRiddle);
  const riddle = await callGemini(prompt);

  riddleOutput.textContent = riddle;
  riddleLoader.classList.add('hidden');
  generateRiddleButton.disabled = false;
});


// --- FUNÇÕES UTILITÁRIAS ---

function formatWithSpaces(str, chunkSize) {
  const regex = new RegExp(`.{1,${chunkSize}}`, 'g');
  return (str.match(regex) || []).join(' ');
}

function copyToClipboard(elementId) {
  const textToCopy = document.getElementById(elementId).textContent.replace(/\s/g, '');
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Erro ao copiar:', err);
  }
  document.body.removeChild(textArea);
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLanguage);
});
