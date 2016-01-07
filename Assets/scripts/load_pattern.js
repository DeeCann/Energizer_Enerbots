#pragma strict
import System.IO;
 
static var x_value:int;
static var y_value:int;
static var time_value:int;

var timer:GameObject;

var test_pattern:String;
var lvl01:String;
var lvl02:String;
var lvl03:String;
var lvl04:String;
var lvl05:String;
var lvl06:String;
var lvl07:String;
var lvl08:String;
var lvl09:String;
var lvl10:String;

var lvl11:String;
var lvl12:String;
var lvl13:String;
var lvl14:String;
var lvl15:String;
var lvl16:String;
var lvl17:String;
var lvl18:String;
var lvl19:String;
var lvl20:String;
var lvl21:String;
var lvl22:String;
var lvl23:String;
var lvl24:String;
var lvl25:String;

var lvl26:String;
var lvl27:String;
var lvl28:String;
var lvl29:String;
var lvl30:String;
var lvl31:String;
var lvl32:String;
var lvl33:String;
var lvl34:String;
var lvl35:String;
var lvl36:String;
var lvl37:String;
var lvl38:String;
var lvl39:String;
var lvl40:String;

var lvl41:String;
var lvl42:String;
var lvl43:String;
var lvl44:String;
var lvl45:String;
var lvl46:String;
var lvl47:String;
var lvl48:String;
var lvl49:String;
var lvl50:String;
var lvl51:String;
var lvl52:String;
var lvl53:String;
var lvl54:String;
var lvl55:String;
//var test_pattern:TextAsset;
var lines:int;
var dataParamsList:Array;
var set_ar:String[];
var temp_ar:String[];

var pos:Vector3;

var tiles:GameObject;
var slot_pref:GameObject;

var bcg1:GameObject;
var bcg2:GameObject;
var bcg3:GameObject;
var bcg4:GameObject;
var bcg5:GameObject;

var off_box:GameObject;
var on_box:GameObject;

var off_1_box:GameObject;
var on_1_box:GameObject;
var off_2_box:GameObject;
var on_2_box:GameObject;
var off_3_box:GameObject;
var on_3_box:GameObject;
var off_4_box:GameObject;
var on_4_box:GameObject;
var off_5_box:GameObject;
var on_5_box:GameObject;

var std_box:GameObject;
var std_dark_box:GameObject;
var light_metal_box:GameObject;
var dark_metal_box:GameObject;
var ice_box:GameObject;
var glass_box:GameObject;
var water_drop:GameObject;
var blue_gel:GameObject;
var green_gel:GameObject;
var red_gel:GameObject;
var yellow_gel:GameObject;
var prism_box:GameObject;
var mirror_ld:GameObject;
var mirror_lu:GameObject;
var mirror_rd:GameObject;
var mirror_ru:GameObject;
var rot_ld:GameObject;
var rot_lu:GameObject;
var rot_rd:GameObject;
var rot_ru:GameObject;

var robot_power_ul:GameObject;
var robot_power_ur:GameObject;
var robot_power_rl:GameObject;
var robot_power_rr:GameObject;
var robot_power_dl:GameObject;
var robot_power_dr:GameObject;
var robot_power_ll:GameObject;
var robot_power_lr:GameObject;

var robot_blue_u:GameObject;
var robot_blue_r:GameObject;
var robot_blue_d:GameObject;
var robot_blue_l:GameObject;

var robot_green_u:GameObject;
var robot_green_r:GameObject;
var robot_green_d:GameObject;
var robot_green_l:GameObject;

var robot_orange_u:GameObject;
var robot_orange_r:GameObject;
var robot_orange_d:GameObject;
var robot_orange_l:GameObject;

var robot_red_u:GameObject;
var robot_red_r:GameObject;
var robot_red_d:GameObject;
var robot_red_l:GameObject;


function Start () {

//var sr = new StreamReader(Application.dataPath + "/" + "pattern.txt");
//     test_pattern = sr.ReadToEnd();
//    sr.Close();
//test_pattern="7;5;4;0;0;0\n0;54;1;1;1;0\n1;1;1;1;1;0\n2;2;3;1;3;0\n1;1;4;1;1;0\n1;1;2;1;1;0\n9;2;1;1;64;0\n10;11;12;7;8;0";
////lvl01="7;4;1;25;0;0\n0;63;3;0;1;1\n3;3;3;1;1;1\n3;1;1;2;1;1\n5;3;3;5;1;1\n2;1;1;3;1;1\n2;4;1;1;1;1\n4;5;51;5;4;1";


////lvl04="7;6;2;34;0;0\n0;3;5;5;4;5\n3;0;0;0;0;0\n4;1;0;3;2;5\n5;0;0;0;57;5\n4;0;3;0;1;2\n2;61;1;1;2;3\n2;3;2;4;3;5";
////lvl05="7;4;1;35;0;0\n55;5;3;5;1;1\n2;1;1;3;1;1\n1;4;0;5;1;1\n3;2;3;1;1;1\n0;0;63;2;1;1\n3;2;1;0;1;1\n5;3;2;1;1;1";
////lvl06="4;6;4;30;0;0\n63;5;3;4;3;1\n2;3;0;3;3;1\n1;1;1;4;2;57\n0;2;2;2;3;5\n1;1;1;1;1;1\n1;1;1;1;1;1\n1;1;1;1;1;1";
////lvl07="6;5;5;30;0;0\n0;2;63;5;0;1\n0;5;3;4;1;1\n0;3;1;1;3;1\n5;1;4;0;2;1\n2;5;54;3;3;1\n5;0;2;3;5;1\n1;1;1;1;1;1";
////lvl08="7;6;3;30;0;0\n5;3;3;1;0;57\n3;0;1;1;3;2\n5;3;0;4;1;5\n2;3;3;1;1;2\n5;0;4;1;1;3\n5;62;2;1;1;5\n2;0;2;3;5;2";
////lvl09="7;6;2;30;0;0\n2;1;3;1;1;64\n1;4;1;0;1;1\n3;1;2;4;1;1\n0;0;3;3;5;2\n2;1;1;1;3;5\n0;0;0;0;2;2\n53;3;3;5;5;2";

////lvl11="7;6;4;30;0;0\n2;1;1;2;2;2\n5;62;2;1;2;2\n5;4;4;1;4;2\n3;0;0;0;0;3\n3;0;0;0;0;3\n2;0;0;0;0;3\n53;2;3;3;3;2";





////lvl11="5;4;3;30\n1;73;1;1\n1;1;1;1\n2;1;1;1\n2;1;10;1\n3;52;3;3";
////lvl11="7;4;3;30\n2;2;1;1\n54;2;1;1\n1;1;1;1\n2;1;11;1\n2;1;1;1\n1;1;1;3\n91;1;2;3";
////lvl11="7;6;2;30;1;2\n2;2;1;1;1;2\n54;2;1;1;1;57\n1;1;1;1;1;1\n2;1;11;1;2;2\n2;1;1;1;1;1\n1;1;1;3;1;2\n92;1;2;62;1;2";
////lvl11="7;6;3;30;1;2\n54;2;1;1;1;57\n1;1;1;1;1;2\n1;1;1;1;1;2\n2;10;1;1;1;1\n2;1;1;1;1;3\n62;1;1;3;1;2\n1;1;71;1;1;2";
////lvl11="7;6;1;30;1;2\n1;2;1;56;1;3\n3;1;2;1;1;2\n1;2;1;1;1;3\n3;1;11;1;1;1\n2;1;2;1;1;3\n3;1;1;2;1;2\n1;1;1;1;1;91";
////lvl11="7;6;5;30;1;2\n56;2;1;4;0;3\n3;1;2;1;0;1\n1;2;1;2;0;3\n3;1;4;1;0;1\n2;1;1;1;0;3\n62;1;1;1;0;2\n2;1;1;1;0;4";
////lvl11="7;6;2;30;1;2\n0;0;3;1;0;0\n0;0;1;1;0;0\n1;1;1;2;1;1\n3;1;1;1;1;57\n2;4;1;4;1;1\n4;1;1;4;1;2\n2;62;1;1;1;4";
////lvl11="6;6;5;30;1;2\n4;2;3;1;1;57\n2;1;1;1;1;0\n1;1;1;1;1;0\n1;1;4;4;4;0\n2;1;1;64;4;0\n4;1;4;4;4;2";
////lvl11="6;6;1;30;1;2\n62;2;3;3;1;1\n1;1;1;1;1;2\n4;4;1;4;1;1\n1;1;4;1;1;2\n1;1;1;1;3;1\n52;2;1;2;1;1";
////lvl11="7;6;3;30;1;2\n56;3;4;1;1;2\n1;1;1;2;1;1\n10;4;1;1;1;2\n1;1;1;4;1;1\n2;1;4;2;4;1\n1;1;1;1;1;74\n3;2;1;1;2;1";
////lvl11="7;5;4;30;1\n1;1;57;0;1\n1;1;1;0;1\n1;1;1;0;1\n0;0;0;0;0\n2;1;2;0;2\n1;1;1;1;1\n2;61;1;1;2";
////lvl11="7;5;3;30;1\n54;1;0;1;1\n1;1;0;1;1\n1;1;0;1;1\n0;0;63;0;0\n1;1;0;2;2\n1;1;0;2;2\n1;1;0;2;2";
////lvl11="7;6;4;30;1;1\n56;1;0;0;1;1\n1;1;0;0;1;1\n2;1;1;1;1;2\n2;2;0;0;2;2\n2;1;1;1;1;2\n1;1;0;0;1;1\n61;1;0;0;1;1";

////lvl11="6;6;1;30;1;1\n56;1;2;2;1;0\n1;1;1;1;0;1\n2;1;1;0;1;2\n2;1;0;4;1;1\n1;0;1;1;1;1\n0;1;2;1;1;64";

////lvl11="5;5;5;30;1\n2;1;4;1;63\n54;1;1;1;1\n2;1;1;1;2\n5;1;5;1;1\n2;5;2;5;2";
////lvl11="7;6;2;30;1;1\n2;2;2;0;2;2\n1;4;0;62;1;1\n1;0;1;4;1;1\n0;1;1;4;1;1\n54;1;1;1;1;1\n5;1;4;2;1;1\n1;1;1;1;1;1";
////lvl11="7;6;5;30;1;1\n2;62;0;1;2;1\n1;4;0;2;1;2\n62;0;0;1;1;1\n2;0;7;1;2;1\n1;0;0;1;1;1\n1;1;0;1;1;1\n2;51;0;2;1;2";
////lvl11="5;5;4;30;1\n2;1;1;1;64\n1;1;2;1;1\n2;1;0;1;2\n1;1;7;1;1\n52;1;61;1;2";

lvl01="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl02="5;5;1;30;1\n55;2;3;3;1\n2;1;1;3;1\n3;1;1;3;1\n3;2;1;1;2\n3;2;63;1;2";
lvl03="4;6;2;30;1;1\n2;2;57;1;1;2\n2;1;2;1;3;2\n3;1;1;1;2;1\n62;1;1;3;2;1";
lvl04="7;4;1;30\n2;2;57;3\n2;1;3;3\n3;1;1;3\n2;2;1;1\n1;2;2;3\n62;2;1;1\n3;2;1;1";
lvl05="6;5;2;30;1\n2;56;3;1;1\n2;1;2;1;2\n3;1;1;1;2\n2;2;1;3;73\n3;1;1;1;2\n3;1;1;1;2";
lvl06="7;6;4;30;1;1\n1;2;1;0;1;57\n1;1;1;3;2;2\n3;1;1;0;2;1\n2;1;4;3;1;1\n1;1;1;0;2;1\n2;63;1;3;1;1\n2;1;1;0;2;1";
lvl07="5;5;5;32;0;0\n2;0;1;3;5;2\n2;53;1;4;1;1\n3;0;0;1;3;3\n3;0;0;64;5;1\n1;3;3;2;2;2\n1;2;1;1;1;1\n1;1;1;1;2;1";
lvl08="7;5;3;33;0;0\n5;3;2;5;0;1\n0;0;1;0;0;1\n52;5;1;3;1;1\n5;3;1;0;5;5\n4;0;1;1;3;1\n2;5;4;3;3;1\n2;0;5;64;2;1";
lvl09="7;6;1;30;0;0\n1;3;2;1;0;2\n3;0;0;1;3;1\n62;0;2;1;1;58\n2;0;0;4;1;2\n5;3;1;1;3;5\n2;5;1;2;0;3\n0;2;1;3;3;5";
lvl10="6;6;5;30;1;1\n56;1;2;2;0;0\n1;1;0;0;1;0\n1;0;62;0;0;2\n1;0;0;4;0;2\n0;1;0;0;1;2\n0;0;2;2;1;1";

lvl11="7;6;3;30;1;0\n0;62;2;4;5;2\n1;4;0;0;1;1\n1;0;1;4;1;1\n0;1;1;0;1;1\n54;1;2;4;0;2\n5;1;4;2;1;5\n4;1;1;4;4;5";
//lvl11="7;4;1;25;0;0\n0;63;3;0;1;1\n3;3;3;1;1;1\n3;1;1;2;1;1\n5;3;3;5;1;1\n2;1;1;3;1;1\n2;4;1;1;1;1\n4;5;51;5;4;1";
lvl12="7;6;2;34;0;0\n0;3;5;5;4;5\n3;0;0;0;0;0\n4;1;0;3;2;5\n5;0;0;0;57;5\n4;0;3;0;1;2\n2;61;1;1;2;3\n2;3;2;4;3;5";
lvl13="7;4;1;35;0;0\n55;5;3;5;1;1\n2;1;1;3;1;1\n1;4;0;5;1;1\n3;2;3;1;1;1\n0;0;63;2;1;1\n3;2;1;0;1;1\n5;3;2;1;1;1";
lvl14="4;6;4;30;0;0\n63;5;3;4;3;1\n2;3;0;3;3;1\n1;1;1;4;2;57\n0;2;2;2;3;5\n1;1;1;1;1;1\n1;1;1;1;1;1\n1;1;1;1;1;1";
lvl15="6;5;5;30;0;0\n0;2;63;5;0;1\n0;5;3;4;1;1\n0;3;1;1;3;1\n5;1;4;0;2;1\n2;5;54;3;3;1\n5;0;2;3;5;1\n1;1;1;1;1;1";
lvl16="7;6;3;50;0;0\n5;3;3;1;0;57\n3;0;1;1;3;2\n5;3;0;4;1;5\n2;3;3;1;1;2\n5;0;4;1;1;3\n5;62;2;1;1;5\n2;0;2;3;5;2";
lvl17="7;6;2;40;0;0\n2;1;3;1;1;64\n1;4;1;0;1;1\n3;1;2;4;1;1\n0;0;3;3;5;2\n2;1;1;1;3;5\n0;0;0;0;2;2\n53;3;3;5;5;2";
lvl18="7;6;4;45;0;0\n2;1;1;2;2;2\n5;62;2;1;2;2\n5;4;4;1;4;2\n3;0;0;0;0;3\n3;0;0;0;0;3\n2;0;0;0;0;3\n53;2;3;3;3;2";
lvl19="5;4;3;30\n1;73;1;1\n1;1;1;1\n2;1;1;1\n2;1;10;1\n3;52;3;3";
lvl20="7;4;3;30\n2;2;1;1\n54;2;1;1\n1;1;1;1\n2;1;11;1\n2;1;1;1\n1;1;1;3\n91;1;2;3";
//lvl21="7;6;3;30;1;2\n54;2;1;1;1;57\n1;1;1;1;1;2\n1;1;1;1;1;2\n2;1;10;1;1;1\n2;1;1;1;1;3\n62;1;1;3;1;2\n1;1;71;1;1;2";
lvl21="7;6;3;30;1;2\n54;2;1;1;57;1\n1;1;1;1;1;2\n1;1;1;1;1;2\n2;10;1;1;1;1\n2;1;1;1;1;3\n62;1;1;3;1;2\n1;1;71;1;1;2";

lvl22="7;6;3;30;1;2\n54;2;1;1;57;1\n1;1;1;1;1;2\n1;1;1;1;1;2\n2;1;1;10;1;1\n2;1;1;1;1;3\n62;1;1;3;1;2\n1;1;71;1;1;2";
lvl23="7;6;1;30;1;2\n1;2;1;56;1;3\n3;1;2;1;1;2\n1;2;1;1;1;3\n3;1;11;1;1;1\n2;1;2;1;1;3\n3;1;1;2;1;2\n1;1;1;1;1;91";
lvl24="7;6;5;30;1;2\n56;2;1;4;0;3\n3;1;2;1;0;1\n1;2;1;2;0;3\n3;1;4;1;0;1\n2;1;1;1;0;3\n62;1;1;1;0;2\n2;1;1;1;0;4";
lvl25="7;6;2;30;1;2\n0;0;3;1;0;0\n0;0;1;1;0;0\n1;1;1;2;1;1\n3;1;1;1;1;57\n2;4;1;4;1;1\n4;1;1;4;1;2\n2;62;1;1;1;4";

lvl26="6;6;5;30;1;2\n4;2;3;1;1;57\n2;1;1;1;1;0\n1;1;1;1;1;0\n1;1;4;4;4;0\n2;1;1;64;4;0\n4;1;4;4;4;2";
lvl27="6;6;1;30;1;2\n62;2;3;3;1;1\n1;1;1;1;1;2\n4;4;1;4;1;1\n1;1;4;1;1;2\n1;1;1;1;3;1\n52;2;1;2;1;1";
lvl28="7;6;3;30;1;2\n56;3;4;1;1;2\n1;1;1;2;1;1\n10;4;1;1;1;2\n1;1;1;4;1;1\n2;1;4;2;4;1\n1;1;1;1;1;74\n3;2;1;1;2;1";
lvl29="7;5;4;30;1\n1;1;57;0;1\n1;1;1;0;1\n1;1;1;0;1\n0;0;0;0;0\n2;1;2;0;2\n1;1;1;1;1\n2;61;1;1;2";
lvl30="7;5;3;30;1\n54;1;0;1;1\n1;1;0;1;1\n1;1;0;1;1\n0;0;63;0;0\n1;1;0;2;2\n1;1;0;2;2\n1;1;0;2;2";
lvl31="7;6;4;30;1;1\n56;1;0;0;1;1\n1;1;0;0;1;1\n2;1;1;1;1;2\n2;2;0;0;2;2\n2;1;1;1;1;2\n1;1;0;0;1;1\n61;1;0;0;1;1";
lvl32="6;6;1;30;1;1\n56;1;2;2;1;0\n1;1;1;1;0;1\n2;1;1;0;1;2\n2;1;0;4;1;1\n1;0;1;1;1;1\n0;1;2;1;1;64";
lvl33="7;6;2;30;1;1\n2;2;2;0;2;2\n1;4;0;62;1;1\n1;0;1;4;1;1\n0;1;1;4;1;1\n54;1;1;1;1;1\n5;1;4;2;1;1\n1;1;1;1;1;1";
lvl34="7;6;5;30;1;1\n2;62;0;1;2;1\n1;4;0;2;1;2\n62;0;0;1;1;1\n2;0;7;1;2;1\n1;0;0;1;1;1\n1;1;0;1;1;1\n2;51;0;2;1;2";
lvl35="5;5;4;30;1\n2;1;1;1;64\n1;1;2;1;1\n2;1;0;1;2\n1;1;7;1;1\n52;1;61;1;2";
lvl36="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl37="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl38="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl39="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl40="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";

lvl41="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl42="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl43="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl44="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl45="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl46="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl47="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl48="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl49="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl50="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl51="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl52="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl53="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl54="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";
lvl55="5;5;4;30;1\n1;1;1;1;1\n2;1;1;1;57\n2;1;5;1;1\n1;1;1;1;1\n72;1;2;2;1";


timer=GameObject.Find("Timer");

dataParamsList=new Array();
temp_ar=new Array();

if(Application.loadedLevelName=="lvl00"){load_test_pattern(lvl01);PlayerPrefs.SetString("level_01","enabled");}
if(Application.loadedLevelName=="lvl01"){load_test_pattern(lvl02);PlayerPrefs.SetString("level_02","enabled");}
if(Application.loadedLevelName=="lvl02"){load_test_pattern(lvl03);PlayerPrefs.SetString("level_03","enabled");}
if(Application.loadedLevelName=="lvl03"){load_test_pattern(lvl04);PlayerPrefs.SetString("level_04","enabled");}
if(Application.loadedLevelName=="lvl04"){load_test_pattern(lvl05);PlayerPrefs.SetString("level_05","enabled");}
if(Application.loadedLevelName=="lvl05"){load_test_pattern(lvl06);PlayerPrefs.SetString("level_06","enabled");}
if(Application.loadedLevelName=="lvl06"){load_test_pattern(lvl07);PlayerPrefs.SetString("level_07","enabled");}
if(Application.loadedLevelName=="lvl07"){load_test_pattern(lvl08);PlayerPrefs.SetString("level_08","enabled");}
if(Application.loadedLevelName=="lvl08"){load_test_pattern(lvl09);PlayerPrefs.SetString("level_09","enabled");}
if(Application.loadedLevelName=="lvl09"){load_test_pattern(lvl10);PlayerPrefs.SetString("level_10","enabled");}
//if(Application.loadedLevelName=="lvl10"){load_test_pattern(lvl11);PlayerPrefs.SetString("level_11","enabled");}
if(Application.loadedLevelName=="lvl11"){load_test_pattern(lvl12);PlayerPrefs.SetString("level_12","enabled");}
if(Application.loadedLevelName=="lvl12"){load_test_pattern(lvl13);PlayerPrefs.SetString("level_13","enabled");}
if(Application.loadedLevelName=="lvl13"){load_test_pattern(lvl14);PlayerPrefs.SetString("level_14","enabled");}
if(Application.loadedLevelName=="lvl14"){load_test_pattern(lvl15);PlayerPrefs.SetString("level_15","enabled");}
if(Application.loadedLevelName=="lvl15"){load_test_pattern(lvl16);PlayerPrefs.SetString("level_16","enabled");}
if(Application.loadedLevelName=="lvl16"){load_test_pattern(lvl17);PlayerPrefs.SetString("level_17","enabled");}
if(Application.loadedLevelName=="lvl17"){load_test_pattern(lvl18);PlayerPrefs.SetString("level_18","enabled");}
if(Application.loadedLevelName=="lvl18"){load_test_pattern(lvl19);PlayerPrefs.SetString("level_19","enabled");}
if(Application.loadedLevelName=="lvl19"){load_test_pattern(lvl20);PlayerPrefs.SetString("level_20","enabled");}
if(Application.loadedLevelName=="lvl20"){load_test_pattern(lvl21);PlayerPrefs.SetString("level_21","enabled");}
if(Application.loadedLevelName=="lvl21"){load_test_pattern(lvl22);PlayerPrefs.SetString("level_22","enabled");}
if(Application.loadedLevelName=="lvl22"){load_test_pattern(lvl23);PlayerPrefs.SetString("level_23","enabled");}
if(Application.loadedLevelName=="lvl23"){load_test_pattern(lvl24);PlayerPrefs.SetString("level_24","enabled");}
if(Application.loadedLevelName=="lvl24"){load_test_pattern(lvl25);PlayerPrefs.SetString("level_25","enabled");}
if(Application.loadedLevelName=="lvl25"){load_test_pattern(lvl26);PlayerPrefs.SetString("level_26","enabled");}
if(Application.loadedLevelName=="lvl26"){load_test_pattern(lvl27);PlayerPrefs.SetString("level_27","enabled");}
if(Application.loadedLevelName=="lvl27"){load_test_pattern(lvl28);PlayerPrefs.SetString("level_28","enabled");}
if(Application.loadedLevelName=="lvl28"){load_test_pattern(lvl29);PlayerPrefs.SetString("level_29","enabled");}
if(Application.loadedLevelName=="lvl29"){load_test_pattern(lvl30);PlayerPrefs.SetString("level_30","enabled");}
if(Application.loadedLevelName=="lvl30"){load_test_pattern(lvl31);PlayerPrefs.SetString("level_31","enabled");}
if(Application.loadedLevelName=="lvl31"){load_test_pattern(lvl32);PlayerPrefs.SetString("level_32","enabled");}
if(Application.loadedLevelName=="lvl32"){load_test_pattern(lvl33);PlayerPrefs.SetString("level_33","enabled");}
if(Application.loadedLevelName=="lvl33"){load_test_pattern(lvl34);PlayerPrefs.SetString("level_34","enabled");}
if(Application.loadedLevelName=="lvl34"){load_test_pattern(lvl35);PlayerPrefs.SetString("level_35","enabled");}
if(Application.loadedLevelName=="lvl35"){load_test_pattern(lvl36);PlayerPrefs.SetString("level_36","enabled");}
if(Application.loadedLevelName=="lvl36"){load_test_pattern(lvl37);PlayerPrefs.SetString("level_37","enabled");}
if(Application.loadedLevelName=="lvl37"){load_test_pattern(lvl38);PlayerPrefs.SetString("level_38","enabled");}
if(Application.loadedLevelName=="lvl38"){load_test_pattern(lvl39);PlayerPrefs.SetString("level_39","enabled");}
if(Application.loadedLevelName=="lvl39"){load_test_pattern(lvl40);PlayerPrefs.SetString("level_40","enabled");}
if(Application.loadedLevelName=="lvl40"){load_test_pattern(lvl41);PlayerPrefs.SetString("level_41","enabled");}
if(Application.loadedLevelName=="lvl41"){load_test_pattern(lvl42);PlayerPrefs.SetString("level_42","enabled");}
if(Application.loadedLevelName=="lvl42"){load_test_pattern(lvl43);PlayerPrefs.SetString("level_43","enabled");}
if(Application.loadedLevelName=="lvl43"){load_test_pattern(lvl44);PlayerPrefs.SetString("level_44","enabled");}
if(Application.loadedLevelName=="lvl44"){load_test_pattern(lvl45);PlayerPrefs.SetString("level_45","enabled");}
if(Application.loadedLevelName=="lvl45"){load_test_pattern(lvl46);PlayerPrefs.SetString("level_46","enabled");}
if(Application.loadedLevelName=="lvl46"){load_test_pattern(lvl47);PlayerPrefs.SetString("level_47","enabled");}
if(Application.loadedLevelName=="lvl47"){load_test_pattern(lvl48);PlayerPrefs.SetString("level_48","enabled");}
if(Application.loadedLevelName=="lvl48"){load_test_pattern(lvl49);PlayerPrefs.SetString("level_49","enabled");}
if(Application.loadedLevelName=="lvl49"){load_test_pattern(lvl50);PlayerPrefs.SetString("level_50","enabled");}
if(Application.loadedLevelName=="lvl50"){load_test_pattern(lvl51);PlayerPrefs.SetString("level_51","enabled");}
if(Application.loadedLevelName=="lvl51"){load_test_pattern(lvl52);PlayerPrefs.SetString("level_52","enabled");}
if(Application.loadedLevelName=="lvl52"){load_test_pattern(lvl53);PlayerPrefs.SetString("level_53","enabled");}
if(Application.loadedLevelName=="lvl53"){load_test_pattern(lvl54);PlayerPrefs.SetString("level_54","enabled");}
if(Application.loadedLevelName=="lvl54"){load_test_pattern(lvl55);PlayerPrefs.SetString("level_55","enabled");}



}



function Update () {
//timer.GetComponent.<UI.Text>().text=ToString(time_value);
}

function load_test_pattern(pattern: String){
var returnChar = "\n"[0];
var commaChar = ";"[0];
var dataLines = pattern.Split(returnChar);

for(var dataLine in dataLines){
	lines++;
	var dataParams = dataLine.Split(commaChar);
	dataParamsList.Add(dataParams);
	}
set_ar=dataParamsList[0];
switch(parseInt(set_ar[2])){
	case 1:off_box=off_1_box;on_box=on_1_box;bcg1.SetActive(true);break;
	case 2:off_box=off_2_box;on_box=on_2_box;bcg2.SetActive(true);break;
	case 3:off_box=off_3_box;on_box=on_3_box;bcg3.SetActive(true);break;
	case 4:off_box=off_4_box;on_box=on_4_box;bcg4.SetActive(true);break;
	case 5:off_box=off_5_box;on_box=on_5_box;bcg5.SetActive(true);break;
}
x_value=parseInt(set_ar[1]);
y_value=parseInt(set_ar[0]);
time_value=parseInt(set_ar[3]);
for(var i:int=0;i<parseInt(set_ar[1]);i++){
	for(var j:int=0;j<parseInt(set_ar[0]);j++){
	if(parseInt(set_ar[0])==4&&parseInt(set_ar[1])==4){pos=Vector3(-3.3+2.2*i,3.3-2.2*j,0);}
	if(parseInt(set_ar[0])==5&&parseInt(set_ar[1])==4){pos=Vector3(-3.3+2.2*i,4.4-2.2*j,0);}
	if(parseInt(set_ar[0])==6&&parseInt(set_ar[1])==4){pos=Vector3(-3.3+2.2*i,5.5-2.2*j,0);}
	if(parseInt(set_ar[0])==7&&parseInt(set_ar[1])==4){pos=Vector3(-3.3+2.2*i,6.6-2.2*j,0);}
	if(parseInt(set_ar[0])==4&&parseInt(set_ar[1])==5){pos=Vector3(-4.4+2.2*i,3.3-2.2*j,0);}
	if(parseInt(set_ar[0])==5&&parseInt(set_ar[1])==5){pos=Vector3(-4.4+2.2*i,4.4-2.2*j,0);}
	if(parseInt(set_ar[0])==6&&parseInt(set_ar[1])==5){pos=Vector3(-4.4+2.2*i,5.5-2.2*j,0);}
	if(parseInt(set_ar[0])==7&&parseInt(set_ar[1])==5){pos=Vector3(-4.4+2.2*i,6.6-2.2*j,0);}
	if(parseInt(set_ar[0])==4&&parseInt(set_ar[1])==6){pos=Vector3(-5.5+2.2*i,3.3-2.2*j,0);}
	if(parseInt(set_ar[0])==5&&parseInt(set_ar[1])==6){pos=Vector3(-5.5+2.2*i,4.4-2.2*j,0);}
	if(parseInt(set_ar[0])==6&&parseInt(set_ar[1])==6){pos=Vector3(-5.5+2.2*i,5.5-2.2*j,0);}
	if(parseInt(set_ar[0])==7&&parseInt(set_ar[1])==6){pos=Vector3(-5.5+2.2*i,6.6-2.2*j,0);}
			
			temp_ar=dataParamsList[j+1];
			var slot:GameObject=Instantiate(slot_pref,pos,Quaternion.identity);
			slot.transform.SetParent(tiles.transform,false);
			if(parseInt(temp_ar[i])==0)Instantiate(off_box,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);
			else Instantiate(on_box,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);
			
			switch(parseInt(temp_ar[i])){
			case 0:break;
			case 1:break;
			case 2:Instantiate(std_box,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 3:Instantiate(std_dark_box,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 4:Instantiate(light_metal_box,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 5:Instantiate(dark_metal_box,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 6:Instantiate(ice_box,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 7:Instantiate(glass_box,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 8:Instantiate(water_drop,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 9:Instantiate(blue_gel,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 10:Instantiate(green_gel,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 11:Instantiate(red_gel,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 12:Instantiate(yellow_gel,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 13:Instantiate(prism_box,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 14:Instantiate(mirror_ld,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 15:Instantiate(mirror_lu,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 16:Instantiate(mirror_rd,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 17:Instantiate(mirror_ru,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 18:Instantiate(rot_ld,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 19:Instantiate(rot_lu,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 20:Instantiate(rot_rd,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 21:Instantiate(rot_ru,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 51:Instantiate(robot_power_ul,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 52:Instantiate(robot_power_ur,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 53:Instantiate(robot_power_rl,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 54:Instantiate(robot_power_rr,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 55:Instantiate(robot_power_dl,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 56:Instantiate(robot_power_dr,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 57:Instantiate(robot_power_ll,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 58:Instantiate(robot_power_lr,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 61:Instantiate(robot_blue_u,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 62:Instantiate(robot_blue_r,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 63:Instantiate(robot_blue_d,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 64:Instantiate(robot_blue_l,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 71:Instantiate(robot_green_u,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 72:Instantiate(robot_green_r,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 73:Instantiate(robot_green_d,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 74:Instantiate(robot_green_l,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 81:Instantiate(robot_orange_u,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 82:Instantiate(robot_orange_r,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 83:Instantiate(robot_orange_d,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 84:Instantiate(robot_orange_l,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 91:Instantiate(robot_red_u,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 92:Instantiate(robot_red_r,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 93:Instantiate(robot_red_d,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			case 94:Instantiate(robot_red_l,Vector3(0,0,0),Quaternion.identity).transform.SetParent(slot.transform,false);break;
			
			}
		}
	} 



}