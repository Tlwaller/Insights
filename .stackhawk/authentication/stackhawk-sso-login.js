var HttpRequestHeader = Java.type(
  'org.parosproxy.paros.network.HttpRequestHeader'
);
var HttpHeader = Java.type('org.parosproxy.paros.network.HttpHeader');
var URI = Java.type('org.apache.commons.httpclient.URI');
var AuthenticationHelper = Java.type(
  'org.zaproxy.zap.authentication.AuthenticationHelper'
);

function authenticate(helper, paramsValues, credentials) {
  print('SSO Auth...');

  //build request header
  var requestUri = new URI(paramsValues.get('url'), false);
  var requestMethod = HttpRequestHeader.POST;
  var requestHeader = new HttpRequestHeader(
    requestMethod,
    requestUri,
    HttpHeader.HTTP11
  );
  requestHeader.setHeader('Accept', 'application/json');
  requestHeader.setHeader('Content-Type', 'application/json');

  //build request body
  var username = credentials.getParam('username');
  var password = credentials.getParam('password');
  var requestMutation = `mutation Login { login(email: \\"${username}\\", password: \\"${password}\\", ) { accessToken } }`;
  var requestBody = `{"query": "${requestMutation}"}`;

  // build final post
  var msg = helper.prepareMessage();
  msg.setRequestHeader(requestHeader);
  msg.setRequestBody(requestBody.toString());
  print('MSG RH: ' + msg.requestHeader);
  print('MSG RB: ' + msg.requestBody);

  requestHeader.contentLength = msg.requestBody.length();

  //send message
  helper.sendAndReceive(msg);
  var rep = msg.getResponseBody().toString();
  print(rep);

  return msg;
}

function getRequiredParamsNames() {
  return ['url'];
}

function getOptionalParamsNames() {
  return [];
}

function getCredentialsParamsNames() {
  return ['username', 'password'];
}

