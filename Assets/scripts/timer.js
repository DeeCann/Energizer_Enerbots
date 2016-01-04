#pragma strict
static var timer:float;
var timer_show:GameObject;
static var timer_start:boolean;
static var timer_end:boolean;
var failed:GameObject;

var off_:GameObject;
var old:boolean;
var failed_sound:AudioSource;
var sound_flag:boolean;

function Awake(){

}

function Start () {
timer_end=false;
sound_flag=true;

get_timer_value();

}

function Update () {

if(timer_start){
timer_start=true;

timer-=Time.deltaTime;
timer_show.GetComponent.<UI.Text>().text=timer.ToString("0");
if(timer<0){
	timer_show.GetComponent.<UI.Text>().text="0";
	failed.SetActive(true);timer_end=true;off_.SetActive(true);
	if(!sound_flag){failed_sound.Play();sound_flag=true;}
	timer_start=false;
	}

}
}

function get_timer_value(){
yield WaitForSeconds(0.1f);
timer=parseFloat(load_pattern.time_value);timer_start=true;
if(PlayerPrefs.GetString("reload")=="true"){
failed.active=false;
off_.active=false;
sound_flag=false;
timer_end=false;
}
}

function reload_level(){
timer_end=false;reset();sound_flag=false;Application.LoadLevel(Application.loadedLevel);
VectorLine.Destroy(laser.line);
VectorLine.Destroy(laser.line_glass);
VectorLine.Destroy(laser.line_water);
VectorLine.Destroy(laser.line_red);
VectorLine.Destroy(laser.line_blue);
VectorLine.Destroy(laser.line_yellow);
VectorLine.Destroy(laser.line_green);
VectorLine.Destroy(laser2.line2);
VectorLine.Destroy(laser2.line_glass2);
VectorLine.Destroy(laser2.line_water2);
VectorLine.Destroy(laser2.line_red2);
VectorLine.Destroy(laser2.line_blue2);
VectorLine.Destroy(laser2.line_yellow2);
VectorLine.Destroy(laser2.line_green2);
}

function reset(){
PlayerPrefs.SetString("reload","true");timer_end=false;
}

function change_level(){
VectorLine.Destroy(laser.line);
VectorLine.Destroy(laser.line_glass);
VectorLine.Destroy(laser.line_water);
VectorLine.Destroy(laser.line_red);
VectorLine.Destroy(laser.line_blue);
VectorLine.Destroy(laser.line_yellow);
VectorLine.Destroy(laser.line_green);
VectorLine.Destroy(laser2.line2);
VectorLine.Destroy(laser2.line_glass2);
VectorLine.Destroy(laser2.line_water2);
VectorLine.Destroy(laser2.line_red2);
VectorLine.Destroy(laser2.line_blue2);
VectorLine.Destroy(laser2.line_yellow2);
VectorLine.Destroy(laser2.line_green2);
timer_end=false;reset();sound_flag=false;Application.LoadLevel("load_level");

}