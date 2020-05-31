package getEmployeeInfo;

import employeeinfo.AllEmployeeResourcesApi;
import org.testng.annotations.Test;

public class GetAllEmployeeProfile extends AllEmployeeResourcesApi {

    @Test
    public void getAllEmployee(){
        callAllEmployeeInfoWithValidRequest();
    }
}
