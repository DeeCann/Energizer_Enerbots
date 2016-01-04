#pragma strict
var pack_1:GameObject;
var pack_2:GameObject;
var pack_3:GameObject;
var pack_1_unlock:Sprite;
var pack_2_unlock:Sprite;
var pack_3_unlock:Sprite;

var level_01:GameObject;
var level_02:GameObject;
var level_03:GameObject;
var level_04:GameObject;
var level_05:GameObject;
var level_06:GameObject;
var level_07:GameObject;
var level_08:GameObject;
var level_09:GameObject;
var level_10:GameObject;
var level_11:GameObject;
var level_12:GameObject;
var level_13:GameObject;
var level_14:GameObject;
var level_15:GameObject;
var level_16:GameObject;
var level_17:GameObject;
var level_18:GameObject;
var level_19:GameObject;
var level_20:GameObject;
var level_21:GameObject;
var level_22:GameObject;
var level_23:GameObject;
var level_24:GameObject;
var level_25:GameObject;
var level_26:GameObject;
var level_27:GameObject;
var level_28:GameObject;
var level_29:GameObject;
var level_30:GameObject;
var level_31:GameObject;
var level_32:GameObject;
var level_33:GameObject;
var level_34:GameObject;
var level_35:GameObject;
var level_36:GameObject;
var level_37:GameObject;
var level_38:GameObject;
var level_39:GameObject;
var level_40:GameObject;
var level_41:GameObject;
var level_42:GameObject;
var level_43:GameObject;
var level_44:GameObject;
var level_45:GameObject;
var level_46:GameObject;
var level_47:GameObject;
var level_48:GameObject;
var level_49:GameObject;
var level_50:GameObject;
var level_51:GameObject;
var level_52:GameObject;
var level_53:GameObject;
var level_54:GameObject;
var level_55:GameObject;









function Start () {
//PlayerPrefs.DeleteAll();
PlayerPrefs.SetString("level_01","enabled");
/**PlayerPrefs.SetString("level_02","enabled");
PlayerPrefs.SetString("level_03","enabled");
PlayerPrefs.SetString("level_04","enabled");
PlayerPrefs.SetString("level_05","enabled");
PlayerPrefs.SetString("level_06","enabled");
PlayerPrefs.SetString("level_07","enabled");
PlayerPrefs.SetString("level_08","enabled");
PlayerPrefs.SetString("level_09","enabled");
PlayerPrefs.SetString("level_10","enabled");

PlayerPrefs.SetString("level_11","enabled");
PlayerPrefs.SetString("level_12","enabled");
PlayerPrefs.SetString("level_13","enabled");
PlayerPrefs.SetString("level_14","enabled");
PlayerPrefs.SetString("level_15","enabled");
PlayerPrefs.SetString("level_16","enabled");
PlayerPrefs.SetString("level_17","enabled");
PlayerPrefs.SetString("level_18","enabled");
PlayerPrefs.SetString("level_19","enabled");
PlayerPrefs.SetString("level_20","enabled");

PlayerPrefs.SetString("level_21","enabled");
PlayerPrefs.SetString("level_22","enabled");
PlayerPrefs.SetString("level_23","enabled");
PlayerPrefs.SetString("level_24","enabled");
PlayerPrefs.SetString("level_25","enabled");
PlayerPrefs.SetString("level_26","enabled");
PlayerPrefs.SetString("level_27","enabled");
PlayerPrefs.SetString("level_28","enabled");
PlayerPrefs.SetString("level_29","enabled");
PlayerPrefs.SetString("level_30","enabled");

PlayerPrefs.SetString("level_31","enabled");
PlayerPrefs.SetString("level_32","enabled");
PlayerPrefs.SetString("level_33","enabled");
PlayerPrefs.SetString("level_34","enabled");
PlayerPrefs.SetString("level_35","enabled");
PlayerPrefs.SetString("level_36","enabled");
PlayerPrefs.SetString("level_37","enabled");
PlayerPrefs.SetString("level_38","enabled");
PlayerPrefs.SetString("level_39","enabled");
PlayerPrefs.SetString("level_40","enabled");

PlayerPrefs.SetString("level_41","enabled");
PlayerPrefs.SetString("level_42","enabled");
PlayerPrefs.SetString("level_43","enabled");
PlayerPrefs.SetString("level_44","enabled");
PlayerPrefs.SetString("level_45","enabled");
PlayerPrefs.SetString("level_46","enabled");
PlayerPrefs.SetString("level_47","enabled");
PlayerPrefs.SetString("level_48","enabled");
PlayerPrefs.SetString("level_49","enabled");
PlayerPrefs.SetString("level_50","enabled");

PlayerPrefs.SetString("level_51","enabled");
PlayerPrefs.SetString("level_52","enabled");
PlayerPrefs.SetString("level_53","enabled");
PlayerPrefs.SetString("level_54","enabled");
PlayerPrefs.SetString("level_55","enabled");**/

if(Application.loadedLevelName=="load_level"){
	if(PlayerPrefs.GetString("premium")=="enabled"){
		pack_1.GetComponent.<UI.Image>().sprite=pack_1_unlock;
		pack_2.GetComponent.<UI.Image>().sprite=pack_2_unlock;
		pack_3.GetComponent.<UI.Image>().sprite=pack_3_unlock;
		}
	
	if(PlayerPrefs.GetString("level_01")=="enabled"){
		level_01.GetComponent.<UI.Image>().color.a=100;
		}
	if(PlayerPrefs.GetString("level_02")=="enabled"){
		level_02.GetComponent.<UI.Image>().color.a=100;
		}
	if(PlayerPrefs.GetString("level_03")=="enabled"){
		level_03.GetComponent.<UI.Image>().color.a=100;
		}
	if(PlayerPrefs.GetString("level_04")=="enabled"){
		level_04.GetComponent.<UI.Image>().color.a=100;
		}
	if(PlayerPrefs.GetString("level_05")=="enabled"){
		level_05.GetComponent.<UI.Image>().color.a=100;
		}
	if(PlayerPrefs.GetString("level_06")=="enabled"){
		level_06.GetComponent.<UI.Image>().color.a=100;
		}
	if(PlayerPrefs.GetString("level_07")=="enabled"){
		level_07.GetComponent.<UI.Image>().color.a=100;
		}
	if(PlayerPrefs.GetString("level_08")=="enabled"){
		level_08.GetComponent.<UI.Image>().color.a=100;
		}
	if(PlayerPrefs.GetString("level_09")=="enabled"){
		level_09.GetComponent.<UI.Image>().color.a=100;
		}
	if(PlayerPrefs.GetString("level_10")=="enabled"){
		level_10.GetComponent.<UI.Image>().color.a=100;
		}
	}
}
if(Application.loadedLevelName=="pack1"){
	if(PlayerPrefs.GetString("level_11")=="enabled"){
		level_11.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_12")=="enabled"){
		level_12.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_13")=="enabled"){
		level_13.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_14")=="enabled"){
		level_14.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_15")=="enabled"){
		level_15.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_16")=="enabled"){
		level_16.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_17")=="enabled"){
		level_17.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_18")=="enabled"){
		level_18.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_19")=="enabled"){
		level_19.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_20")=="enabled"){
		level_20.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_21")=="enabled"){
		level_21.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_22")=="enabled"){
		level_22.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_23")=="enabled"){
		level_23.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_24")=="enabled"){
		level_24.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_25")=="enabled"){
		level_25.GetComponent.<UI.Image>().color.a=100;
		}
	
}

if(Application.loadedLevelName=="pack2"){
	if(PlayerPrefs.GetString("level_26")=="enabled"){
		level_26.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_27")=="enabled"){
		level_27.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_28")=="enabled"){
		level_28.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_29")=="enabled"){
		level_29.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_30")=="enabled"){
		level_30.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_31")=="enabled"){
		level_31.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_32")=="enabled"){
		level_32.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_33")=="enabled"){
		level_33.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_34")=="enabled"){
		level_34.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_35")=="enabled"){
		level_35.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_36")=="enabled"){
		level_36.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_37")=="enabled"){
		level_37.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_38")=="enabled"){
		level_38.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_39")=="enabled"){
		level_39.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_40")=="enabled"){
		level_40.GetComponent.<UI.Image>().color.a=100;
		}
	
}

if(Application.loadedLevelName=="pack3"){
	if(PlayerPrefs.GetString("level_41")=="enabled"){
		level_41.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_42")=="enabled"){
		level_42.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_43")=="enabled"){
		level_43.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_44")=="enabled"){
		level_44.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_45")=="enabled"){
		level_45.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_46")=="enabled"){
		level_46.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_47")=="enabled"){
		level_47.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_48")=="enabled"){
		level_48.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_49")=="enabled"){
		level_49.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_50")=="enabled"){
		level_50.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_51")=="enabled"){
		level_51.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_52")=="enabled"){
		level_52.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_53")=="enabled"){
		level_53.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_54")=="enabled"){
		level_54.GetComponent.<UI.Image>().color.a=100;
		}
	
	if(PlayerPrefs.GetString("level_55")=="enabled"){
		level_55.GetComponent.<UI.Image>().color.a=100;
		}
	
}





function Update () {

}


function load_level(level:int){
if(level==1&&level_01.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl00");}
if(level==2&&level_02.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl01");}
if(level==3&&level_03.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl02");}
if(level==4&&level_04.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl03");}
if(level==5&&level_05.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl04");}
if(level==6&&level_06.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl05");}
if(level==7&&level_07.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl06");}
if(level==8&&level_08.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl07");}
if(level==9&&level_09.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl08");}
if(level==10&&level_10.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl09");}

if(level==11&&level_11.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl10");}
if(level==12&&level_12.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl11");}
if(level==13&&level_13.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl12");}
if(level==14&&level_14.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl13");}
if(level==15&&level_15.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl14");}
if(level==16&&level_16.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl15");}
if(level==17&&level_17.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl16");}
if(level==18&&level_18.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl17");}
if(level==19&&level_19.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl18");}
if(level==20&&level_20.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl19");}
if(level==21&&level_21.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl20");}
if(level==22&&level_22.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl21");}
if(level==23&&level_23.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl22");}
if(level==24&&level_24.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl23");}
if(level==25&&level_25.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl24");}

if(level==26&&level_26.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl25");}
if(level==27&&level_27.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl26");}
if(level==28&&level_28.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl27");}
if(level==29&&level_29.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl28");}
if(level==30&&level_30.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl29");}
if(level==31&&level_31.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl30");}
if(level==32&&level_32.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl31");}
if(level==33&&level_33.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl32");}
if(level==34&&level_34.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl33");}
if(level==35&&level_35.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl34");}
if(level==36&&level_36.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl35");}
if(level==37&&level_37.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl36");}
if(level==38&&level_38.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl37");}
if(level==39&&level_39.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl38");}
if(level==40&&level_40.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl39");}

if(level==41&&level_41.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl40");}
if(level==42&&level_42.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl41");}
if(level==43&&level_43.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl42");}
if(level==44&&level_44.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl43");}
if(level==45&&level_45.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl44");}
if(level==46&&level_46.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl45");}
if(level==47&&level_47.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl46");}
if(level==48&&level_48.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl47");}
if(level==49&&level_49.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl48");}
if(level==50&&level_50.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl49");}
if(level==51&&level_51.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl50");}
if(level==52&&level_52.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl51");}
if(level==53&&level_53.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl52");}
if(level==54&&level_54.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl53");}
if(level==55&&level_55.GetComponent.<UI.Image>().color.a==100){Application.LoadLevel("lvl54");}
}

function load_pack_scene(pack:int){

	if(pack==1){Application.LoadLevel("pack1");}
	if(pack==2){Application.LoadLevel("pack2");}
	if(pack==3){Application.LoadLevel("pack3");}
}