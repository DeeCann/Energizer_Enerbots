#pragma strict
public var inputField:Transform;
public var lockPanel:Transform;
public var errText:Transform;

function Start () {

}

function Update () {
	
}

function Send() {
	errText.GetComponent.<UI.Text>().text = "";
	lockPanel.gameObject.SetActive(true);
	Connect();
}

function Connect () {
	var _connecting = true;
	var string = inputField.GetComponent.<UI.InputField>().text;
	Debug.Log(string);
	var form = new WWWForm();
	form.AddField("get_message", "tmp");
	var request = new WWW("https://apps.pc-fb.com/energizer-100-games/public/auth/code2?code="+string, form);
	
	yield request;
	
	print("Waiting ...");	
	
	yield WaitForSeconds(1f);
	
	print("Received ...");
	Debug.Log(request.error);
	if("Wrong code" in request.text)
		errText.GetComponent.<UI.Text>().text = "Wrong code";
	else if("Code has been already used. Please read FAQ for more information" in request.text)
		errText.GetComponent.<UI.Text>().text = "Code has been already used. Please read FAQ for more information";
	else if("true" in request.text) {
		PlayerPrefs.SetString("premium","enabled");
		Application.LoadLevel("load_level");
		PlayerPrefs.SetString("level_11","enabled");
	} 

	lockPanel.gameObject.SetActive(false);
	//var j= new JSONObject(request);
}
//IEnumerator Connect()
//{
//	_connecting = true;
//
//	WWWForm form = new WWWForm();
//	form.AddField("get_message", "tmp");
//	WWW request = new WWW("http://apps.pc-fb.com/energizer-100-games/public/auth/code2?code="+Code.text, form);
//	yield return request;
//	
//	print("Waiting ...");	
//	
//	yield return new WaitForSeconds(1f);
//	
//	print("Received ...");
//
//	_webserwisResponse = new JSONObject(request.text);
//
//	Debug.Log(_webserwisResponse);
//	foreach(JSONObject item in _webserwisResponse.list)
//	{
//		if (item.type == JSONObject.Type.BOOL)
//			jsonBoolResponse = item.ToString();
//
//		if (item.type == JSONObject.Type.NUMBER)
//			jsonCodeResponse = item.ToString();
//	}
//
//	Splash.gameObject.SetActive(false);
//	_connecting = false;
//	_receiving = true;
//}