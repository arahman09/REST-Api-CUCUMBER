package step.definitions;

import employeeinfo.SingleEmployeeResources;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.Assert;

public class GetSingleEmpValidCall {

    String baseUrl = "";
    String resourcePath = "";
    int statusCode = 0;

    @Given("baseUrl and valid resourcePath")
    public void baseurl_and_resourcePath(){
        baseUrl = "http://info.venturepulse.org:8080/service-webapp";
        resourcePath = "/api/SingleEmployeeResources/590a4acd35522970c7956cdf";
    }

    @When("Make a valid GET Call")
    public void make_a_invalid_GET_Call(){
        statusCode = SingleEmployeeResources.getSingleEmployeeWithValidRequest(baseUrl,resourcePath);
    }

    @Then("I should receive status code 200")
    public void i_should_receive_status_code(){
        Assert.assertEquals(statusCode,200);
    }
}
