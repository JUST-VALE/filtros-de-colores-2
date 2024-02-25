var holix3="";
function preload(){

}
function setup(){
lienzo=createCanvas (550,550);
lienzo.position(420,200);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,0,0,550,550);
tint(holix3)
}
function holix(){
holix3=document.getElementById("holix4").value;
}
function holix2(){
save("holix.jpg");
}