({
    handleRankChange : function(component, event) {
        component.set("v.rank", event.getParam("filterValue"));
	},
    
    handleEliminatedChange : function(component, event) {
        component.set("v.eliminated", event.getParam("filterValue"));
	},
    
    handlePlanetChange : function(component, event) {
        component.set("v.planet", event.getParam("filterValue"));
	},
    
    handleFilterReset : function(component){
        component.set("v.rank", "");
        component.set("v.eliminated", "");
        component.set("v.planet", "");
    }
})
