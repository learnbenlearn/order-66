({
	handleFilterChange : function(component, event, helper) {
		let filter = event.getParam("filterType");
		if(filter == "Rank"){
			helper.handleRankChange(component, event);
		} else if(filter == "Eliminated"){
			helper.handleEliminatedChange(component, event);
		} else if(filter == "Planet") {
			helper.handlePlanetChange(component, event);
		}
	},
    
    handleFilterReset : function(component, event, helper){
        helper.handleFilterReset(component);
    }
})