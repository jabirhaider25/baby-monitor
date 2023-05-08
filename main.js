img = "";
status = "";
objects=[]
function setup() {
    canvas = createCanvas(380,380)
    canvas.center()
    objectDetector = ml5.objectDetector('cocosd',modeloaded);
    document.getElementById("status").innerHTML = "status detecting objects"
    video = createCapture(VIDEO)
    video.size(380,380)
    video.hide()
}

function preload() {
    img = loadImage('dog_cat.jpg')
}

function modeloaded() {
console.log('model loaded')
status = true
objectDetector.detect(video,gotResult)  
}

function draw() {
    image(video, 0, 0, 380,380);
    
if (status !="") {
for (i = 0; i < objects.length; i++) 

{
 r = random(255) 
 g = random(255)
 b = random(255)



    document.getElementById("status").innerHTML = "Number of objects detected are :  "+ objects.length;

    fill( r,g,b);
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + "" + percent +"%", objects[i].x +10,objects[i].y +10);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

}
}
}

function gotResult(error,results) {
if (error) {
console.log(error)
}
else {
console.log(results)
objects=results
}
}