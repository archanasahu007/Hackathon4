package opencartPages;

import java.io.File;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.bouncycastle.tsp.TimeStampTokenInfo;
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

import opencartDataProvider.OpencartConfigReader;
import opencartUtils.TakeScreenshots;

public class OpencartViewCart {
	private WebDriver driver;
	private OpencartConfigReader configReader;
	private Properties prop;
	JavascriptExecutor js;
	WebDriverWait wait;
	TakeScreenshots screenShot;
    
	public OpencartViewCart(WebDriver driver) {
      
		this.driver = driver;

	}
	
	public void RemoveItemAndContinue(){
		
		configReader = new OpencartConfigReader();
		prop = configReader.init_prop();
		
        wait = new WebDriverWait(driver,60);
      	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("clickCart")))));
      	
        driver.findElement(By.xpath(prop.getProperty("clickCart"))).click();
        
        wait = new WebDriverWait(driver,60);
      	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath((prop.getProperty("view_cart_xpath")))));
        driver.findElement(By.xpath((prop.getProperty("view_cart_xpath")))).click();
		
		driver.findElement(By.xpath(prop.getProperty("RemoveProduct"))).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath((prop.getProperty("continueshopping")))));
		driver.findElement(By.xpath(prop.getProperty("continueshopping"))).click();
		
		
	}
	
	public void GuestcheckOut() throws InterruptedException {
		
	    configReader = new OpencartConfigReader();
		prop = configReader.init_prop();
		
		
		wait = new WebDriverWait(driver,60);
      	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("clickCart")))));
      	
        driver.findElement(By.xpath(prop.getProperty("clickCart"))).click();
        
      	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("checkout")))));
        
        driver.findElement(By.xpath(prop.getProperty("checkout"))).click();
        
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("guestcheckoutradio")))));
        WebElement guestChkout = driver.findElement(By.xpath(prop.getProperty(("guestcheckoutradio"))));
        guestChkout.click();
		driver.findElement(By.xpath(prop.getProperty("continueguest"))).click();
		
		
		}
	
       public void BillingDetails(String FirstName, String LastName, String Email, String Telephone, String Company, String Address1, String Address2, String city, String postalcode) throws InterruptedException{
		
    
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("fstName")))));
	    driver.findElement(By.xpath(prop.getProperty("fstName"))).sendKeys(FirstName); 
	    
	    js = (JavascriptExecutor)driver;
		js.executeScript("window.scrollBy(0,900)"); 
	    
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("lstName")))));
	    driver.findElement(By.xpath(prop.getProperty("lstName"))).sendKeys(LastName); 
	    
	    driver.findElement(By.xpath(prop.getProperty("mail"))).sendKeys(Email);
	    
        driver.findElement(By.xpath(prop.getProperty("phone"))).sendKeys(Telephone); 
	    
	    driver.findElement(By.xpath(prop.getProperty("company"))).sendKeys(Company);
	    
	    driver.findElement(By.xpath(prop.getProperty("address1"))).sendKeys(Address1);
	    
        driver.findElement(By.xpath(prop.getProperty("address2"))).sendKeys(Address2); 
	    
	    driver.findElement(By.xpath(prop.getProperty("city"))).sendKeys(city);
	    
        driver.findElement(By.xpath(prop.getProperty("postcode"))).sendKeys(postalcode); 
        
        
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("country")))));
        Select sel = new Select(driver.findElement(By.xpath(prop.getProperty("country"))));
        sel.selectByIndex(106);
	  
	    js.executeScript("window.scrollBy(0,350)");
	    Select s = new Select(driver.findElement(By.xpath(prop.getProperty("Region"))));
	    s.selectByIndex(14);
	
	    driver.findElement(By.xpath(prop.getProperty("continuebilling"))).click();
	    
      }

      public void confirmOrder() throws Exception {
    	  
    	
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("cmmtbox"))))); 
        driver.findElement(By.xpath(prop.getProperty("cmmtbox"))).sendKeys("test");
        
  	    driver.findElement(By.xpath(prop.getProperty("continuepdeliverymethod"))).click();
  	    
  	    //driver.findElement(By.xpath(prop.getProperty("cmtpaymentmethod"))).sendKeys("test");
  	    
  	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("termsagree"))))); 
	    driver.findElement(By.xpath(prop.getProperty("termsagree"))).click();
	    driver.findElement(By.xpath(prop.getProperty("continuepayment"))).click();
	    
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("confirmorder")))));
	    driver.findElement(By.xpath(prop.getProperty("confirmorder"))).click();
	    Thread.sleep(2000);
	    
	    File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File dest = new File(("user.dir")+ "/target/cucumber-reports/screenshots/" + "confirmOrder" + ".png");
        FileUtils.copyFile(scr, dest);
    	  
      }
      
      
}    
       





