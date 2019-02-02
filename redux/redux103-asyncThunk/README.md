
https://thisismrsanjay.github.io/rough/redux/redux103-asyncThunk/build/index.html


* suppose i make app with login feature when i click on login 3 things must happen   
	1.A request to server for login 
	2.Response  from server regarding login
	3.Alteration in ui regarding login

* Redux will only let me do this in synchronously 

* Thunk is basically you take the action wrap it with function