public class empireForeverController {
	@AuraEnabled
    public static List<Jedi__c> getJedi(){
        List<Jedi__c> jediList = [SELECT Name, Planet__r.Name, Lightsaber_Color__c, Race__c, Number_of_Hands__c, Eliminated__c, Rank__c FROM
                Jedi__c]; 
        return jediList;
    }
}