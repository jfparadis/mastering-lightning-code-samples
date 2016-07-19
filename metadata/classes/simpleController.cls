public class simpleController {
    
    @AuraEnabled
    public static String getTweets(String screenName) {
        twitter tweeter = new twitter();
        String jsonTweets;
        try {
            jsonTweets = tweeter.getScreenName(screenName);
        } catch(Exception e) {}
        return jsonTweets;
    }
}