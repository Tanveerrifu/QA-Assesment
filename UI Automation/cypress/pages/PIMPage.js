class PIMPage {
  employeeRows = ".oxd-table-body .oxd-table-row";
  employeeCell = ".oxd-table-cell";

  extractFirstFiveEmployees() {
    let employees = [];

    return cy
      .get(this.employeeRows)
      .should("have.length.greaterThan", 4)
      .each(($row, index) => {
        if (index < 5) {
          const name = $row.find(this.employeeCell).eq(2).text().trim();

          employees.push({
            name: name,
          });
        }
      })
      .then(() => {
        cy.writeFile("cypress/fixtures/employees.json", {
          employees: employees,
        });

        return cy.wrap(employees);
      });
  }

  validateEmployeeStatus() {
    cy.contains("Full-Time Permanent").should("exist");
  }
}

export default PIMPage;
