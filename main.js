Webcam.set({
    width:355,
    height:303,
    image_format:"png",
    png_quality:100
});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id ="captured_image" src="'+data_uri+'">';
    });
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/i9tpoAgk4/model.json',modelLoaded);


function modelLoaded(){
    console.log("Model Loaded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);


}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{

        console.log(result);
        document.getElementById("result_object_name").innerHTML=document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=document.getElementById("result_object_name").innerHTML=result[0].confidence.toFixed(4);

    }

}
