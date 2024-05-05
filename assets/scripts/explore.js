// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const button = document.querySelector("button"); 
  const voiceDropdown = document.querySelector("#voice-select");
  const speechSyn = window.speechSynthesis;
  
  let utterSpeech;

  voiceDropdown.addEventListener('change', handleVoiceChange);
  button.addEventListener('click', playSound);


  function populateVoiceList() {
    if (typeof speechSyn === "undefined") {
      return;
    }

    const voices = speechSyn.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }

  }

  populateVoiceList();

  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function handleVoiceChange(event) {
    const selectedVoice = event.target.value;
    const voices = speechSyn.getVoices();
    console.log(voices);
    console.log(selectedVoice);
    const utterThis = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
    for (let i = 0; i < voices.length; i++) {
      console.log(`${voices[i].name} (${voices[i].lang})`);

      if (`${voices[i].name} (${voices[i].lang})` === selectedVoice) {
        utterThis.voice = voices[i];
      }
    }

    utterSpeech = utterThis;
  }

  function playSound() {
    utterSpeech.addEventListener("start", (event) => {
      document.querySelector("#explore img").src = 'assets/images/smiling-open.png';
    });

    utterSpeech.addEventListener("end", (event) => {
      document.querySelector("#explore img").src = 'assets/images/smiling.png';
    });

    speechSyn.speak(utterSpeech);

  }

}
