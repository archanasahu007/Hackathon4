package opencartStepDefination;

import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.Listeners;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import opencartDataFactory.OpencartDataFactory;
import opencartDataProvider.OpencartConfigReader;
import opencartPages.OpenCartProduct;
import opencartPages.OpencartAccountPage;
import opencartPages.OpencartLoginPage;
import opencartPages.OpencartViewCart;
import opencartPages.OrderHistoryPage;
import opencartUtils.OpencartExcelReader;


public class OpencartStepsTest {
	
	
	WebDriver driver;
	OpencartConfigReader configReader;
	Properties prop;
	WebDriverWait wait;
	OpencartDataFactory driverFactory;
	OpencartAccountPage myAccount;
	OpencartLoginPage log;
	OpenCartProduct selproduct;
	OpencartViewCart mycart;
	OrderHistoryPage orderReturn;
	
	@Before(order = 0)
	public void getProperty() {
		configReader = new OpencartConfigReader();
		prop = configReader.init_prop();
	}

	@Before(order = 1)
	public void launchBrowser() {
		String browserName = prop.getProperty("browser");
		driverFactory = new OpencartDataFactory();
		driver = driverFactory.init_driver(browserName);
		
	}
	
	@Given("^Navigate to Cart URL$")
	public void navigate_to_Cart_URL() throws Throwable {
		String url = prop.getProperty("url2");
		driver.get(url);
		driver.manage().window().maximize();
	}

	@When("^Home page validation$")
	public void home_page_validation() throws Throwable {
		
		String ExpectedTitle = "Your Store";
		String ActualTitle = driver.getTitle();
		Assert.assertEquals(ActualTitle, ExpectedTitle);
		Reporter.log(ActualTitle);
	 
	}

	@Then("^User click on My account and Register$")
	public void user_click_on_My_account_and_Register() throws Throwable {
		myAccount = new OpencartAccountPage(driver);
		myAccount.buttonClick();
	    
	}

	@Then("^User fill the Register form from given sheetname \"(.*?)\" and rownumber (\\d+)$")
	public void user_fill_the_Register_form_from_given_sheetname_and_rownumber(String sheetName, int rowNumber) throws Throwable {
		
		OpencartExcelReader reader = new OpencartExcelReader();
		List<Map<String,String>> testData = 
				reader.getData("C:\\Users\\sahua\\OneDrive\\Desktop\\MyCart.xlsx", sheetName);
		
		String FN = testData.get(rowNumber).get("FirstName");
		String LN = testData.get(rowNumber).get("LastName");
		String email = testData.get(rowNumber).get("Email");
		String PhnNo = testData.get(rowNumber).get("Telephone");
		String pwd = testData.get(rowNumber).get("Password");
		String confirmpwd = testData.get(rowNumber).get("PasswordConfirm");
		
		myAccount.Register(FN,LN,email,PhnNo,pwd, confirmpwd);
		
		 Thread.sleep(2000);
	    
	}

	@Then("^Registration should be successful message should display$")
	public void registration_should_be_successful_message_should_display() throws Throwable {
		
		String ExpectedTitle = "Your Account Has Been Created!";
		String ActualTitle = driver.getTitle();
		Assert.assertEquals(ActualTitle, ExpectedTitle);
	   
	}
	
	@Then("^User click on My account and Login$")
	public void user_click_on_My_account_and_Login() throws Throwable {
		
	    log = new OpencartLoginPage(driver);
	    log.clickLogin();
		
	}

	@Then("^User fill the Login form from given sheetname \"(.*?)\" and rownumber (\\d+)$")
	public void user_fill_the_Login_form_from_given_sheetname_and_rownumber(String sheetName, int rowNumber) throws Throwable {
		OpencartExcelReader reader = new OpencartExcelReader();
		List<Map<String,String>> testData = 
				reader.getData("C:\\Users\\sahua\\OneDrive\\Desktop\\MyCart.xlsx", sheetName);
		
		String emailid = testData.get(rowNumber).get("Email");
		String password = testData.get(rowNumber).get("Password");
		
		log.login(emailid, password);
		Thread.sleep(2000);
	}

	@Then("^User should be logged in successfully$")
	public void user_should_be_logged_in_successfully() throws Throwable {
		
		String ExpTitle = "My Account";
		String ActTitle = driver.getTitle();
		Assert.assertEquals(ActTitle, ExpTitle);
	    
	}

   @Then("^select a product and Add to cart$")
   public void select_a_laptop_and_Add_to_cart() throws Throwable {
	   
	   selproduct = new OpenCartProduct(driver);
	   selproduct.selectProduct();
	   selproduct.AddToCart();
	   
	   
    }
   
   @Then("^View Cart and RemoveProduct$")
   public void view_Cart_and_RemoveProduct() throws Throwable {
	   mycart = new OpencartViewCart(driver);
	   mycart.RemoveItemAndContinue();
   }
   
   @Then("^checkout with Guest details from given sheetname \"([^\"]*)\" and rownumber (\\d+)$")
   public void checkout_with_Guest_details_from_given_sheetname_and_rownumber(String sheetName, int rowNumber) throws Throwable {
	   
	   OpencartExcelReader reader = new OpencartExcelReader();
		List<Map<String,String>> testData = 
				reader.getData("C:\\Users\\sahua\\OneDrive\\Desktop\\MyCart.xlsx", sheetName);
		
		mycart = new OpencartViewCart(driver);
		
		String fstName = testData.get(rowNumber).get("FirstName");
		String lstname = testData.get(rowNumber).get("LastName");
		String email = testData.get(rowNumber).get("Email");
		String phn = testData.get(rowNumber).get("Telephone");
		String company = testData.get(rowNumber).get("Company");
		String add1 = testData.get(rowNumber).get("Address1");
		String add2 = testData.get(rowNumber).get("Address2");
		String city = testData.get(rowNumber).get("city");
		String postal = testData.get(rowNumber).get("postalcode");
		
		mycart.GuestcheckOut();
		mycart.BillingDetails(fstName, lstname, email, phn, company, add1, add2, city, postal);
		mycart.confirmOrder();

   }
   
   @Then("^Navigate to order History and return the product$")
   public void navigate_to_order_History_and_return_the_product() throws Throwable {
       
	  orderReturn = new OrderHistoryPage(driver);
	  orderReturn.ViewOrderHistory();
	  orderReturn.ReturnProduct();
   }
   
   @Then("^Select a product and add to wishlist$")
   public void select_a_product_and_add_to_wishlist() throws Throwable {
	   
	   selproduct = new OpenCartProduct(driver);
	   selproduct.selectProductToWishlist();
       
   }
   
   @Then("^Select a product from component and add to cart$")
   public void select_a_product_from_component_and_add_to_cart() throws Throwable {
	   selproduct = new OpenCartProduct(driver);
	   selproduct.SelectProductfromCompenent();
     
   }

   @Then("^Fill all the details and upload the file$")
   public void fill_all_the_details_and_upload_the_file() throws Throwable {
	   selproduct = new OpenCartProduct(driver);
	   selproduct.FillProductDetails();
   }

   
   
   @After(order = 0)
	public void quitBrowser() {
		driver.quit();
	}

	@After(order = 1)
	public void embedScreenshot(Scenario scenario) throws Exception {
	    if (scenario.isFailed()) {
	        try {
	            byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	            String testName = scenario.getName();
	            scenario.embed(screenshot, "image/png");
	            scenario.write(testName);
	        } catch (WebDriverException wde) {
	           System.err.println(wde.getMessage());
	        } catch (ClassCastException cce) {
	            cce.printStackTrace();}
	        }
	    }
  

}
