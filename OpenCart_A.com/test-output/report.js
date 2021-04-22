$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Opencart.feature");
formatter.feature({
  "line": 1,
  "name": "Application validation",
  "description": "",
  "id": "application-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TC001 Account creation",
  "description": "",
  "id": "application-validation;tc001-account-creation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on My account and Register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User fill the Register form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Registration should be successful message should display",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "application-validation;tc001-account-creation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 12,
      "id": "application-validation;tc001-account-creation;;1"
    },
    {
      "cells": [
        "AccountCreation",
        "0"
      ],
      "line": 13,
      "id": "application-validation;tc001-account-creation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1491400,
  "status": "passed"
});
formatter.before({
  "duration": 2433026800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "TC001 Account creation",
  "description": "",
  "id": "application-validation;tc001-account-creation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on My account and Register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User fill the Register form from given sheetname \"AccountCreation\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Registration should be successful message should display",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 1829051400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.home_page_validation()"
});
formatter.result({
  "duration": 12802500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Register()"
});
formatter.result({
  "duration": 3707836400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AccountCreation",
      "offset": 50
    },
    {
      "val": "0",
      "offset": 81
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Register_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 8402843300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.registration_should_be_successful_message_should_display()"
});
formatter.result({
  "duration": 8766100,
  "error_message": "java.lang.AssertionError: expected [Your Account Has Been Created!] but found [Register Account]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\r\n\tat org.testng.Assert.assertEquals(Assert.java:122)\r\n\tat org.testng.Assert.assertEquals(Assert.java:629)\r\n\tat org.testng.Assert.assertEquals(Assert.java:639)\r\n\tat opencartStepDefination.OpencartStepsTest.registration_should_be_successful_message_should_display(OpencartStepsTest.java:106)\r\n\tat ✽.Then Registration should be successful message should display(Opencart.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("TC001 Account creation");
formatter.after({
  "duration": 86721300,
  "status": "passed"
});
formatter.after({
  "duration": 632105900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "TC011 Login and Remove product validation",
  "description": "",
  "id": "application-validation;tc011-login-and-remove-product-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "View Cart and RemoveProduct",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "application-validation;tc011-login-and-remove-product-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 26,
      "id": "application-validation;tc011-login-and-remove-product-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 27,
      "id": "application-validation;tc011-login-and-remove-product-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 513800,
  "status": "passed"
});
formatter.before({
  "duration": 1152281300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TC011 Login and Remove product validation",
  "description": "",
  "id": "application-validation;tc011-login-and-remove-product-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "View Cart and RemoveProduct",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 1463448100,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.home_page_validation()"
});
formatter.result({
  "duration": 4272200,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 3555746400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 5553338800,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 10385500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_laptop_and_Add_to_cart()"
});
formatter.result({
  "duration": 10665746400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.view_Cart_and_RemoveProduct()"
});
formatter.result({
  "duration": 23013961600,
  "status": "passed"
});
formatter.after({
  "duration": 29200,
  "status": "passed"
});
formatter.after({
  "duration": 647948400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "TC006 checkout product validation",
  "description": "",
  "id": "application-validation;tc006-checkout-product-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "checkout with Guest details from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "application-validation;tc006-checkout-product-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 37,
      "id": "application-validation;tc006-checkout-product-validation;;1"
    },
    {
      "cells": [
        "GuestDetails",
        "0"
      ],
      "line": 38,
      "id": "application-validation;tc006-checkout-product-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 184100,
  "status": "passed"
});
formatter.before({
  "duration": 1153552600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "TC006 checkout product validation",
  "description": "",
  "id": "application-validation;tc006-checkout-product-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "checkout with Guest details from given sheetname \"GuestDetails\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 1524944800,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.home_page_validation()"
});
formatter.result({
  "duration": 4415500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_laptop_and_Add_to_cart()"
});
formatter.result({
  "duration": 10537244700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GuestDetails",
      "offset": 50
    },
    {
      "val": "0",
      "offset": 78
    }
  ],
  "location": "OpencartStepsTest.checkout_with_Guest_details_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 18057944900,
  "status": "passed"
});
formatter.after({
  "duration": 35900,
  "status": "passed"
});
formatter.after({
  "duration": 619428200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "TC016 Return Product validation",
  "description": "",
  "id": "application-validation;tc016-return-product-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "application-validation;tc016-return-product-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 50,
      "id": "application-validation;tc016-return-product-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 51,
      "id": "application-validation;tc016-return-product-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 243200,
  "status": "passed"
});
formatter.before({
  "duration": 1138307200,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "TC016 Return Product validation",
  "description": "",
  "id": "application-validation;tc016-return-product-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 42,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 1557404000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 3590542300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 5434549300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 7149300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_order_History_and_return_the_product()"
});
formatter.result({
  "duration": 10384288000,
  "status": "passed"
});
formatter.after({
  "duration": 13000,
  "status": "passed"
});
formatter.after({
  "duration": 611137800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "TC015 Add to wishlist validation",
  "description": "",
  "id": "application-validation;tc015-add-to-wishlist-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "application-validation;tc015-add-to-wishlist-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 61,
      "id": "application-validation;tc015-add-to-wishlist-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 62,
      "id": "application-validation;tc015-add-to-wishlist-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 169300,
  "status": "passed"
});
formatter.before({
  "duration": 1145887200,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "TC015 Add to wishlist validation",
  "description": "",
  "id": "application-validation;tc015-add-to-wishlist-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 1471005900,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 3492218600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 5496493600,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_product_and_add_to_wishlist()"
});
formatter.result({
  "duration": 10683160500,
  "status": "passed"
});
formatter.after({
  "duration": 12300,
  "status": "passed"
});
formatter.after({
  "duration": 625592400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "TC009 Upload file validation",
  "description": "",
  "id": "application-validation;tc009-upload-file-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 66,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select a product from component and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Fill all the details and upload the file",
  "keyword": "And "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "application-validation;tc009-upload-file-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 73,
      "id": "application-validation;tc009-upload-file-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 74,
      "id": "application-validation;tc009-upload-file-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 344300,
  "status": "passed"
});
formatter.before({
  "duration": 1155098000,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "TC009 Upload file validation",
  "description": "",
  "id": "application-validation;tc009-upload-file-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 66,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select a product from component and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Fill all the details and upload the file",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 1624468900,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 3610195600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 5504724300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_product_from_component_and_add_to_cart()"
});
formatter.result({
  "duration": 3844276300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.fill_all_the_details_and_upload_the_file()"
});
formatter.result({
  "duration": 777406800,
  "status": "passed"
});
formatter.after({
  "duration": 12800,
  "status": "passed"
});
formatter.after({
  "duration": 628210600,
  "status": "passed"
});
});