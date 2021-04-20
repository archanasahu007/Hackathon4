package opencartPages;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
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

public class OpenCartProduct {
	private WebDriver driver;
	private OpencartConfigReader configReader;
	private Properties prop;
	JavascriptExecutor js;
	 Actions actions;
	 WebDriverWait wait;
	
	public OpenCartProduct(WebDriver driver) {
	      
		this.driver = driver;

	}
	
	public void selectProduct() throws InterruptedException {
		configReader = new OpencartConfigReader();
		prop = configReader.init_prop();
		
        Thread.sleep(1000);
        
       actions = new Actions(driver);
		
		WebElement desktop = driver.findElement(By.xpath(prop.getProperty("Laptopdropdown")));
		actions.moveToElement(desktop).click().build().perform();
		
		WebElement seeallproduct = driver.findElement(By.xpath(prop.getProperty("product2")));
		actions.moveToElement(seeallproduct).click().build().perform();

		Thread.sleep(1000);
		
		js = (JavascriptExecutor)driver;
		js.executeScript("window.scrollBy(0,700)"); 
		Thread.sleep(5000);
		
		driver.findElement(By.xpath(prop.getProperty("selectprod"))).click();
		
		
	}
	
	public void selectProductToWishlist() throws InterruptedException, IOException {
		
		 
		  configReader = new OpencartConfigReader();
		  prop = configReader.init_prop();
		  actions = new Actions(driver);
			WebElement components = driver.findElement(By.xpath(prop.getProperty("componentdropdown")));
			actions.moveToElement(components).click().build().perform();
			
			WebElement monitor = driver.findElement(By.xpath(prop.getProperty("product3")));
			actions.moveToElement(monitor).click().build().perform();

			Thread.sleep(1000);
			
			Select sortbyprice = new Select(driver.findElement(By.xpath(prop.getProperty("sortby"))));
		 	sortbyprice.selectByVisibleText("Price (High > Low)");
		 	
		 	js = (JavascriptExecutor)driver;
		    js.executeScript("window.scrollBy(0,700)"); 
		    
		    driver.findElement(By.xpath(prop.getProperty("selectprod2"))).click();
		    
		    wait = new WebDriverWait(driver,60);
	      	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("AddtoWishlist")))));
		    driver.findElement(By.xpath(prop.getProperty("AddtoWishlist"))).click();
		    
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("WishListlink")))));
		    driver.findElement(By.xpath(prop.getProperty("WishListlink"))).click();
		    
		    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("Addtocartfromwishlist")))));
		    driver.findElement(By.xpath(prop.getProperty("Addtocartfromwishlist"))).click();
		    
		    driver.findElement(By.xpath(prop.getProperty("shoppingCartlink"))).click();
		    Thread.sleep(2000);
		    
		    File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	        File dest = new File(("user.dir")+ "/target/cucumber-reports/screenshots/" + "shoppingcart" + ".png");
	        FileUtils.copyFile(scr, dest);
		
	}
	
	public void AddToCart() {
		
		js.executeScript("window.scrollBy(0,350)");
		
		driver.findElement(By.xpath(prop.getProperty("Dateoption"))).clear();
		driver.findElement(By.xpath(prop.getProperty("Dateoption"))).sendKeys("2021-05-21");
		
		driver.findElement(By.xpath(prop.getProperty("AddtoCart"))).click();
		
		
	}
	
	public void SelectProductfromCompenent() throws InterruptedException {
		
		   configReader = new OpencartConfigReader();
		   prop = configReader.init_prop();
		   actions = new Actions(driver);
			WebElement components = driver.findElement(By.xpath(prop.getProperty("componentdropdown")));
			actions.moveToElement(components).click().build().perform();
			
			WebElement monitor = driver.findElement(By.xpath(prop.getProperty("product3")));
			actions.moveToElement(monitor).click().build().perform();

			wait = new WebDriverWait(driver,60);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("selectprod3")))));
			driver.findElement(By.xpath(prop.getProperty("selectprod3"))).click();
		
	}
	
	public void FillProductDetails() throws IOException {
		 configReader = new OpencartConfigReader();
		  prop = configReader.init_prop();
	
		js = (JavascriptExecutor)driver;
	    js.executeScript("window.scrollBy(0,1100)"); 
	    
		wait = new WebDriverWait(driver,60);
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("CartCheckbox"))))); 
        driver.findElement(By.xpath(prop.getProperty("CartCheckbox"))).click();
        
        Select sel = new Select(driver.findElement(By.xpath(prop.getProperty("CartSelect"))));
        sel.selectByIndex(1);
	    
        js.executeScript("window.scrollBy(0,700)"); 
        driver.findElement(By.xpath(prop.getProperty("CartText"))).sendKeys("Test");
        
        WebElement chooseFile =  driver.findElement(By.xpath(prop.getProperty("File")));
		chooseFile.sendKeys("C:\\Users\\sahua\\OneDrive\\Desktop\\test.png");
       
        
        driver.findElement(By.xpath(prop.getProperty("DateCart"))).clear();
		driver.findElement(By.xpath(prop.getProperty("DateCart"))).sendKeys("2021-05-21");
		
		driver.findElement(By.xpath(prop.getProperty("TimeCart"))).clear();
		driver.findElement(By.xpath(prop.getProperty("TimeCart"))).sendKeys("12:25");
		
		driver.findElement(By.xpath(prop.getProperty("DateAndTime"))).clear();
		driver.findElement(By.xpath(prop.getProperty("DateAndTime"))).sendKeys("2021-05-21 12:25");
		
		
		driver.findElement(By.xpath(prop.getProperty("AddtoCart"))).click();
		
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File dest = new File(("user.dir")+ "/target/cucumber-reports/screenshots/" + "shoppingcart" + ".png");
        FileUtils.copyFile(scr, dest);
	}


}
