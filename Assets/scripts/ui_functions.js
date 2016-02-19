#pragma strict
var wrong:AudioSource;

function Start () {

//PlayerPrefs.DeleteAll();


}

function Update () {
//PlayerPrefs.DeleteAll();
}

function exit_game(){
//Application.Quit();
Application.LoadLevel("load_level");
}

function start_game(){
PlayerPrefs.SetString("level_01","enabled");
Application.LoadLevel("load_level");
}

function load_unlock_1(){
Application.LoadLevel("unlock_1");
}

function load_unlock_2(){
Application.LoadLevel("unlock_2");
}

function load_enter_code(){
Application.LoadLevel("enter_code");
}

function load_thank_you_code(){
Application.LoadLevel("thank_you_code");
}

function load_thank_you_pay(){
Application.LoadLevel("thank_you_payment");
}

function load_after_unlock_p2(){
PlayerPrefs.SetString("level_26","enabled");
Application.LoadLevel("pack2");
}

function load_after_unlock_p3(){
PlayerPrefs.SetString("level_41","enabled");
Application.LoadLevel("pack3");
}

function load_levels_pack(){
PlayerPrefs.SetString("premium","enabled");

Application.LoadLevel("load_level");
}
function load_pack_scene(pack:int){
if(PlayerPrefs.GetString("premium")=="enabled"){
	if(pack==1){Application.LoadLevel("pack1");}
	if(pack==2){Application.LoadLevel("pack2");}
	if(pack==3){Application.LoadLevel("pack3");}
	}
else{
Application.LoadLevel("enter_code");
wrong.Play();
}

}
