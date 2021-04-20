package opencartPages;
import org.openqa.selenium.WebDriver;

import opencartDataProvider.OpencartConfigReader;

import java.util.Properties;

import org.openqa.selenium.By;

public class loginaccount {

   WebDriver driver;
   Properties prop;
   OpencartConfigReader configfile;
   
  

	public loginaccount(WebDriver driver) {
		this.driver=driver;
	}
	 
			
	public void Enterlogindetails(String EmailUsername, String Password) {
		configfile = new OpencartConfigReader();
	       prop = configfile.init_prop();
	   
		  driver.findElement(By.xpath(prop.getProperty("Email_loginpage_xpath"))).sendKeys(EmailUsername);
		  driver.findElement(By.xpath(prop.getProperty("Password_login_xpath"))).sendKeys(Password);
		  
	}
	

	public void ClickLogin() {
		configfile = new OpencartConfigReader();
	       prop = configfile.init_prop();
		
		driver.findElement(By.xpath(prop.getProperty("Login_Button_Xpath"))).click();
		
	}
}


