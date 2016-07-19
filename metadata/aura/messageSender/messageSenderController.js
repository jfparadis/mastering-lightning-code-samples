({
    sendMessage: function(cmp, event, helper) {

        var id = event.getSource().getLocalId();
        var text = id === "1" ? "Hello" : (id === "2" ? "Goodbye" : "");

        $A.get("e.c:messageEvt").setParams({
            text: text
        }).fire();
    }
})