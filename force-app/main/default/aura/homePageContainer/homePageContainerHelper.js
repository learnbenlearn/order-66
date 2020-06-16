({
    handleJediSelect : function(component, event) {
        var jediId = event.getParam("jediId");
        if(jediId){
            component.set("v.chosenJedi", event.getParam("jediId"));
            component.set("v.showAssigned", "true");
        }
        else{
            component.set("v.showAssigned", "false");
        }
	}
})