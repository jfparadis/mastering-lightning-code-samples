({
    doForeground: function(cmp, event, helper) {

        helper.echo(cmp, 'Foreground #1');
        helper.echo(cmp, 'Foreground #2');
    },
    doBackground: function(cmp, event, helper) {

        helper.echo(cmp, 'Background #1', function(action) {
            action.setBackground();
        });
        helper.echo(cmp, 'Background #2', function(action) {
            action.setBackground();
        });
    },
    doStorable: function(cmp, event, helper) {

        helper.echo(cmp, 'Storable #1', function(action) {
            action.setStorable();
        });
        helper.echo(cmp, 'Storable #2', function(action) {
            action.setStorable();
        });
    },
    doAbortable: function(cmp, event, helper) {

        helper.echo(cmp, 'Abortable #1', function(action) {
            action.setAbortable();
        });
        helper.echo(cmp, 'Abortable #2', function(action) {
            action.setAbortable();
        });
    },
    doClear: function(cmp, event, helper) {
        helper.clear(cmp);
    }
})