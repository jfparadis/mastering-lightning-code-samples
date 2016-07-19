({
    answerMessage: function(cmp, event, helper) {
        var text = event.getParam("text");
        cmp.set("v.text", text);
    }
})