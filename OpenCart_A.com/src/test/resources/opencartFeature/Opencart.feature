Feature: Application validation
 
  Scenario Outline: TC001 Account creation 
  
    Given Navigate to Cart URL
    When Home page validation
    Then User click on My account and Register 
    And User fill the Register form from given sheetname "<SheetName>" and rownumber <RowNumber>
    Then Registration should be successful message should display
    
 Examples:
|SheetName|RowNumber|
|AccountCreation|0|

 Scenario Outline: TC003 Login validation
  
    Given Navigate to Cart URL
    When Home page validation
    Then User click on My account and Login 
    And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
    Then User should be logged in successfully
    And select a product and Add to cart
    Then View Cart and RemoveProduct
   
 Examples:
|SheetName|RowNumber|
|Login|0|

Scenario Outline: TC006 checkout product validation
  
    Given Navigate to Cart URL
    When Home page validation
    And select a product and Add to cart
    Then checkout with Guest details from given sheetname "<SheetName>" and rownumber <RowNumber>
    
 Examples:
|SheetName|RowNumber|
|GuestDetails|0|

 Scenario Outline: TC016 Return Product validation
  
    Given Navigate to Cart URL
    Then User click on My account and Login 
    And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
    Then User should be logged in successfully
    And Navigate to order History and return the product
    
    
 Examples:
|SheetName|RowNumber|
|Login|0|

Scenario Outline: TC015 Add to wishlist validation
  
    Given Navigate to Cart URL
    Then User click on My account and Login 
    And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
    Then Select a product and add to wishlist
    
 Examples:
|SheetName|RowNumber|
|Login|0|

Scenario Outline: TC009 Upload file validation
  
    Given Navigate to Cart URL
    Then User click on My account and Login 
    And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
    Then Select a product from component and add to cart
    And Fill all the details and upload the file
    
Examples:
|SheetName|RowNumber|
|Login|0|
    