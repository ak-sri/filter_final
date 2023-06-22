noseX= 0; 
noseY= 0; 
xray1= "False";


function preload(){
    earth= loadImage("https://i.postimg.cc/vTkNssJR/earth-globe-clip-art-vector-illustration-isolated-free-png.webp");
}

function setup(){
    canvas= createCanvas(300,300); 
    canvas.center();
    video=createCapture(VIDEO); 
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    fill(255,0,0); 
    stroke(255,0,0); 
    image(earth, noseX-13, noseY-13, 30,30);
    if (xray1=="True"){
        filter(INVERT);
    }
}

function take_snapshot(){
    save('earth-filter.png');
}

function modelLoaded(){
    console.log("PoseNet is loaded"); 
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x; 
        noseY= results[0].pose.nose.y;
        console.log("Nose x: " + noseX); 
        console.log("Nose y: " + noseY); 
    }
}

function xray(){
    xray1="True";
}