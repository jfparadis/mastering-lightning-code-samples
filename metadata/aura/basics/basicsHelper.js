({
    labels: {
    	rowTitle: "Basics {0}0{1} - {2}",
        rowUrl: "basics{0}0{1}.app",
    	prev: "◀ {0}",
    	next: "{0} ▶"
    },
    data: [{
        id: 1,
        title: "XML Component Definition",
		examples: [
			{ id: 1, title: "Lightning vs HTML tags" },
			{ id: 2, title: "Lightning vs Web Components" },
			{ id: 3, title: "Simple Parent & Simple Child" },
			{ id: 4, title: "Ignored Child" },
            { id: 5, title: "Counting components" },
			{ id: 6, title: "Using aura:if" },
			{ id: 7, title: "Using aura:renderIf" },
			{ id: 8, title: "Using aura:iteration" }
		]
    },{
        id: 2,
        title: "Styling Components",
		examples: [
			{ id: 1, title: "CSS in components" },
			{ id: 2, title: "Limits of CSS encapsulation" },
			{ id: 3, title: "Using SLDS" }
		]
    },{
        id: 3,
        title: "JS Controller and Helper",
		examples: [
			{ id: 1, title: "Simple MVC in Lightning" },
			{ id: 2, title: "Anchor onClick vs ui:button press" },
			{ id: 3, title: "Firing and handling events" }
		]
    },{
        id: 4,
        title: "Using Apex with Components",
		examples: [
			{ id: 1, title: "Apex Controller" },
			{ id: 2, title: "Action Control Flow" }
		]
    }],
    init: function(cmp, id) {
        var index = id - 1;
        if (index < 0 || index > this.data.length - 1) {
            return;
        }
        var data = this.data[index];

        cmp.set("v.id", data.id);
        cmp.set("v.title", data.title);
        cmp.set("v.examples", data.examples);

        cmp.set("v.prevTitle", index > 0 ? $A.util.format(this.labels.prev, this.data[index - 1].title) : "");
        cmp.set("v.nextTitle", index < this.data.length - 1 ? $A.util.format(this.labels.next, this.data[index + 1].title) : "");
    }
})