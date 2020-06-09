({
	populatePlanets : function(component) {
		var retrievePlanets = component.get("c.getPlanets");
        retrievePlanets.setCallback(this, function(response){
            if(response.getState() == "SUCCESS"){
                component.set("v.planetOptions", response.getReturnValue());
            }
        });
        $A.enqueueAction(retrievePlanets);
	},
    
    fireChangeEvt : function(component){
        var planetSelect = component.getEvent("planetChange");
        planetSelect.setParams({"filterValue": component.get("v.chosenPlanet")});
        planetSelect.fire();
    }
})