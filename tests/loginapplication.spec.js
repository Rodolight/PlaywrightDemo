import { test, expect } from '@playwright/test'
import LoginPage from '../pages/loginpage'
import HomePage from '../pages/homepage'


test('Login To Application Using POM', async({page}) => {

    await page.goto('https://www.duke-energy.com/home')
   
    const loginPage= new LoginPage(page)

    await loginPage.loginToApplication("rde_pena@hotmail.com","Ningun@79")

    const homepage=new HomePage(page)

    await homepage.verifyManageOption()

    await homepage.logoutFromApplication()

    await loginPage.verifyHome()

})