({
    handleMore: function(cmp, event, helper) {
        cmp.set("v.answer", cmp.get("v.answer") + 1);
    },
    handleLess: function(cmp, event, helper) {
        cmp.set("v.answer", cmp.get("v.answer") - 1);
    }
})