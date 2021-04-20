package opencartPages;

import java.io.File;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import opencartDataProvider.OpencartConfigReader;
import opencartUtils.TakeScreenshots;

public class OrderHistoryPage {
	
	private WebDriver driver;
	private OpencartConfigReader configReader;
	private Properties prop;
	WebDriverWait wait;
	TakeScreenshots screenShot;
	JavascriptExecutor js;
	
	public OrderHistoryPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
    public void ViewOrderHistory() throws Exception {
		
		configReader = new OpencartConfigReader();
		prop = configReader.init_prop();
		
		wait = new WebDriverWait(driver,60);
      	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("OrderHistorylink")))));
      	driver.findElement(By.xpath(prop.getProperty("OrderHistorylink"))).click();
      	
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("viewHistory")))));
		driver.findElement(By.xpath(prop.getProperty("viewHistory"))).click();
		
		Thread.sleep(2000);
		
		   File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	       File dest = new File(("user.dir")+ "/target/cucumber-reports/screenshots/" + "viewHistory" + ".png");
	       FileUtils.copyFile(scr, dest);
		
	}
    public void ReturnProduct() throws Exception {
    	
    	js = (JavascriptExecutor)driver;
		js.executeScript("window.scrollBy(0,700)"); 
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("Returnbtn")))));
		driver.findElement(By.xpath(prop.getProperty("Returnbtn"))).click();
		
		js.executeScript("window.scrollBy(0,1200)");
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("returnReasonRadiobtn")))));
		WebElement radiobtn = driver.findElement(By.xpath(prop.getProperty("returnReasonRadiobtn")));
		radiobtn.click();
		
		js.executeScript("window.scrollBy(0,300)");
		
		driver.findElement(By.xpath(prop.getProperty("returnSubmitbtn"))).click();
		Thread.sleep(2000);
		 File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	       File dest = new File(("user.dir")+ "/target/cucumber-reports/screenshots/" + "ReturnProduct" + ".png");
	       FileUtils.copyFile(scr, dest);
    }
	

}
