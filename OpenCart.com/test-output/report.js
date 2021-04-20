$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Opencart.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account and login",
  "description": "",
  "id": "create-account-and-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario Outline: create account to application"
    },
    {
      "line": 5,
      "value": "#Given user should open link"
    },
    {
      "line": 6,
      "value": "#Then click on accountand enter credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e"
    },
    {
      "line": 7,
      "value": "#And click on submit"
    },
    {
      "line": 9,
      "value": "# Examples:"
    },
    {
      "line": 10,
      "value": "# |SheetName|RowNumber|"
    },
    {
      "line": 11,
      "value": "#|CreateAccount|0|"
    },
    {
      "line": 13,
      "value": "#Scenario Outline: login to applicaton and add to card"
    },
    {
      "line": 15,
      "value": "#Given user should login to application"
    },
    {
      "line": 16,
      "value": "#Then enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e"
    },
    {
      "line": 17,
      "value": "#And click on login"
    },
    {
      "line": 18,
      "value": "#Then user mouseover to desktop and select mac"
    },
    {
      "line": 21,
      "value": "#Examples:"
    },
    {
      "line": 22,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 23,
      "value": "#|login|0|"
    },
    {
      "line": 25,
      "value": "#Scenario Outline: login to application and checkout"
    },
    {
      "line": 26,
      "value": "#Given user should login to application"
    },
    {
      "line": 27,
      "value": "#Then enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e"
    },
    {
      "line": 28,
      "value": "#And click on login"
    },
    {
      "line": 29,
      "value": "#And user search for item and add to cart"
    },
    {
      "line": 31,
      "value": "#Examples:"
    },
    {
      "line": 32,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 33,
      "value": "#|login|0|"
    },
    {
      "line": 35,
      "value": "#Scenario Outline: login to application and checkout"
    },
    {
      "line": 36,
      "value": "#Given user enters urls"
    },
    {
      "line": 37,
      "value": "#Then user mouseover to laptop and select HP LP3065"
    },
    {
      "line": 38,
      "value": "#And user changes delivery date"
    },
    {
      "line": 39,
      "value": "#Then user Adds to cart and check out"
    },
    {
      "line": 40,
      "value": "#And click on register account"
    },
    {
      "line": 41,
      "value": "#Then enter manadatory fileds  \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e"
    },
    {
      "line": 42,
      "value": "#And user enters delivery methods"
    },
    {
      "line": 43,
      "value": "#Then user confirms order and take screenshot"
    },
    {
      "line": 47,
      "value": "#Examples:"
    },
    {
      "line": 48,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 49,
      "value": "#|PaymentReg|0|"
    },
    {
      "line": 51,
      "value": "#Scenario Outline: login to application and checkout"
    },
    {
      "line": 52,
      "value": "#Given user should login to application"
    },
    {
      "line": 53,
      "value": "#Then enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e"
    },
    {
      "line": 54,
      "value": "#And click on login"
    },
    {
      "line": 55,
      "value": "#Then user mouseover to laptop and select HP LP3065"
    },
    {
      "line": 56,
      "value": "#And user changes delivery date"
    },
    {
      "line": 57,
      "value": "#Then user Adds to cart and add coupon apply"
    },
    {
      "line": 59,
      "value": "#Examples:"
    },
    {
      "line": 60,
      "value": "#|SheetName|RowNumber|"
    },
    {
      "line": 61,
      "value": "#|login|0|"
    }
  ],
  "line": 63,
  "name": "login to application and checkout",
  "description": "",
  "id": "create-account-and-login;login-to-application-and-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user going to shopping cart and estimate taxes",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "enter details and click quote",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "flat shipping and scrrenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "billing details and continue",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "return to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "create-account-and-login;login-to-application-and-checkout;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 75,
      "id": "create-account-and-login;login-to-application-and-checkout;;1"
    },
    {
      "cells": [
        "extralogin",
        "0"
      ],
      "line": 76,
      "id": "create-account-and-login;login-to-application-and-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3730300,
  "status": "passed"
});
formatter.before({
  "duration": 9767010500,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "login to application and checkout",
  "description": "",
  "id": "create-account-and-login;login-to-application-and-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "enters credentials \"extralogin\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user going to shopping cart and estimate taxes",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "enter details and click quote",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "flat shipping and scrrenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "billing details and continue",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "return to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_login_to_application()"
});
formatter.result({
  "duration": 4305119200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extralogin",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 36
    }
  ],
  "location": "OpencartStepsTest.enters_credentials_and(String,int)"
});
formatter.result({
  "duration": 6274526900,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_login()"
});
formatter.result({
  "duration": 2660415000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_going_to_shopping_cart_and_estimate_taxes()"
});
formatter.result({
  "duration": 2151918200,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.enter_details_and_click_quote()"
});
formatter.result({
  "duration": 1360656500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.flat_shipping_and_scrrenshot()"
});
formatter.result({
  "duration": 6432916700,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.billing_details_and_continue()"
});
formatter.result({
  "duration": 13646704900,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.return_to_home_page()"
});
formatter.result({
  "duration": 3319273600,
  "status": "passed"
});
});