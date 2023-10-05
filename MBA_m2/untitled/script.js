// JavaScript Encoder
function encryptWord(word) {
  const seed = generateRandomSeed();
  const encoded = word
    .split('')
    .map(character => String.fromCharCode(character.charCodeAt(0) + seed))
    .join('');
  return { encoded, seed };
}

// JavaScript Decoder
function decryptWord(encodedWord, seed) {
  const decoded = encodedWord
    .split('')
    .map(character => String.fromCharCode(character.charCodeAt(0) - seed))
    .join('');
  return decoded;
}

function generateRandomSeed() {
  return Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit random seed
}

function encode() {
  const word = document.getElementById("encodeInput").value;
  const { encoded, seed } = encryptWord(word);
  const encodedResult = document.getElementById("encodedResult");
  encodedResult.textContent = "Encoded word: " + encoded;
  const seedOutput = document.getElementById("seedOutput");
  seedOutput.textContent = "Seed for decoding: " + seed;

  // Show the "Copy Encoded Word" button
  const copyButton = document.getElementById("copyButton");
  copyButton.style.display = "block";
}

function decode() {
  const encodedWord = document.getElementById("decodeInput").value;
  const seed = parseInt(document.getElementById("decodeSeed").value);
  const decodedResult = document.getElementById("decodedResult");
  const decodedWord = decryptWord(encodedWord, seed);
  decodedResult.textContent = "Decoded word: " + decodedWord;
}



function copyEncoded() {
  const encodedResult = document.getElementById("encodedResult");
  const encodedText = encodedResult.textContent.split(":")[1].trim(); // Extract and trim the encoded word
  const textArea = document.createElement("textarea");
  textArea.value = encodedText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Encoded word copied to clipboard!");
}

