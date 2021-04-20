package opencartPages;


	import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import opencartDataProvider.OpencartConfigReader;

	import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

	public class paymentregistration {
	   WebDriver driver;
	   Properties prop;
	   OpencartConfigReader configfile;
	   
	  

		public paymentregistration(WebDriver driver) {
			this.driver=driver;
		}
		 
				
		public void fillpaymentregistration(String Firstname, String Lastname,String emailaddress, String telephone,String password,String confirmpassword,String company,String address1,String city,String postcode) {
			configfile = new OpencartConfigReader();
		       prop = configfile.init_prop();
		       driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		       WebDriverWait wait = new WebDriverWait(driver,60);
			     wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("payment_reg_firstname_xpath")))));
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_firstname_xpath"))).sendKeys(Firstname);
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_lastname_xpath"))).sendKeys(Lastname);
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_email_xpath"))).sendKeys(emailaddress);
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_telephone_xpath"))).sendKeys(telephone);
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_password_xpath"))).sendKeys(password);
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_confirmpass_xpath"))).sendKeys(confirmpassword);
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_company_xpath"))).sendKeys(company);
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_address_xpath"))).sendKeys(address1);
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_city_xpath"))).sendKeys(city);
			  driver.findElement(By.xpath(prop.getProperty("payment_reg_postcode_xpath"))).sendKeys(postcode);
			  
		}
		

		public void Clickcontinue() {
			configfile = new OpencartConfigReader();
		       prop = configfile.init_prop();
		       WebDriverWait wait = new WebDriverWait(driver,20);
				  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("payment_reg_checkbox_xpath")))).click();
			
			driver.findElement(By.xpath(prop.getProperty("payment_reg_checkbox_xpath"))).click();
			WebDriverWait check = new WebDriverWait(driver,20);
			  check.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("payment_reg_checkbox_xpath")))).click();
		
			driver.findElement(By.xpath(prop.getProperty("payment_reg_continue_xpath"))).click();
		}
	}




	
		