#pragma strict
var hint_1:GameObject;
var hint_2:GameObject;
var hint_3:GameObject;
var hint_4:GameObject;
var hint_5:GameObject;

function Start () {
//PlayerPrefs.DeleteAll();
//PlayerPrefs.SetString("first","false");
start_game();
}

function Update () {

}

function hint_1_2(){
	
	hint_1.SetActive(false);
	hint_2.SetActive(true);
}

function start_game(){
yield WaitForSeconds(2);
if(PlayerPrefs.GetString("first")!="yes")
	{
	Debug.Log("aaaa");
	hint_1.SetActive(true);	
	yield WaitForSeconds(4);
	hint_1.SetActive(false);
	hint_2.SetActive(true);
	yield WaitForSeconds(4);
	hint_2.SetActive(false);
	hint_3.SetActive(true);
	yield WaitForSeconds(4);
	hint_3.SetActive(false);
	hint_4.SetActive(true);
	yield WaitForSeconds(4);
	hint_4.SetActive(false);
	hint_5.SetActive(true);
	yield WaitForSeconds(4);
	hint_5.SetActive(false);
	yield WaitForSeconds(4);
	PlayerPrefs.SetString("first","yes");
	PlayerPrefs.SetString("level_01","enabled");
	//PlayerPrefs.SetString("level_11","enabled");
	Application.LoadLevel("load_level");
	}else{
	PlayerPrefs.SetString("level_01","enabled");
	//PlayerPrefs.SetString("level_11","enabled");
	Application.LoadLevel("load_level");
	}

}