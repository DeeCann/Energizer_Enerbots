#pragma strict


var great:GameObject;
var particle:GameObject;
var dist : int; //max distance for beam to travel.
var robot_blue:Animator;
var robot_red:Animator;
var robot_green:Animator;
var robot_yellow:Animator;
var shadow:Animator;
var cylinder:Animator;

var sound_laser:AudioSource;
var laser_sound_flag:boolean=false;

static var white:boolean;
static var blue:boolean;
static var red:boolean;
static var green:boolean;
static var yellow:boolean;


var winTag : String; // i was using for minigame, if laser touches this tag , win
var reftag :String; //tag it can reflect off.
var limit : int = 100; // max reflections
private var verti  :int = 1; //segment handler don't touch.
private var iactive :boolean;
var currot : Vector3;
var offset:Vector3;
var curpos : Vector3;
var glass_rot:Vector3;
var water_rot:Vector3;
static var line : VectorLine;
static var line_glass : VectorLine;
static var line_water : VectorLine;
static var line_red : VectorLine;
static var line_blue : VectorLine;
static var line_yellow : VectorLine;
static var line_green : VectorLine;
var lineMaterial : Material;
var blue_lineMaterial : Material;
var red_lineMaterial : Material;
var yellow_lineMaterial : Material;
var green_lineMaterial : Material;
var hits: Array;
//var linePoints = new List.<Vector3>();
//var glass_linePoints = new List.<Vector3>();
function Awake(){

great=GameObject.Find("Canvas").transform.FindChild("Completed").gameObject;
great.SetActive(false);
}
function level_completed(){
yield WaitForSeconds(1);
great.SetActive(true);
}
function Start () {
laser_sound_flag=false;
white=false;
blue=false;
red=false;
green=false;
yellow=false;
var linePoints = new List.<Vector3>();
var glass_linePoints = new List.<Vector3>();
var water_linePoints = new List.<Vector3>();
var red_linePoints = new List.<Vector3>();
var blue_linePoints = new List.<Vector3>();
var yellow_linePoints = new List.<Vector3>();
var green_linePoints = new List.<Vector3>();
//hits= new Array();

line=VectorLine("Line", linePoints,lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_glass=VectorLine("Glass_Line", glass_linePoints,lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_water=VectorLine("Water_Line", water_linePoints,lineMaterial, 2 ,LineType.Continuous,Joins.None);
line_red=VectorLine("Red_Line", red_linePoints,red_lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_blue=VectorLine("Blue_Line", blue_linePoints,blue_lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_yellow=VectorLine("Yellow_Line", yellow_linePoints,yellow_lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_green=VectorLine("Green_Line", green_linePoints,green_lineMaterial, 15 ,LineType.Continuous,Joins.None);
        	

 
}
 
function Update () {

 	if(timer.timer_end){

 	VectorLine.Destroy(line);
VectorLine.Destroy(line_glass);
VectorLine.Destroy(line_water);
VectorLine.Destroy(line_red);
VectorLine.Destroy(line_blue);
VectorLine.Destroy(line_yellow);
VectorLine.Destroy(line_green);
laser_sound_flag=false;

var linePoints = new List.<Vector3>();
var glass_linePoints = new List.<Vector3>();
var water_linePoints = new List.<Vector3>();
var red_linePoints = new List.<Vector3>();
var blue_linePoints = new List.<Vector3>();
var yellow_linePoints = new List.<Vector3>();
var green_linePoints = new List.<Vector3>();
//hits= new Array();
//great=GameObject.Find("Completed");
line=VectorLine("Line", linePoints,lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_glass=VectorLine("Glass_Line", glass_linePoints,lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_water=VectorLine("Water_Line", water_linePoints,lineMaterial, 2 ,LineType.Continuous,Joins.None);
line_red=VectorLine("Red_Line", red_linePoints,red_lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_blue=VectorLine("Blue_Line", blue_linePoints,blue_lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_yellow=VectorLine("Yellow_Line", yellow_linePoints,yellow_lineMaterial, 15 ,LineType.Continuous,Joins.None);
line_green=VectorLine("Green_Line", green_linePoints,green_lineMaterial, 15 ,LineType.Continuous,Joins.None);
 	}
    if(timer.timer_start){
    
    DrawLaser();}
   	
    
}
function next_lvl(){
yield WaitForSeconds(5);
VectorLine.Destroy(line);
VectorLine.Destroy(line_glass);
VectorLine.Destroy(line_water);
VectorLine.Destroy(line_red);
VectorLine.Destroy(line_blue);
VectorLine.Destroy(line_yellow);
VectorLine.Destroy(line_green);
//if(Application.loadedLevel==10){Application.LoadLevel(0);} else {
Application.LoadLevel(Application.loadedLevel+1);

}

function DrawLaser()
{	
	yield WaitForSeconds (0.2f);
	var glass_active:boolean=true;
	var water_active:boolean=true;
	var blue_active:boolean=true;
	var red_active:boolean=true;
	var green_active:boolean=true;
	var yellow_active:boolean=true;
	
    line.points3.Clear();
    line_glass.points3.Clear();
    line_water.points3.Clear();
    line_blue.points3.Clear();
    line_red.points3.Clear();
    line_green.points3.Clear();
    line_yellow.points3.Clear();
    verti = 1;
    iactive = true;
    currot = offset;
    curpos = transform.position;
	
 	line.points3.Add (transform.position);
    while(iactive)
    {
    	
        verti ++;
        var hit : RaycastHit;
        var hit_glass:RaycastHit;
        var hit_water:RaycastHit;
       	var hit_blue:RaycastHit;
       	var hit_red:RaycastHit;
       	var hit_green:RaycastHit;
       	var hit_yellow:RaycastHit;
        //lr.SetVertexCount(verti);
        if (Physics.Raycast(curpos,currot,hit,dist))
        {
            //verti++;
            
            glass_rot=currot;
            water_rot=currot;
            curpos=hit.point;
            
            if(hit.transform.gameObject.tag=="normal"){
            	var particle_:GameObject=Instantiate(particle,hit.point, Quaternion.identity);
            	Destroy(particle_,0.2);
             	currot = Vector3.Reflect(currot,hit.normal);
            }
            //lr.SetPosition(verti-1,hit.point);
            line.points3.Add (hit.point);
            
        
            if (hit.transform.gameObject.tag == "a"){
                iactive = false;
                var particle_a:GameObject=Instantiate(particle,hit.point, Quaternion.identity);
            	Destroy(particle_a,0.2);
            }
            if (hit.transform.gameObject.tag == "absorber"){
                iactive = false;
               
                level_completed();
                timer.timer_start=false;
                timer.timer_end=true;
                white=true;next_lvl();
                
            }
            
            if (hit.transform.gameObject.tag == "glass"){
            	line_glass.points3.Add(curpos);
            	glass_rot=currot;
            	var glass_pos=curpos;
            	currot = Vector3.Reflect(currot,hit.normal);
            	while(glass_active){

            		if(Physics.Raycast(glass_pos,glass_rot,hit_glass,dist)){
            			glass_pos=hit_glass.point;
		            	if(hit_glass.transform.gameObject.tag=="normal"){
	             			glass_rot = Vector3.Reflect(glass_rot,hit_glass.normal);
	            			}
		            	line_glass.points3.Add(hit_glass.point);
		            	if (hit_glass.transform.gameObject.tag == "a"){
                			glass_active=false;
           				 	}
		            	if (hit_glass.transform.gameObject.tag == "absorber"){
		                	glass_active = false;level_completed();white=true;
		            		}
		            	if (hit_glass.transform.gameObject.tag == "ice"){
		            		Destroy(hit_glass.transform.gameObject,10);
		            		}
		            	if (hit_glass.transform.gameObject.tag == "blue"){
			            	glass_active = false;
			            	line_blue.points3.Add(glass_pos);
			            	var blue_pos=glass_pos;
			            	var blue_rot=glass_rot;
			            	while(blue_active){
				            	if(Physics.Raycast(blue_pos,blue_rot,hit_blue,dist)){
				            		
			           				blue_pos=hit_blue.point;
			            			if(hit_blue.transform.gameObject.tag=="normal"){
	             						blue_rot = Vector3.Reflect(blue_rot,hit_blue.normal);
	             						Debug.Log("normal");
	            					}
					            	line_blue.points3.Add(hit_blue.point);
					            	if (hit_blue.transform.gameObject.tag == "ice"){
					            		Destroy(hit_blue.transform.gameObject,10);
					            		Debug.Log("ice");
					            		}
					            	if (hit_blue.transform.gameObject.tag == "a"){
					            		blue_active=false;
					            		}
				            	}else {blue_active=false;}
            				}
    
           				 }
           				 if (hit_glass.transform.gameObject.tag == "red"){
			            	glass_active = false;
			            	line_red.points3.Add(glass_pos);
			            	var red_pos=glass_pos;
			            	var red_rot=glass_rot;
			            	while(red_active){
				            	if(Physics.Raycast(red_pos,red_rot,hit_red,dist)){
				            		
			           				red_pos=hit_red.point;
			            			if(hit_red.transform.gameObject.tag=="normal"){
	             						red_rot = Vector3.Reflect(red_rot,hit_red.normal);
	             						Debug.Log("normal");
	            					}
					            	line_red.points3.Add(hit_red.point);
					            	if (hit_red.transform.gameObject.tag == "ice"){
					            		Destroy(hit_red.transform.gameObject,10);
					            		Debug.Log("ice");
					            		}
					            	if (hit_red.transform.gameObject.tag == "a"){
					            		red_active=false;
					            		}
				            	}else {red_active=false;}
            				}
           				 }
           				 
           				 if (hit_glass.transform.gameObject.tag == "green"){
			            	glass_active = false;
			            	line_green.points3.Add(glass_pos);
			            	var green_pos=glass_pos;
			            	var green_rot=glass_rot;
			            	while(green_active){
				            	if(Physics.Raycast(green_pos,green_rot,hit_green,dist)){
				            		
			           				green_pos=hit_green.point;
			            			if(hit_green.transform.gameObject.tag=="normal"){
	             						green_rot = Vector3.Reflect(green_rot,hit_green.normal);
	             						Debug.Log("normal");
	            					}
	            					
					            	line_green.points3.Add(hit_green.point);
					            	if (hit_green.transform.gameObject.tag == "ice"){
					            		Destroy(hit_green.transform.gameObject,10);
					            		Debug.Log("ice");
					            		}
					            	if (hit_green.transform.gameObject.tag == "a"){
					            		green_active=false;
					            		}
				            	}else {green_active=false;}
            				}
    
           				 }
           				 
           				 if (hit_glass.transform.gameObject.tag == "yellow"){
			            	glass_active = false;
			            	line_yellow.points3.Add(glass_pos);
			            	var yellow_pos=glass_pos;
			            	var yellow_rot=glass_rot;
			            	while(yellow_active){
				            	if(Physics.Raycast(yellow_pos,yellow_rot,hit_yellow,dist)){
				            		
			           				yellow_pos=hit_yellow.point;
			            			if(hit_yellow.transform.gameObject.tag=="normal"){
	             						yellow_rot = Vector3.Reflect(yellow_rot,hit_yellow.normal);
	             						Debug.Log("normal");
	            					}
					            	line_yellow.points3.Add(hit_yellow.point);
					            	if (hit_yellow.transform.gameObject.tag == "ice"){
					            		Destroy(hit_yellow.transform.gameObject,10);
					            		Debug.Log("ice");
					            		}
					            	if (hit_yellow.transform.gameObject.tag == "a"){
					            		yellow_active=false;
					            		}
				            	}else {yellow_active=false;}
            				}
    
           				 }
		          	  		 	
            		}else {glass_active=false;}
            	}

            	Debug.Log("glass");
            	
            }
            if (hit.transform.gameObject.tag == "water"){
            	
            	line_water.points3.Add(curpos);
            	water_rot=currot;
            	var water_pos=curpos;
            	currot = Vector3.Reflect(currot,hit.normal);
            	
            	while(water_active){
            		
            		
            	
            		if(Physics.Raycast(water_pos,water_rot,hit_water,dist)){
            			
            			water_pos=hit_water.point;
		            	
		            	if(hit_water.transform.gameObject.tag=="normal"){
	             			water_rot = Vector3.Reflect(water_rot,hit_water.normal);
	            			}
		            	line_water.points3.Add(hit_water.point);
		            	if (hit_water.transform.gameObject.tag == "a"){
                			water_active=false;
           				 }
		            	if (hit_water.transform.gameObject.tag == "absorber"){
		                	water_active = false;level_completed();white=true;
		            		}
		            	if (hit_water.transform.gameObject.tag == "ice"){
		            		Destroy(hit_water.transform.gameObject,10);
		            		}
		            	
		          	  		 	
            		}else {water_active=false;}
            	}
            	Debug.Log("water");
            }
            if (hit.transform.gameObject.tag == "ice"){
            	
            	Destroy(hit.transform.gameObject,10);
            	
            	Debug.Log("ice");
            }
            if (hit.transform.gameObject.tag == "blue"){
            	
            	iactive = false;
            	line_blue.points3.Add(curpos);
            	while(blue_active){
	            	
	            	if(Physics.Raycast(curpos,glass_rot,hit_blue,dist)){
	            		glass_rot=currot;
           				curpos=hit_blue.point;
            			currot = Vector3.Reflect(currot,hit_blue.normal);
		            	
		            	line_blue.points3.Add(hit_blue.point);
		            
		            	if (hit_blue.transform.gameObject.tag == "ice"){
		            		Destroy(hit_blue.transform.gameObject,10);
		            		Debug.Log("ice");
		            		}
		            	if (hit_blue.transform.gameObject.tag == "a"){
		            		blue_active=false;
		            		}
	            	}else {
	            	blue_active=false;
	            	}
            	}	
            	Debug.Log("blue");
            }
            if (hit.transform.gameObject.tag == "red"){
            	
            	iactive = false;
            	line_red.points3.Add(curpos);
            	while(red_active){
	            	
            //lr.SetPosition(verti-1,hit.point);
            		//line_green.points3.Add (hit.point);
	            	if(Physics.Raycast(curpos,glass_rot,hit_red,dist)){
	            		glass_rot=currot;
           				curpos=hit_red.point;
           				if(hit_red.transform.gameObject.tag=="normal"){	
            				//var particle_green:GameObject=Instantiate(particle_,hit_green.point, Quaternion.identity);
            				//Destroy(particle_green,0.2);
            				Debug.Log("superol");
             				glass_rot = Vector3.Reflect(glass_rot,hit_red.normal);
            			}
            			if (hit_red.transform.gameObject.tag == "absorber"){
						                iactive = false;
						               	Debug.Log("win");
						                level_completed();
						                timer.timer_start=false;
						                timer.timer_end=true;
						                white=true;next_lvl();
                
           				}
            			//urrot = Vector3.Reflect(currot,hit_green.normal);
		            	
		            	line_red.points3.Add(hit_red.point);
		            
		            	if (hit_red.transform.gameObject.tag == "ice"){
		            		Destroy(hit_red.transform.gameObject,10);
		            		Debug.Log("ice");
		            		}
		            	if (hit_red.transform.gameObject.tag == "a"){
		            		green_active=false;
		            		}
	            	}else {
	            	red_active=false;
	            	}
            	}
            	Debug.Log("red");
            }
            if (hit.transform.gameObject.tag == "green"){
            	
            	iactive = false;
            	line_green.points3.Add(curpos);
            	while(green_active){
	            	
            //lr.SetPosition(verti-1,hit.point);
            		//line_green.points3.Add (hit.point);
	            	if(Physics.Raycast(curpos,glass_rot,hit_green,dist)){
	            		glass_rot=currot;
           				curpos=hit_green.point;
           				if(hit_green.transform.gameObject.tag=="normal"){	
            				//var particle_green:GameObject=Instantiate(particle_,hit_green.point, Quaternion.identity);
            				//Destroy(particle_green,0.2);
             				glass_rot = Vector3.Reflect(glass_rot,hit_green.normal);
            			}
            			if (hit_green.transform.gameObject.tag == "absorber"){
						                iactive = false;
						               	Debug.Log("win");
						                level_completed();
						                timer.timer_start=false;
						                timer.timer_end=true;
						                white=true;next_lvl();
                
           				}
            			//urrot = Vector3.Reflect(currot,hit_green.normal);
		            	
		            	line_green.points3.Add(hit_green.point);
		            
		            	if (hit_green.transform.gameObject.tag == "ice"){
		            		Destroy(hit_green.transform.gameObject,10);
		            		Debug.Log("ice");
		            		}
		            	if (hit_green.transform.gameObject.tag == "a"){
		            		green_active=false;
		            		}
	            	}else {
	            	green_active=false;
	            	}
            	}
            	Debug.Log("green");
            }
            if (hit.transform.gameObject.tag == "yellow"){
            	
            	iactive = false;
            	line_yellow.points3.Add(curpos);
            	while(yellow_active){
	            	
	            	if(Physics.Raycast(curpos,glass_rot,hit_yellow,dist)){
	            		glass_rot=currot;
           				curpos=hit_yellow.point;
            			currot = Vector3.Reflect(currot,hit_yellow.normal);
		            	
		            	line_yellow.points3.Add(hit_yellow.point);
		            
		            	if (hit_yellow.transform.gameObject.tag == "ice"){
		            		Destroy(hit_yellow.transform.gameObject,10);
		            		Debug.Log("ice");
		            		}
		            	if (hit_yellow.transform.gameObject.tag == "a"){
		            		yellow_active=false;
		            		}
	            	}else {
	            	yellow_active=false;
	            	}
            	}
            	Debug.Log("yellow");
            }
            if (hit.transform.gameObject.tag == "prism"){
            	
            	iactive = false;
            	line_blue.points3.Add(curpos);
            	line_red.points3.Add(curpos);
            	var main_rot=currot;
            	var main_pos=curpos;
            	while(blue_active){
	            	
	            	if(Physics.Raycast(curpos,currot,hit_blue,dist)){
	            		glass_rot=currot;
           				curpos=hit_blue.point;
            			currot = Vector3.Reflect(currot,hit_blue.normal);
		            	
		            	line_blue.points3.Add(hit_blue.point);
		            
		            	if (hit_blue.transform.gameObject.tag == "ice"){
		            		Destroy(hit_blue.transform.gameObject,10);
		            		Debug.Log("ice");
		            		}
		            	if (hit_blue.transform.gameObject.tag == "a"){
		            		blue_active=false;
		            		}
	            	}else {
	            	blue_active=false;
	            	}
            	}
            	currot=main_rot;
            	curpos=main_pos;
            	while(red_active){
	            	
	            	if(Physics.Raycast(curpos,glass_rot,hit_red,dist)){
	            		glass_rot=currot;
           				curpos=hit_red.point;
            			currot = Vector3.Reflect(glass_rot,hit_red.normal);
		            	
		            	line_red.points3.Add(hit_red.point);
		            
		            	if (hit_red.transform.gameObject.tag == "ice"){
		            		Destroy(hit_red.transform.gameObject,10);
		            		Debug.Log("ice");
		            		}
		            	if (hit_red.transform.gameObject.tag == "a"){
		            		red_active=false;
		            		}
	            	}else {
	            	red_active=false;
	            	}
            	}
            	
            }
            
            if (hit.transform.gameObject.tag == "mirror-ld"){}
            if (hit.transform.gameObject.tag == "mirror-lu"){}
            if (hit.transform.gameObject.tag == "mirror-rd"){}
            if (hit.transform.gameObject.tag == "mirror-lu"){}
            
        }
        else
        {
            //verti++;
            //
            
            //line.Draw();
            iactive = false;
            
       
        }
        if (verti >limit)
        {
        iactive = false;
        }
   		line.Draw();
   		line_glass.Draw();
   		line_water.Draw();
   		line_red.Draw();
   		
   		line_blue.Draw();
   		line_yellow.Draw();
   		line_green.Draw();
   		
   		//Destroy(particle_);
    }
 	
 
 
}