({
    populateTable : function(component) {
        var retrieveData = component.get('c.getJedi');
        retrieveData.setCallback(this, function(response){
            if(response.getState() === "SUCCESS"){
                var jediData = response.getReturnValue();
                
                // <lighting:dataTable does not like grabbing values from a parent object, so this is a
                // workaround
                for(let i = 0; i < jediData.length; i++){
                    if(jediData[i].Planet__c == null){
                        jediData[i].PlanetName = "Unknown";
                    }
                    else{
                        jediData[i].PlanetName = jediData[i].Planet__r.Name;
                    }
                }
                component.set('v.data', jediData);
                component.set('v.masterData', jediData);
            } 
        });
        $A.enqueueAction(retrieveData);
    },
    
    handleChangeRank : function (component, event){ 
        var oldRank = event.getParam("oldValue");
        var newRank = event.getParam("value");
        var newData = [];
        if(oldRank == ""){
            var data = component.get("v.data");
            for(let i = 0; i < data.length; i++){
                if(data[i].Rank__c == newRank){
                    newData.push(data[i]);
                }
            }
        }
        else{
            var masterData = component.get("v.masterData");
            var planet = component.get("v.selectedPlanet");
            var eliminated = component.get("v.selectedEliminated");
            var newData = [];
            if(newRank == ""){
                for(let i = 0; i < masterData.length; i++){
                    if(planet == "" && eliminated == ""){
                        newData.push(masterData[i]);
                    }
                    else if(planet == "" && masterData[i].Eliminated__c == eliminated){
                        newData.push(masterData[i]);
                    }
                    else if(eliminated == "" && masterData[i].Planet__c == planet){
                        newData.push(masterData[i]);
                    }
                    else if(masterData[i].Planet__c == planet && masterData[i].Eliminated__c == eliminated){
                        newData.push(masterData[i]);
                    }
                }
            }
            else{
                for(let i = 0; i < masterData.length; i++){
                    if(planet == "" && eliminated == "" && masterData[i].Rank__c == newRank){
                        newData.push(masterData[i]);
                    }
                    else if(planet == masterData[i].Planet__c && eliminated == "" && masterData[i].Rank__c == newRank){
                        newData.push(masterData[i]);
                    }
                    else if(planet == "" && eliminated == masterData[i].Eliminated__c && masterData.Rank__c == newRank){
                        newData.push(masterData[i]);
                    }
                    else if(planet == masterData[i].Planet__c && eliminated == masterData[i].Eliminated__c && masterData.Rank__c == newRank){
                        newData.push(masterData[i]);
                    }
                }
            }
        }
        component.set("v.data", newData);
    }
})