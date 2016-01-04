#pragma strict


function Start () {

}

function Update () {
	if (Input.GetMouseButtonUp(0)) {
	    var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	    var hit : RaycastHit;
	    
	    if ( GetComponent(Collider).Raycast(ray, hit, 100.0) ) {
	    	if(transform.GetChildCount()<2&&transform.Find("1-on(Clone)")){
				
					drag_drop.isBeingDragged.transform.SetParent(transform);
					drag_drop.isBeingDragged.transform.position=transform.position;
				}
			if(transform.GetChildCount()<2&&transform.Find("2-on(Clone)")){
				
					drag_drop.isBeingDragged.transform.SetParent(transform);
					drag_drop.isBeingDragged.transform.position=transform.position;
				}
			if(transform.GetChildCount()<2&&transform.Find("3-on(Clone)")){
				
					drag_drop.isBeingDragged.transform.SetParent(transform);
					drag_drop.isBeingDragged.transform.position=transform.position;
				}
			if(transform.GetChildCount()<2&&transform.Find("4-on(Clone)")){
				
					drag_drop.isBeingDragged.transform.SetParent(transform);
					drag_drop.isBeingDragged.transform.position=transform.position;
				}
			if(transform.GetChildCount()<2&&transform.Find("5-on(Clone)")){
				
					drag_drop.isBeingDragged.transform.SetParent(transform);
					drag_drop.isBeingDragged.transform.position=transform.position;
				}
	    }
	 }
}


