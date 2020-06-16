({
	doInit: function (component, event, helper) {
        helper.populateTable(component, false);
    },
    
   	handleChangeRank: function (component, event, helper){
        helper.handleChangeRank(component, event);
    },
    
    handleChangePlanet: function (component, event, helper){
        helper.handleChangePlanet(component, event);
    },
    
    handleChangeEliminated: function (component, event, helper){
        helper.handleChangeEliminated(component, event);
    },
    
    handleJediCreated: function (component, event, helper){
        helper.populateTable(component, false);
    },
    
    handleChangeMasterData: function (component, event, helper){
        helper.handleChangeMasterData(component);
    },
    
    fireJediSelected : function(component, event, helper){
        helper.fireJediSelected(component);
    }
})