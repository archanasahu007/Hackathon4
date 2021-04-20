package opencartPages;

import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import opencartDataProvider.OpencartConfigReader;

public class OpencartAccountPage {
	private WebDriver driver;
	private OpencartConfigReader configReader;
	private Properties prop;
	
	public OpencartAccountPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	public void buttonClick() throws InterruptedException {
		
		configReader = new OpencartConfigReader();
		prop = configReader.init_prop();
		
	    Thread.sleep(1000);
		
		Actions actions = new Actions(driver);
			
		WebElement Account = driver.findElement(By.xpath(prop.getProperty("Account")));
		actions.moveToElement(Account).click().build().perform();
			
		WebElement Register = driver.findElement(By.xpath(prop.getProperty("Register")));
		actions.moveToElement(Register).click().build().perform();

		Thread.sleep(1000);

	}
	
	public void Register(String FirstName, String LastName, String Email, String Telephone, String Password, String PasswordConfirm) throws InterruptedException{
		
	    
	    driver.findElement(By.xpath(prop.getProperty("FirstName"))).sendKeys(FirstName); 
	    
	    Thread.sleep(2000);
	    
	    driver.findElement(By.xpath(prop.getProperty("LastName"))).sendKeys(LastName); 
	    
	    driver.findElement(By.xpath(prop.getProperty("Email"))).sendKeys(Email);
	    
        driver.findElement(By.xpath(prop.getProperty("Telephone"))).sendKeys(Telephone); 
	    
	    driver.findElement(By.xpath(prop.getProperty("Password"))).sendKeys(Password);
	    
	    driver.findElement(By.xpath(prop.getProperty("PasswordConfirm"))).sendKeys(PasswordConfirm);
	    
	    Thread.sleep(2000);
	    driver.findElement(By.xpath(prop.getProperty("Privacychk"))).click();
	    driver.findElement(By.xpath(prop.getProperty("continuebtn"))).submit();
	    
	   
}


}
