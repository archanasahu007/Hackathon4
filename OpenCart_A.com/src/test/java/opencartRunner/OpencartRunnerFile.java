package opencartRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)		
@CucumberOptions(
		         features="src\\test\\resources\\opencartFeature",
                 glue={"opencartStepDefination"},
                 plugin = { "pretty","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html",
                		 "html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml,"},
           
		         dryRun = false, 
		         monochrome = true
		        )

public class OpencartRunnerFile extends AbstractTestNGCucumberTests{

}
