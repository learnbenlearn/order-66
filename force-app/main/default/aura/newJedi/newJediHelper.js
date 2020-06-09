({
    fireEvents : function() {
        var toastEvt = $A.get("e.force:showToast");
        if(toastEvt){
            toastEvt.setParams({
                "type": "success",
                "title": "Success",
                "message": "Jedi record created."
            });
            toastEvt.fire();
        }
        var jediCreatedEvt = $A.get("e.c:jediCreated");
        jediCreatedEvt.fire();
    }
})