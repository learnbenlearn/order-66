public class empireForeverController {
	@AuraEnabled
    public static List<Jedi__c> getJedi(){
        List<Jedi__c> jediList = [SELECT Id, Name, Planet__r.Name, Lightsaber_Color__c, Race__c, Number_of_Hands__c, 
                                  Eliminated__c, Rank__c FROM Jedi__c]; 
        return jediList;
    }
    
    @AuraEnabled
    public static List<String> getPlanets(){
        List<String> planetNames = new List<String>();
        List<Planet__c> planets = [SELECT Id, Name FROM Planet__c];
        for(Planet__c p : planets){
            planetNames.add(p.Name);
        }
        return planetNames;
    }
    
    @AuraEnabled
    public static List<String> getRanks(){
        List<Schema.PicklistEntry> rankPicklist = Jedi__c.Rank__c.getDescribe().getPicklistValues();
        List<String> ranks = new List<String>();
        for(Schema.PicklistEntry pe: rankPicklist){
            ranks.add(pe.getValue());
        }
        return ranks;
    }
    
    @AuraEnabled
    public static List<User> getUsers(){
        return [SELECT Id, Name FROM User WHERE Profile.Name='LordVader' OR Profile.Name='BountyHunter'];
    }
    
    @AuraEnabled
    public static void setAssignment(String jediId, String chosenUser){
        Jedi__c jedi = [SELECT Id, Assigned_To__c FROM Jedi__c WHERE Id=:jediId];
        User eliminator = [SELECT Id FROM User WHERE Name=:chosenUser];
        jedi.Assigned_To__c = eliminator.Id;
        update jedi;
    }
}