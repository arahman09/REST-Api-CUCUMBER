$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/GetSingleEmpInValid.feature");
formatter.feature({
  "name": "Rest API Test Invalid",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get Single Emp Info invalid GET Request",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "baseUrl and invalid resourcePath",
  "keyword": "Given "
});
formatter.match({
  "location": "GetSingleEmpInvalidCall.baseurl_and_resourcePath()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Make a invalid GET Call",
  "keyword": "When "
});
formatter.match({
  "location": "GetSingleEmpInvalidCall.make_a_invalid_GET_Call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive status code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "GetSingleEmpInvalidCall.i_should_receive_status_code()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/GetSingleEmpValid.feature");
formatter.feature({
  "name": "Rest API Test Valid",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get Single Emp Info valid GET Request",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "baseUrl and valid resourcePath",
  "keyword": "Given "
});
formatter.match({
  "location": "GetSingleEmpValidCall.baseurl_and_resourcePath()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Make a valid GET Call",
  "keyword": "When "
});
formatter.match({
  "location": "GetSingleEmpValidCall.make_a_invalid_GET_Call()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetSingleEmpValidCall.i_should_receive_status_code()"
});
formatter.result({
  "status": "passed"
});
});