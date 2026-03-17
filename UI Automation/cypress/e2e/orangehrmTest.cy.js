import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import PIMPage from "../pages/PIMPage";

describe("OrangeHRM Automation Suite", () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();
  const pimPage = new PIMPage();

  let employeeNames = [];


  before(() => {
    loginPage.visitLoginPage();

    loginPage.login("Admin", "admin123");

    dashboardPage.verifyDashboardLoaded();

    cy.screenshot("login-success");
  });

  it("TC01 - Verify Dashboard Redirect", () => {
    cy.url().should("include", "/dashboard");

    cy.contains("Dashboard").should("be.visible");
  });

  it("TC02 - Validate Dashboard Elements", () => {
    dashboardPage.verifyDashboardElements();
  });

  it("TC03 - Navigate to PIM", () => {
    dashboardPage.navigateToPIM();

    cy.url().should("include", "pim");
  });

  it("TC04 - Extract First 5 Employees", () => {
    pimPage.extractFirstFiveEmployees().then((names) => {
      employeeNames = names;
    });
  });

  it("TC05 - Validate Employee Names", () => {
    employeeNames.forEach((name) => {
      expect(name).to.not.equal("");
    });
  });

  it("TC06 - Validate Employee Status", () => {
    pimPage.validateEmployeeStatus();
  });

  after(() => {
    dashboardPage.logout();

    cy.log("Browser session cleared after all test cases");
  });
});
