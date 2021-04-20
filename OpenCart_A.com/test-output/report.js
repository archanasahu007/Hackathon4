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
  "duration": 396292400,
  "status": "passed"
});
formatter.before({
  "duration": 2592249500,
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
  "duration": 2652756700,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.home_page_validation()"
});
formatter.result({
  "duration": 9020300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Register()"
});
formatter.result({
  "duration": 3490562100,
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
  "duration": 8112258700,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.registration_should_be_successful_message_should_display()"
});
formatter.result({
  "duration": 12079700,
  "error_message": "java.lang.AssertionError: expected [Your Account Has Been Created!] but found [Register Account]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\r\n\tat org.testng.Assert.assertEquals(Assert.java:122)\r\n\tat org.testng.Assert.assertEquals(Assert.java:629)\r\n\tat org.testng.Assert.assertEquals(Assert.java:639)\r\n\tat opencartStepDefination.OpencartStepsTest.registration_should_be_successful_message_should_display(OpencartStepsTest.java:114)\r\n\tat ✽.Then Registration should be successful message should display(Opencart.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("TC001 Account creation");
formatter.after({
  "duration": 98652600,
  "status": "passed"
});
formatter.after({
  "duration": 633425400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "TC003 Login validation",
  "description": "",
  "id": "application-validation;tc003-login-validation",
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
  "line": 27,
  "name": "",
  "description": "",
  "id": "application-validation;tc003-login-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 28,
      "id": "application-validation;tc003-login-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 29,
      "id": "application-validation;tc003-login-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 497100,
  "status": "passed"
});
formatter.before({
  "duration": 1162664200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "TC003 Login validation",
  "description": "",
  "id": "application-validation;tc003-login-validation;;2",
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
  "duration": 3199414300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.home_page_validation()"
});
formatter.result({
  "duration": 6426500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 3504542500,
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
  "duration": 5573277500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 6898000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_laptop_and_Add_to_cart()"
});
formatter.result({
  "duration": 12101889000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.view_Cart_and_RemoveProduct()"
});
formatter.result({
  "duration": 7266060500,
  "status": "passed"
});
formatter.after({
  "duration": 24200,
  "status": "passed"
});
formatter.after({
  "duration": 642565000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "TC006 checkout product validation",
  "description": "",
  "id": "application-validation;tc006-checkout-product-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "checkout with Guest details from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "application-validation;tc006-checkout-product-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 39,
      "id": "application-validation;tc006-checkout-product-validation;;1"
    },
    {
      "cells": [
        "GuestDetails",
        "0"
      ],
      "line": 40,
      "id": "application-validation;tc006-checkout-product-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 888800,
  "status": "passed"
});
formatter.before({
  "duration": 1160635500,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "TC006 checkout product validation",
  "description": "",
  "id": "application-validation;tc006-checkout-product-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 36,
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
  "duration": 2608854400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.home_page_validation()"
});
formatter.result({
  "duration": 9241100,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_laptop_and_Add_to_cart()"
});
formatter.result({
  "duration": 11240246900,
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
  "duration": 17205115900,
  "status": "passed"
});
formatter.after({
  "duration": 36200,
  "status": "passed"
});
formatter.after({
  "duration": 648243400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "TC016 Return Product validation",
  "description": "",
  "id": "application-validation;tc016-return-product-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "application-validation;tc016-return-product-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 52,
      "id": "application-validation;tc016-return-product-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 53,
      "id": "application-validation;tc016-return-product-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 259600,
  "status": "passed"
});
formatter.before({
  "duration": 1152351200,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "TC016 Return Product validation",
  "description": "",
  "id": "application-validation;tc016-return-product-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 3211217300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 3677480200,
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
  "duration": 5521524700,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 6103400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_order_History_and_return_the_product()"
});
formatter.result({
  "duration": 10473172900,
  "status": "passed"
});
formatter.after({
  "duration": 13600,
  "status": "passed"
});
formatter.after({
  "duration": 623420400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "TC015 Add to wishlist validation",
  "description": "",
  "id": "application-validation;tc015-add-to-wishlist-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "application-validation;tc015-add-to-wishlist-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 65,
      "id": "application-validation;tc015-add-to-wishlist-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 66,
      "id": "application-validation;tc015-add-to-wishlist-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 677800,
  "status": "passed"
});
formatter.before({
  "duration": 1156681000,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "TC015 Add to wishlist validation",
  "description": "",
  "id": "application-validation;tc015-add-to-wishlist-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 2554188700,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 3593286900,
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
  "duration": 5480791600,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_product_and_add_to_wishlist()"
});
formatter.result({
  "duration": 11466685600,
  "status": "passed"
});
formatter.after({
  "duration": 25500,
  "status": "passed"
});
formatter.after({
  "duration": 633159900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 68,
  "name": "TC009 Upload file validation",
  "description": "",
  "id": "application-validation;tc009-upload-file-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Select a product from component and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Fill all the details and upload the file",
  "keyword": "And "
});
formatter.examples({
  "line": 78,
  "name": "",
  "description": "",
  "id": "application-validation;tc009-upload-file-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 79,
      "id": "application-validation;tc009-upload-file-validation;;1"
    },
    {
      "cells": [
        "Login",
        "0"
      ],
      "line": 80,
      "id": "application-validation;tc009-upload-file-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 245100,
  "status": "passed"
});
formatter.before({
  "duration": 1151461100,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "TC009 Upload file validation",
  "description": "",
  "id": "application-validation;tc009-upload-file-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "User fill the Login form from given sheetname \"Login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Select a product from component and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Fill all the details and upload the file",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 2492353000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 3510652100,
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
  "duration": 5514302800,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_product_from_component_and_add_to_cart()"
});
formatter.result({
  "duration": 4787676800,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.fill_all_the_details_and_upload_the_file()"
});
formatter.result({
  "duration": 746782500,
  "status": "passed"
});
formatter.after({
  "duration": 13200,
  "status": "passed"
});
formatter.after({
  "duration": 644827300,
  "status": "passed"
});
});