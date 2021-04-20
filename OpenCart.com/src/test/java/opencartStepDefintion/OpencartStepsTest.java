package opencartStepDefintion;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterTest;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import opencartDataFactory.OpencartDataFactory;
import opencartDataProvider.OpencartConfigReader;
import opencartPages.createaccount;
import opencartPages.loginaccount;
import opencartPages.paymentregistration;
import opencartUtils.OpencartExcelReader;



public class OpencartStepsTest {
	
	WebDriver driver;
	
	OpencartConfigReader configfile;
	Properties prop;
	OpencartDataFactory DriverFactory;
	
	@Before(order = 0)
    public void getProperty() {
		configfile = new OpencartConfigReader();
        prop = configfile.init_prop();
    }

 

    @Before(order = 1)
    public void launchBrowser() {
        String browserName = prop.getProperty("browser");
        DriverFactory = new OpencartDataFactory();
        driver = DriverFactory.init_driver(browserName);
        
    }
	
	@Given("^user should open link$")
	public void user_should_open_link() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
        
       
        driver.get(prop.getProperty("url"));
	}

	@Then("^click on accountand enter credentials \"([^\"]*)\" and (\\d+)$")
	public void click_on_accountand_enter_credentials_and(String SheetName, int RowNumber) throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("MyAccount_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("Register_button_xpath"))).click();
		OpencartExcelReader reader=new OpencartExcelReader();
		createaccount create=new createaccount(driver);
		List<Map<String,String>> testData =reader.getData("C:\\Users\\Sangeetha S K\\Desktop\\opencartlogin.xlsx", SheetName);
		String firstname =testData.get(RowNumber).get("FirstName");
		String lastname =testData.get(RowNumber).get("LastName");
		String emailaddress =testData.get(RowNumber).get("EmailAddress");
		String telephone =testData.get(RowNumber).get("Telephone");
		String password =testData.get(RowNumber).get("Password");
		String confirmpassword =testData.get(RowNumber).get("ConfirmPassword");

		create.fillCreateaccountForm(firstname, lastname, emailaddress, telephone, password, confirmpassword);
	}

	@And("^click on submit$")
	public void click_on_submit() throws Throwable {
	   createaccount click=new createaccount(driver);
	   click.ClickSubmit();
	}

	@Given("^user should login to application$")
	public void user_should_login_to_application() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
        
       
       driver.get(prop.getProperty("url"));
	}

	@Then("^enters credentials \"([^\"]*)\" and (\\d+)$")
	public void enters_credentials_and(String SheetName, int RowNumber) throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("MyAccount_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("home_login_button_xpath"))).click();
		OpencartExcelReader reader=new OpencartExcelReader();
		loginaccount login=new loginaccount(driver);
		List<Map<String,String>> testData =reader.getData("C:\\Users\\Sangeetha S K\\Desktop\\opencartlogin.xlsx", SheetName);
		String Username =testData.get(RowNumber).get("EmailUsername");
		String loginpassword =testData.get(RowNumber).get("Password");
		
		login.Enterlogindetails(Username, loginpassword);
		
	}

	@And("^click on login$")
	public void click_on_login() throws Throwable {
		loginaccount loginbutton=new loginaccount(driver);
		loginbutton.ClickLogin();
	}

	
	@Then("^user mouseover to desktop and select mac$")
	public void user_mouseover_to_desktop_and_select_mac() throws Throwable {
	WebElement ele=  driver.findElement(By.xpath(prop.getProperty("Mouseover_desktop_xpath")));
	Actions act =new Actions( driver);
	act.moveToElement(ele).perform();
	 driver.findElement(By.xpath(prop.getProperty("Mouseover_desktop_xpath"))).click();
	 driver.findElement(By.xpath(prop.getProperty("Mac_select_xpath"))).click();
	 JavascriptExecutor jsscriprt = (JavascriptExecutor)  driver;
	 jsscriprt.executeScript("window.scrollBy(5,300)");
     driver.findElement(By.xpath(prop.getProperty("Imac_product_xpath"))).click();
     JavascriptExecutor js = (JavascriptExecutor)  driver;
     js.executeScript("window.scrollBy(5,500)");
     driver.findElement(By.xpath(prop.getProperty("Mac_add_to_cart_xpath"))).click();
    Thread.sleep(1000);
    File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    File dest = new File(("C:\\Users\\Sangeetha S K\\eclipse-workspace\\OpenCart.com\\screenshots\\")+"product added successfully.screenshot"+ ".png");
    FileUtils.copyFile(scr, dest);
	}
        
	@Then("^user search for item and add to cart$")
	public void user_search_for_item_and_add_to_cart() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("search_iteam_xpath"))).sendKeys("iphone");
		driver.findElement(By.xpath(prop.getProperty("search_ion_xpath"))).click();
		JavascriptExecutor js = (JavascriptExecutor)  driver;
	     js.executeScript("window.scrollBy(5,500)");
	     driver.findElement(By.xpath(prop.getProperty("select_iphone_xpath"))).click();
	     WebElement Quantity = driver.findElement(By.xpath(prop.getProperty("enter_quantity_xpath")));
	     Quantity.clear();
	     driver.findElement(By.xpath(prop.getProperty("enter_quantity_xpath"))).sendKeys("2");
	     driver.findElement(By.xpath(prop.getProperty("Mac_add_to_cart_xpath"))).click();
	     driver.findElement(By.xpath(prop.getProperty("click_cart_items"))).click();
	     driver.findElement(By.xpath(prop.getProperty("checkout_cart_xpath"))).click();
	     Thread.sleep(1000);
	     File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	     File dest = new File(("C:\\Users\\Sangeetha S K\\eclipse-workspace\\OpenCart.com\\screenshots\\")+"product not available.screenshot"+ ".png");
	     FileUtils.copyFile(scr, dest);
	     
	}
	@Given("^user enters urls$")
	public void user_enters_urls() throws Throwable {
		driver.get(prop.getProperty("url"));
	}

	@Then("^user mouseover to laptop and select HP LP(\\d+)$")
	public void user_mouseover_to_laptop_and_select_HP_LP(int arg1) throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("laptop_notebook_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("showall_lap_note_xpath"))).click();
		JavascriptExecutor js = (JavascriptExecutor)  driver;
	     js.executeScript("window.scrollBy(5,500)");
	     driver.findElement(By.xpath(prop.getProperty("HpLp3065_xpath"))).click();
	     
	     
	}

	@Then("^user changes delivery date$")
	public void user_changes_delivery_date() throws Throwable {
		JavascriptExecutor down = (JavascriptExecutor)  driver;
	     down.executeScript("window.scrollBy(5,500)");
	     WebElement Quantity = driver.findElement(By.xpath(prop.getProperty("delivery_date_xpath")));
	     Quantity.clear();
	     driver.findElement(By.xpath(prop.getProperty("delivery_date_xpath"))).sendKeys("2020-04-20");
	       
	}

	@Then("^user Adds to cart and check out$")
	public void user_Adds_to_cart_and_check_out() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("add_to_cart_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("click_cart_items"))).click();
		driver.findElement(By.xpath(prop.getProperty("shopping_cart_xpath"))).click();
		WebDriverWait wait = new WebDriverWait(driver,60);
	     wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("checkout_button_xpath")))));
		JavascriptExecutor drop = (JavascriptExecutor)  driver;
		drop.executeScript("window.scrollBy(5,500)");
	    driver.findElement(By.xpath(prop.getProperty("checkout_button_xpath"))).click();
		
	}

	@Then("^click on register account$")
	public void click_on_register_account() throws Throwable {
		JavascriptExecutor down = (JavascriptExecutor)  driver;
	     down.executeScript("window.scrollBy(5,250)");
	     WebDriverWait wait = new WebDriverWait(driver,60);
	     wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("click_continue_xpath")))));
		driver.findElement(By.xpath(prop.getProperty("click_continue_xpath"))).click();
			
	    
	}

	@Then("^enter manadatory fileds  \"([^\"]*)\" and (\\d+)$")
	public void enter_manadatory_fileds_and(String SheetName, int RowNumber) throws Throwable {
		OpencartExcelReader reader=new OpencartExcelReader();
		paymentregistration paymentreg=new paymentregistration(driver);
		List<Map<String,String>> testData =reader.getData("C:\\Users\\Sangeetha S K\\Desktop\\opencartlogin.xlsx", SheetName);
		String Firstname =testData.get(RowNumber).get("Firstname");
		String Lastname =testData.get(RowNumber).get("Lastname");
		String emailadd =testData.get(RowNumber).get("emailaddress");
		String telephone =testData.get(RowNumber).get("telephone");
		String password =testData.get(RowNumber).get("password");
		String confirmpassword =testData.get(RowNumber).get("confirmpassword");
		String company =testData.get(RowNumber).get("company");
		String address =testData.get(RowNumber).get("address1");
		String city =testData.get(RowNumber).get("city");
		String postcode =testData.get(RowNumber).get("postcode");
	
		paymentreg.fillpaymentregistration(Firstname, Lastname, emailadd, telephone, password, confirmpassword, company, address, city, postcode);
		
		Select drpCountry = new Select(driver.findElement(By.xpath(prop.getProperty("payment_reg_country_xpath"))));
		drpCountry.selectByVisibleText("India");
		
		Select paymentCountry = new Select(driver.findElement(By.xpath(prop.getProperty("payment_reg_paymentzone_xpath"))));
		
	
		paymentCountry.selectByVisibleText("Goa");
		
		paymentreg.Clickcontinue();
		
	}

	@Then("^user enters delivery methods$")
	public void user_enters_delivery_methods() throws Throwable {
		
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		WebDriverWait wait = new WebDriverWait(driver,20);
	 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shipping_xpath"))));
	 
	 driver.findElement(By.xpath(prop.getProperty("continue_shipping_xpath"))).click();
	}

	@Then("^user confirms order and take screenshot$")
	public void user_confirms_order_and_take_screenshot() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver,20);
		 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))));
		driver.findElement(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))).click();
		WebDriverWait time = new WebDriverWait(driver,20);
		time.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
		driver.findElement(By.xpath(prop.getProperty("check_cashondev_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("continue_method_xpath"))).click();
		WebDriverWait confirm = new WebDriverWait(driver,20);
		confirm.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
		driver.findElement(By.xpath(prop.getProperty("confirm_button_xpath"))).click();
		Thread.sleep(1000);
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	     File dest = new File(("C:\\Users\\Sangeetha S K\\eclipse-workspace\\OpenCart.com\\screenshots\\")+"confirmorder.screenshot"+ ".png");
	     FileUtils.copyFile(scr, dest);
	     
	}
	@Then("^user Adds to cart and add coupon apply$")
	public void user_Adds_to_cart_and_add_coupon_apply() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("add_to_cart_xpath"))).click();
		
		driver.findElement(By.xpath(prop.getProperty("shopping_cart_xpath"))).click();
		JavascriptExecutor down = (JavascriptExecutor)  driver;
	     down.executeScript("window.scrollBy(5,250)");
		driver.findElement(By.xpath(prop.getProperty("coupon_xpath"))).click();
		WebDriverWait wait = new WebDriverWait(driver,20);
		 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("enter_coupon_xpath"))));
		driver.findElement(By.xpath(prop.getProperty("enter_coupon_xpath"))).sendKeys("ASHR1014");
		
		driver.findElement(By.xpath(prop.getProperty("apply_coupon_xpath"))).click();
		
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	     File dest = new File(("C:\\Users\\Sangeetha S K\\eclipse-workspace\\OpenCart.com\\screenshots\\")+"applycouponerror.screenshot"+ ".png");
	     FileUtils.copyFile(scr, dest);
	}
	
	@Then("^user going to shopping cart and estimate taxes$")
	public void user_going_to_shopping_cart_and_estimate_taxes() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("shopping_cart_xpath"))).click();
		JavascriptExecutor down = (JavascriptExecutor)  driver;
	     down.executeScript("window.scrollBy(5,250)");
	     driver.findElement(By.xpath(prop.getProperty("estimate_order_xpath"))).click();
	     
	}

	@And("^enter details and click quote$")
	public void enter_details_and_click_quote() throws Throwable {
	   
		JavascriptExecutor drop = (JavascriptExecutor)  driver;
		drop.executeScript("window.scrollBy(5,500)");
		WebDriverWait wait = new WebDriverWait(driver,20);
		 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("estimate_country_xpath"))));
		Select drpCountry = new Select(driver.findElement(By.xpath(prop.getProperty("estimate_country_xpath"))));
		drpCountry.selectByVisibleText("India");
		Select paymentCountry = new Select(driver.findElement(By.xpath(prop.getProperty("estimate_state_xpath"))));
			paymentCountry.selectByVisibleText("Goa");
			 driver.findElement(By.xpath(prop.getProperty("estimate_postcode_xpath"))).sendKeys("518134");
			 WebDriverWait quote = new WebDriverWait(driver,20);
			 quote.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("estimate_country_xpath"))));
			 driver.findElement(By.xpath(prop.getProperty("estimate_getquote_xpath"))).click();
			 
			
	}

	@Then("^flat shipping and scrrenshot$")
	public void flat_shipping_and_scrrenshot() throws Throwable {
	    
		driver.findElement(By.name("shipping_method")).click();
		driver.findElement(By.id("button-shipping")).click();
		
		Thread.sleep(1000);
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	     File dest = new File(("C:\\Users\\Sangeetha S K\\eclipse-workspace\\OpenCart.com\\screenshots\\")+"flatshipping.screenshot"+ ".png");
	     FileUtils.copyFile(scr, dest);
	     WebDriverWait checkout = new WebDriverWait(driver,60);
	     checkout.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("checkout_button_xpath")))));
		JavascriptExecutor drop = (JavascriptExecutor)  driver;
		drop.executeScript("window.scrollBy(5,500)");
	    driver.findElement(By.xpath(prop.getProperty("checkout_button_xpath"))).click();

	}

	@And("^billing details and continue$")
	public void billing_details_and_continue() throws Throwable {
		WebDriverWait ship = new WebDriverWait(driver,60);
				ship.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_payment_xpath"))));
				driver.findElement(By.xpath(prop.getProperty("continue_payment_xpath"))).click();
				
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				WebDriverWait wait = new WebDriverWait(driver,20);
			 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shipping_xpath"))));
			 
			 driver.findElement(By.xpath(prop.getProperty("continue_shipping_xpath"))).click();
			 driver.findElement(By.xpath(prop.getProperty("flat_comment_xpath"))).sendKeys("Confirm");
			 
			 WebDriverWait shipping = new WebDriverWait(driver,20);
			 shipping.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))));
			driver.findElement(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))).click();
			WebDriverWait time = new WebDriverWait(driver,20);
			time.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
			driver.findElement(By.xpath(prop.getProperty("check_cashondev_xpath"))).click();
			driver.findElement(By.xpath(prop.getProperty("continue_method_xpath"))).click();
			WebDriverWait confirm = new WebDriverWait(driver,20);
			confirm.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
			driver.findElement(By.xpath(prop.getProperty("confirm_button_xpath"))).click();
			Thread.sleep(1000);
	    
	}

	@Then("^return to home page$")
	public void return_to_home_page() throws Throwable {
	   
		driver.findElement(By.xpath(prop.getProperty("last_contine_button_xpath"))).click();
	}
}



	
