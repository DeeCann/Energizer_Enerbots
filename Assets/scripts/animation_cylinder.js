#pragma strict
var animator_cylinder:Animator;

//var animator_shadow:Animator;

function Start () {
animator_cylinder=GetComponent("Animator");
animator_cylinder.Play("cylinder_empty");
}

function Update () {
	if(laser.white||laser2.white2){
		animator_cylinder.Play("full");
		
		
	}
}
