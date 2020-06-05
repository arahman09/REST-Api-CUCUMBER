package getEmployeeInfo;

import employeeinfo.JsonFile;
import employeeinfo.PayloadReader;
import employeeinfo.SingleEmployeeResources;
import org.junit.Test;
import org.testng.Assert;

import java.io.IOException;

public class PostEmpProfile extends PayloadReader {

    public static String baseUrl = "http://info.venturepulse.org:8080/service-webapp";
    public static String resourcePath = "/api/SingleEmployeeResources";


    @Test
    public void postPayload()throws IOException {
        int statusCode = postEmpPayload(baseUrl,resourcePath, JsonFile.singleEmpProfile);
        Assert.assertEquals(statusCode, 200);
    }
}
