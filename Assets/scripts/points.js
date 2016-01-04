#pragma strict
var points:GameObject;
var score:GameObject;
static var points_value:int;
var points_flag:boolean;

function Start () {
if(Application.loadedLevelName=="lvl00")PlayerPrefs.SetString("points","0");
points_flag=true;
points_value=parseInt(PlayerPrefs.GetString("points"));
points.GetComponent.<UI.Text>().text=points_value.ToString();

}

function Update () {
if(points_flag&&timer.timer_end){
points_value=parseInt( (parseFloat(load_pattern.time_value)-(parseFloat(load_pattern.time_value)-timer.timer))*100);
score.GetComponent.<UI.Text>().text=points_value.ToString();
PlayerPrefs.SetString("points",(points_value+parseInt(PlayerPrefs.GetString("points"))).ToString());
points_flag=false;
}
}