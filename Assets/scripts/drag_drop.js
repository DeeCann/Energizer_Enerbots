#pragma strict
private var x:float;
private var y:float;
private var startPosition:Vector3;
private var startParent:Transform;
static var isBeingDragged:GameObject;

var click_on:AudioSource;
var click_off:AudioSource;

private var clone_tile:GameObject;

function Start () {

}

function Update () {
x=Input.mousePosition.x;
y=Input.mousePosition.y;
}

function OnMouseDown(){
	click_on.Play();
	isBeingDragged=this.gameObject;
	startPosition=transform.position;
	startParent=transform.parent;
	GetComponent(Collider).enabled=false;
	clone_tile=Instantiate(this.gameObject,transform.parent.position, Quaternion.identity);
	clone_tile.GetComponent(Collider).enabled=true;
	GetComponent(SpriteRenderer).color.a = 0.5f;
}

function OnMouseDrag(){
	transform.position=Camera.main.ScreenToWorldPoint(Vector3(x,y,10f));
	GetComponent(Renderer).sortingOrder=10;
}

function OnMouseUp(){
	GetComponent(Collider).enabled=true;
	click_off.Play();
	GetComponent(SpriteRenderer).color.a = 1.0;
	Destroy(clone_tile);
	//isBeingDragged=null;
	GetComponent(Renderer).sortingOrder=1;
	if(transform.parent==startParent){
		transform.position=startPosition;
		}
	
}

