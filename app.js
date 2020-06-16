const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings =
[
    'A my się znamy?',
    'No dzień dobry, co chciałeś?',
    'spadaj leszczu',
    'Siemanko miło cię poznać'
];

//const weather =

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new webkitSpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated');
};

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add listener to the btn

btn.addEventListener('click', () =>{
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'nie rozumiem co do mnie mówisz';

    const conditions = ["cześć", "hej" , "dzień dobry", "siema"];

    if(message.includes(conditions[0]) || message.includes(conditions[1]) || message.includes(conditions[2]) || message.includes(conditions[3])){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 2;

    window.speechSynthesis.speak(speech);
}