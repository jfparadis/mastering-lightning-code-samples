({
	initialize: function(component, event, helper) {
		var tweet = component.get("v.tweet");
		var body = tweet.text;
		var parsed = helper.parseAtMentions(body);
		component.set("v.body", parsed);
		component.set("v.timesince", helper.getTimeSince(new Date(tweet.created_at)));
	}
})