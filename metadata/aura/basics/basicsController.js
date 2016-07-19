({
	init: function(cmp, event, helper) {
        cmp.set("v.labels", helper.labels);
        var id = cmp.get("v.id");
        helper.init(cmp, id);
    },
    handleDialog: function(cmp, event, helper) {
        var id = cmp.get("v.id");
		var itemId = event.target.getAttribute("data-item-id");
		var itemTitle = event.target.getAttribute("data-item-title");
        var url = $A.util.format(helper.labels.rowUrl, id, itemId);
        var modal = cmp.find("modal");
        modal.set("v.title", itemTitle);
        modal.set("v.url", url);
    },
    handlePrevSection: function(cmp, event, helper) {
        var id = cmp.get("v.id");
        helper.init(cmp, id - 1);
	},
    handleNextSection: function(cmp, event, helper) {
        var id = cmp.get("v.id");
        helper.init(cmp, id + 1);
    }
})