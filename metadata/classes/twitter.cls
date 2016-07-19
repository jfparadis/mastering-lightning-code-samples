public with sharing class twitter {
	public String consumerKey = '';
	public String consumerSecret = '';
	public String endpoint = 'https://api.twitter.com';
    public String statuses_endpoint = '/1.1/statuses/user_timeline.json';

	public string getScreenName(String screenName) {
        Map<String, String> args = new Map<String, String>();
        args.put('count', '100');
        args.put('screen_name', screenName);
		String result = proxyRequest('GET', statuses_endpoint, args);
        return result;
	}

    public string proxyRequest(String method, String service_endpoint, Map<String, Object> args) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(buildUrl(service_endpoint, args));
        req.setMethod(method);
        String bt = getBearerToken();
        if (bt != 'error') {
            req.setHeader('Authorization', 'Bearer ' + bt);
            Http h = new Http();
            HttpResponse response = h.send(req);
            System.debug(response.getBody());
            return response.getBody();
        } else {
            return null;
        }
    }

    public String buildUrl(String ep, Map<String, Object> args) {
        String url = endpoint + ep;
        String flattened_args = '';
        for (String key : args.keySet()) {
            flattened_args = flattened_args + '&' + key + '=' + (String)args.get(key);
        }
        return url + '?' + flattened_args;
    }
    public String getBearerToken() {
        HttpRequest req = new HttpRequest();
        req.setMethod('POST');
        req.setEndpoint(endpoint + '/oauth2/token');
        req.setHeader('Authorization', 'Basic ' + getToken());
        req.setHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        req.setHeader('host', 'api.twitter.com');
		req.setBody('grant_type=client_credentials');
        Http h = new Http();
        HttpResponse response = h.send(req);
        System.debug(req.getHeader('Authorization'));
        if (response.getStatusCode() == 200) {
            Map<String, Object> token = (Map<String, Object>)JSON.deserializeUntyped(response.getBody());
            return String.valueOf(token.get('access_token'));
        }
        return 'error';
    }

    public String getToken() {
        String encodedKey = EncodingUtil.urlEncode(consumerKey, 'utf-8');
		String encodedSecret = EncodingUtil.urlEncode(consumerSecret, 'utf-8');
        String bearerToken = encodedKey + ':' + encodedSecret;
        return EncodingUtil.base64Encode(Blob.valueOf(bearerToken));
    }
}