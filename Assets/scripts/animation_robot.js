#pragma strict
var animator_robot:Animator;
var robot_sound:AudioSource;
var sound_flag:boolean=false;
//var animator_shadow:Animator;

function Start () {
animator_robot=GetComponent("Animator");
animator_robot.Play("Idle");
}

function Update () {
	if(laser.white||laser2.white2){
		animator_robot.Play("robot");
		play_sound();
		
	}
}
function play_sound(){
if(!sound_flag){yield WaitForSeconds(0.30f);robot_sound.Play();sound_flag=true;}
}