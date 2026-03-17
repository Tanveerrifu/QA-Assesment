class DashboardPage {

  profileDropdown = '.oxd-userdropdown-name'

  verifyDashboardLoaded(){

    cy.url().should('include','/dashboard')
    cy.contains('Dashboard').should('be.visible')

  }

  verifyDashboardElements(){

    cy.contains('Admin').should('be.visible')
    cy.contains('PIM').should('be.visible')
    cy.get(this.profileDropdown).should('be.visible')

  }

  navigateToPIM(){

    cy.contains('PIM').click()

  }

  logout(){

    cy.get(this.profileDropdown).click()

    cy.contains('Logout').click()

  }

}

export default DashboardPage