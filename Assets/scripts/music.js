#pragma strict
var music:AudioSource;


function Start () {

}

function Update () {

if(timer.timer<10&&timer.timer>5){
music.pitch=1.1;}

if(timer.timer<5&&timer.timer>0)music.pitch=1.2;

}