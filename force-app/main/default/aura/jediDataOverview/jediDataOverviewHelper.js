({
	handleRankChange : function(component, event) {
        component.set("v.rank", event.getParam("filterValue"));
	},
    
    handleEliminatedChange : function(component, event) {
        component.set("v.eliminated", event.getParam("filterValue"));
	},
    
    handlePlanetChange : function(component, event) {
        component.set("v.planet", event.getParam("filterValue"));
	}
})