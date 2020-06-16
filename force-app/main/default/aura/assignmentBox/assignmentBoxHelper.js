({
	getEligibleUsers : function(component) {
		var users = component.get("c.getUsers");
        users.setCallback(this, function(response){
            if(response.getState() == 'SUCCESS'){
                var userList = [];
                for(let user of response.getReturnValue()){
                    userList.push(user.Name);
                }
                component.set("v.userList", userList);
            }
        });
        $A.enqueueAction(users);
	},
    
    saveAssignment : function(component){
        var assign = component.get("c.setAssignment");
        if(component.get("v.chosenUser")){
			assign.setParams({"jediId":component.get("v.selectedJedi"),
                              "chosenUser":component.get("v.chosenUser")});
            assign.setCallback(this, function(response){
                if(response.getState() == 'SUCCESS'){
                    var toastEvt = $A.get("e.force:showToast");
                    if(toastEvt){
                        toastEvt.setParams({
                            "type": "success",
                            "title": "Success",
                            "message": "Assignment Saved"
                        });
                        toastEvt.fire();
                    }
                }
            });
            $A.enqueueAction(assign);
        }
    },
    
    handleChange : function(component){
        component.find("recordData").reloadRecord();
    }
})