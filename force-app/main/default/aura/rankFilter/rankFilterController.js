({
	doInit : function(component, event, helper) {
        helper.populateRanks(component);
	},
    
    fireChangeEvt : function(component, event, helper){
        helper.fireChangeEvt(component);
    }
})