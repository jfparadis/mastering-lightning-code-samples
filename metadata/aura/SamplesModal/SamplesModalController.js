({
	handleOpen : function(cmp, event, helper) {
		var url = cmp.get("v.url");
		window.open(url);
		cmp.set("v.title", null);
		cmp.set("v.url", null);
    },
	handleDismiss : function(cmp, event, helper) {
		cmp.set("v.title", null);
		cmp.set("v.url", null);
	}
})