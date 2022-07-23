timer_count = 0;
timer_check = "";
Sketch_guess = "";
answer = "";
score = "";
array_1=["pen","tooth","tree","apple","banana","bag","cake","drum","chair","donut","shirt","spectacles","flower","smiley","bird","clock","eye","tent","wheel","ice-cream","binoculars","telephone","foot","hand","television","lion","panda","octopus","campfire","helicopter"];
random_no = Math.floor((Math.random()*array_1.length)+1);
Element_of_array = array_1[random_no];
console.log(Element_of_array);
document.getElementById("Sketch2draw").innerHTML = "Sketch to be drawn: " + Element_of_array;

function preload() {

}
function setup() {
   canvas = createCanvas(400,400);
   canvas.center();
   background("white");
}
function draw() {

}
function ClearCanvas() {
    background("white");
}
