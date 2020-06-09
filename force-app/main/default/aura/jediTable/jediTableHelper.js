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
        var newData = component.get("v.masterData");
        newData = this.filterRank(newData, event.getParam("value"));
        newData = this.filterPlanet(newData, component.get("v.selectedPlanet"));
        newData = this.filterEliminated(newData, component.get("v.selectedEliminated"));
        component.set("v.data", newData);
    },
    
    handleChangePlanet : function (component, event){
        var newData = component.get("v.masterData");
        newData = this.filterRank(newData, component.get("v.selectedRank"));
        newData = this.filterPlanet(newData, event.getParam("value"));
        newData = this.filterEliminated(newData, component.get("v.selectedEliminated"));
        component.set("v.data", newData);
    },
    
    handleChangeEliminated: function (component, event){
        var newData = component.get("v.masterData");
        newData = this.filterRank(newData, component.get("v.selectedRank"));
        newData = this.filterPlanet(newData, component.get("v.selectedPlanet"));
        newData = this.filterEliminated(newData, event.getParam("value"));
        component.set("v.data", newData);
    },
    
    filterRank : function(data, rank){
        if(rank == ""){
            return data;
        }
        var filteredData = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].Rank__c == rank){
                filteredData.push(data[i]);
            }
        }
        return filteredData;
    },
    
    filterPlanet : function(data, planet){
        if(planet == ""){
            return data;
        }
        var filteredData = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].PlanetName == planet){
                filteredData.push(data[i]);
            }
        }
        return filteredData;
    },
    
    filterEliminated : function(data, eliminated){
        var isEliminated;
        if(eliminated == ""){
            return data;
        }
        else if(eliminated == "True"){
            isEliminated = true;
        }
        else{
            isEliminated = false;
        }
        var filteredData = [];
        for(let i = 0; i < data.length; i++){
            if(data[i].Eliminated__c == isEliminated){
                filteredData.push(data[i]);
            }
        }
        return filteredData;
    }
})