Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 100
    
});

camera= document.getElementById("camera");
Webcam.attach("#webcam");
function takePic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img src="'+ data_uri +'" id="picture">';
    });
}

console.log("ml5 version is", ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/B-j2DYhm-/model.json", modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function Identify(){
    img= document.getElementById("picture");
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("member").innerHTML= results[0].label;
        document.getElementById("accuracy").innerHTML= results[0].confidence.toFixed(2);
    }
}

