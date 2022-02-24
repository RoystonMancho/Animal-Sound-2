function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true });
classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/RhtyEn8Yl/', modelReady);
}
function modelReady(){
classifier.classify(gotResults);    
}
function gotResults(error, results){
console.log('Got Result');    
}