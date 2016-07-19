({
	parseAtMentions: function(text) {
		var words = text.split(" ");
		var results = [];
		var t = "";
		for (var i=0;i<words.length;i++) {
			if (words[i].indexOf("@") !== -1 ) {
				results.push({ "type": "text", "value": t });
				results.push({ "type": "mention", "value": words[i] + " " });
				t = "";
			} else {
				t.length === 0 ? t = t + words[i] : t = t + " " + words[i];
			}
		}
		results.push({ "type": "text", "value": t });
		return results;
	},

	getTimeSince: function(date) {
		var seconds = Math.floor((new Date() - date) / 1000);

	    var interval = Math.floor(seconds / 31536000);

	    if (interval > 1) {
	        return interval + " years";
	    }
	    interval = Math.floor(seconds / 2592000);
	    if (interval > 1) {
	        return interval + " months";
	    }
	    interval = Math.floor(seconds / 86400);
	    if (interval > 1) {
	        return interval + " days";
	    }
	    interval = Math.floor(seconds / 3600);
	    if (interval > 1) {
	        return interval + " hours";
	    }
	    interval = Math.floor(seconds / 60);
	    if (interval > 1) {
	        return interval + " minutes";
	    }
	    return Math.floor(seconds) + " seconds";
	}
})