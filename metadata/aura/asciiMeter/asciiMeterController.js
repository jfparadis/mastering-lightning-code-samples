({
	handleValue : function(cmp, event, helper) {
		var value = cmp.get("v.value");
		var max = cmp.get("v.max");
		var current = Math.floor(value * max) || 0;

		var symbol = cmp.get("v.symbol");
        var bar = Array(current + 1).join(symbol);
		cmp.find("content").set("v.value", bar)
    }
})