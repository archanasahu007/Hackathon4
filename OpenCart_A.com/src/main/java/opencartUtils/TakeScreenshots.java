package opencartUtils;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class TakeScreenshots {

	   public void getscreenshot(WebDriver driver) throws Exception {
	    	  
	          File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	          File dest = new File(("user.dir")+ "/target/cucumber-reports/screenshots/" + "screenshot" + ".png");
	          FileUtils.copyFile(scr, dest);
	          Thread.sleep(3000);
	      }
}
