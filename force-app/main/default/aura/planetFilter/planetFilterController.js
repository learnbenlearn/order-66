({
    doInit : function(component, event, helper){
        helper.populatePlanets(component);
	},
    
    fireChangeEvt : function(component, event, helper){
        helper.fireChangeEvt(component);
    }
})