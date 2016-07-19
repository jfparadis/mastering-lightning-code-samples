public class echoController {
    @AuraEnabled
    public static String echo(String message) {
    	return message;
    }
}