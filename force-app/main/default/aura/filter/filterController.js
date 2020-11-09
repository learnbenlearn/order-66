({
    doInit : function(component, event, helper) {
        if(component.get("v.whatFilter") == "Planet"){
            helper.populatePlanets(component);
        }
        else if(component.get("v.whatFilter") == "Rank"){
            helper.populateRanks(component);
        }
        else{
            helper.populateEliminated(component);
        }
    },

    fireChangeEvt : function(component, event, helper){
        helper.fireChangeEvt(component);
    }
})