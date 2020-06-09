({
    fireChangeEvt : function(component){
        var eliminatedSelect = component.getEvent("eliminatedChange");
        eliminatedSelect.setParams({"filterValue": component.get("v.chosenEliminated")});
        eliminatedSelect.fire();
    }
})