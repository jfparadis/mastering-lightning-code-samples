({
    handleClick: function(cmp, event) {
        var log = [];
        if (event.fire) {
            // Aura:event
            log = [
                "Lightning event",
                "",
                "event.getName() = " + event.getName(),
                "event.getSource().getDef() = " + event.getSource().getDef(),
                "event.getSource().get('v.label') = " + event.getSource().get('v.label'),
                "",
                "event.getParam('domEvent').type = " + event.getParam('domEvent').type,
                "event.getParam('domEvent').currentTarget.tagName = " + event.getParam('domEvent').currentTarget.tagName,
                "event.getParam('domEvent').currentTarget.innerText = " + event.getParam('domEvent').currentTarget.innerText
            ];

        } else {
            // DOM event
            log = [
                "DOM event",
                "",
                "event.type = " + event.type,
                "event.currentTarget.tagName = " + event.currentTarget.tagName,
                "event.currentTarget.innerText = " + event.currentTarget.innerText
            ];
        }
        cmp.set("v.console", log.join("\n"));
    }
})