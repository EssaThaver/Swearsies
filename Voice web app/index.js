import { SwearRecogniser } from './SwearRecogniser.js'; // or './module'

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

let finalTranscript = '';

let swearRecog = new SwearRecogniser();

let recognition = new window.SpeechRecognition();

recognition.interimResults = true;
recognition.maxAlternatives = 10;
recognition.continuous = true;
recognition.onresult = (event) => {
  let interimTranscript = '';
  for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
    
    let transcript = event.results[i][0].transcript;
    
    if (event.results[i].isFinal) {
      swearRecog.checkForSwears(transcript)
      finalTranscript += transcript;

    } else {
      interimTranscript += transcript;
    }
  }
  document.querySelector('body').innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
}



recognition.start(); //Start the recogniser






