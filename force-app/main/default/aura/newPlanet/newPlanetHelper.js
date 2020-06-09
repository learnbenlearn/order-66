({
    fireToast : function() {
        var toastEvt = $A.get("e.force:showToast");
        if(toastEvt){
            toastEvt.setParams({
                "type": "success",
                "title": "Success",
                "message": "Planet record created."
            });
            toastEvt.fire();
        }
    }
})