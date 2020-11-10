({
    populateEliminated : function(component) {
        let opts = ["True", "False"];
        component.set("v.options", opts);
    },
    
    populatePlanets : function(component) {
        let retrievePlanets = component.get("c.getPlanets");
        retrievePlanets.setCallback(this, function(response){
            if(response.getState() == "SUCCESS"){
                component.set("v.options", response.getReturnValue());
            }
        });
        $A.enqueueAction(retrievePlanets);
    },
    
    populateRanks : function(component) {
        let retrieveRanks = component.get("c.getRanks");
        retrieveRanks.setCallback(this, function(response) {
            if(response.getState() == "SUCCESS"){
                component.set("v.options", response.getReturnValue());
            }
        });
        $A.enqueueAction(retrieveRanks);
    },

    fireChangeEvt : function(component){
        let eliminatedSelect = component.getEvent("filterChange");
        eliminatedSelect.setParams({
            "filterValue": component.get("v.chosenOption"),
            "filterType": component.get("v.whatFilter")
        });
        eliminatedSelect.fire();
    }
})