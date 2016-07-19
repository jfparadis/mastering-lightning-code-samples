({
    isFunction: function(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    echo: function(cmp, message, callback) {
        var action = cmp.get('{!c.echo}');
        action.setParams({
            message: message
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            var text = response.getReturnValue();
            var echoes = cmp.get('v.echoes');
            echoes.unshift({
                text: text,
                state: state,
                listener: text.indexOf("#1") !== -1 ? 1 : 2
            });
            cmp.set('v.echoes', echoes);

        });

        if (this.isFunction(callback)) {
            callback(action);
        }

        $A.enqueueAction(action);
    },
    clear: function(cmp) {
        cmp.set('v.echoes', []);
    }
})