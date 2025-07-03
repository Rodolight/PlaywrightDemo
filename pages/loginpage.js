import { expect } from "playwright/test"

class LoginPage {

    constructor (page) {
     this.page = page

     this.header = "(//a[text()='For Your Home'])[2]"
     this.option = "(//button[@class='js-sign-in-btn flex items-center py-6 lg:py-8 text-sm whitespace-nowrap px-16 rounded-md bg-teal-darker text-teal-darker hover:bg-blue transform transition-all duration-300 hover:shadow hover:-translate-y-2'])[2]"
     this.username = "#Drawer-signInUsername_tealeaf-unmask"
     this.password =  "//input[@name='passwordInput']"
     this.loginButton =  "//button[@type='submit']"
    
    }

     async loginToApplication (user, pass) {
         await this.page.click(this.option)
         await this.page.fill(this.username, user)
         await this.page.fill(this.password, pass)
         await this.page.click(this.loginButton)

     }

     async verifyHome(){
       await expect(this.page.locator(this.header)).toBeVisible()
     }

}

export default LoginPage;  