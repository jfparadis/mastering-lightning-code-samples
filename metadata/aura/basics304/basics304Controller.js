({
	doInit : function(cmp, event, helper) {
        $A.createComponents([
            ["c:meter", {value: Math.random()}],
            ["c:meter", {value: Math.random()}],
            ["c:meter", {value: Math.random()}],
            ["c:meter", {value: Math.random()}],
            ["c:meter", {value: Math.random()}],
            ["c:meter", {value: Math.random()}]

        ], function(newCmps) {
        	var content = cmp.find("content");
			content.set("v.body", newCmps)
        });
	},

    doRandomize : function(cmp, event, helper) {
     	cmp.set("v.current", Math.random());
    }
})