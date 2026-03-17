class LoginPage {

  usernameField = 'input[name="username"]'
  passwordField = 'input[name="password"]'
  loginButton = 'button[type="submit"]'

  visitLoginPage() {
    cy.visit('/web/index.php/auth/login')
  }

  enterUsername(username) {
    cy.get(this.usernameField).should('be.visible').type(username)
  }

  enterPassword(password) {
    cy.get(this.passwordField).should('be.visible').type(password)
  }

  clickLogin() {
    cy.get(this.loginButton).click()
  }

  login(username,password){
    this.enterUsername(username)
    this.enterPassword(password)
    this.clickLogin()
  }

}

export default LoginPage
