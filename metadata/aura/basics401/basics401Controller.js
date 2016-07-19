({
	init: function(cmp) {
        var action = cmp.get('{!c.getTweets}');
        action.setParams( {
            screenName: cmp.get("v.screen_name")
        });
        action.setCallback(cmp, function(response) {
        	if (response.getState() === 'SUCCESS') {
        		var results = response.getReturnValue();
                cmp.set("v.tweets", JSON.parse(results));
        	}
        });
        $A.enqueueAction(action);
	},

    showMore: function(cmp) {
        var page = cmp.get('v.page');

        var action = cmp.get('{!c.nextPage}');

        action.setParams({
            page: page
        });

        action.setCallback(cmp, function(response) {
            if (response.getState() === 'SUCCESS') {

                var results = response.getReturnValue();
                var tweets = cmp.get('m.tweets');
                cmp.set('m.tweets', tweets.concat(results));
                cmp.set('v.page', page + 1);

            } else {
                console.log(response.getError());
            }
        });

        $A.enqueueAction(action);
    }
})