Feature: Create Account and login

Scenario Outline: create account to application

Given user should open link
Then click on accountand enter credentials "<SheetName>" and <RowNumber>
And click on submit
 
 Examples:
 |SheetName|RowNumber|
|CreateAccount|0|
 
Scenario Outline: login to applicaton and add to card

Given user should login to application 
Then enters credentials "<SheetName>" and <RowNumber>
And click on login
Then user mouseover to desktop and select mac
 

Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: login to application and checkout
Given user should login to application 
Then enters credentials "<SheetName>" and <RowNumber>
And click on login
And user search for item and add to cart

Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: login to application and checkout
Given user enters urls
Then user mouseover to laptop and select HP LP3065
And user changes delivery date
Then user Adds to cart and check out
And click on register account
Then enter manadatory fileds  "<SheetName>" and <RowNumber>
And user enters delivery methods
Then user confirms order and take screenshot



Examples:
|SheetName|RowNumber|
|PaymentReg|0|

Scenario Outline: login to application and checkout
Given user should login to application 
Then enters credentials "<SheetName>" and <RowNumber>
And click on login
Then user mouseover to laptop and select HP LP3065
And user changes delivery date
Then user Adds to cart and add coupon apply

Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: login to application and checkout
Given user should login to application 
Then enters credentials "<SheetName>" and <RowNumber>
And click on login
Then user going to shopping cart and estimate taxes
And enter details and click quote
Then flat shipping and scrrenshot
And billing details and continue
Then return to home page


Examples:
|SheetName|RowNumber|
|extralogin|0|
