var recogniton = new webkitSpeechRecognition();
// console.log(recogniton);
recogniton.onresult = function(event){
    var text = event.results[0][0].transcript
    // console.log(text);
    var result = document.getElementById('result').innerHTML=text;


    read(text);
}

function read(text){
var speech = new SpeechSynthesisUtterance();
// console.log(speech);
speech.text = text;
if(text =="hello"){
speech.text="bye";
}
else if (text=="what is your name"){
    speech.text=" my name is pandda,i am your buddy";
}
else if (text=="what can you do for me"){
    speech.text=" i will try my best to make you happy";
}
else if (text=="are you happy today"){
    speech.text=" i am always happy to talk with you";
}
else if (text=="where are you from"){
    speech.text="  i am frome new york";
}
else if (text=="sing me a song"){
    speech.text=" lonly i am so lonly..... ";
}
else if (text=="who is your boss"){
    speech.text=" my boss is alfaj";
}
else{
    speech.text=" please try again ";
}
document.getElementById('res').innerHTML=speech.text;
window.speechSynthesis.speak(speech);
}