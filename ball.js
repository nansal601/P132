ball_image="";
Status="";

function preload()
{
ball_image=loadImage("ball.jpg");
}


function setup()
{
canvas=createCanvas(640, 350);
canvas.position(450, 200);
object_detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}


function modelLoaded(){
console.log("Model Loaded!")
Status=true;
objectDetector.detect(ball_image, gotResult);
}

function gotResult(error, results){
if (error) {
console.error(error);

}
console.log(results);
}

function draw(){
image(ball_image, 0, 0, 640, 350);
}
