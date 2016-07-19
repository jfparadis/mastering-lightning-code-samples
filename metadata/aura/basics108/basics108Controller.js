({
    doToggle: function(cmp) {
        var items = cmp.get('v.items');
        items.reverse();
        cmp.set('v.items', items);
    }
})