({
	doInit: function (component, event, helper) {
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text'},
            {label: 'Planet', fieldName: 'PlanetName', type: 'text'},
            {label: 'Lightsaber Color', fieldName: 'Lightsaber_Color__c', type: 'text'},
            {label: 'Race', fieldName: 'Race__c', type: 'text'},
            {label: 'Number of Hands', fieldName: 'Number_of_Hands__c', type: 'number'},
            {label: 'Eliminated', fieldName: 'Eliminated__c', type: 'boolean'},
            {label: 'Rank', fieldName: 'Rank__c', type: 'text'}]);
        helper.populateTable(component);
    },
    
   	handleChangeRank: function (component, event, helper){
        helper.handleChangeRank(component, event);
    }
})