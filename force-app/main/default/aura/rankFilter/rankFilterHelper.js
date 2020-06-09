({
    populateRanks : function(component) {
		var retrieveRanks = component.get("c.getRanks");
        retrieveRanks.setCallback(this, function(response){
            if(response.getState() == "SUCCESS"){
                component.set("v.rankOptions", response.getReturnValue());
            }
        });
        $A.enqueueAction(retrieveRanks);
	},
    
    fireChangeEvt : function(component){
        var rankSelect = component.getEvent("rankChange");
        rankSelect.setParams({"filterValue": component.get("v.chosenRank")});
        rankSelect.fire();
    }
})