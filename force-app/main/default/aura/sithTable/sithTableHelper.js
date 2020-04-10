({
	orderExecutor : function(cmp) {
        var vrOne=cmp.get('c.getJedi');
        vrOne.setCallback(this, function(response){

            if(response.getState() === "SUCCESS"){
                var jediresp = response.getReturnValue();
                console.log(response.getReturnValue());
                for(let i = 0; i < jediresp.length; i++){
                    if(jediresp[i].Planet__c == null){
                        jediresp[i].PlanetName = "Unknown";
            		}
                    else{
                        jediresp[i].PlanetName = jediresp[i].Planet__r.Name;
                    }
        		}
                cmp.set('v.data', jediresp);
            }
            
        });
        $A.enqueueAction(vrOne);
	}
})