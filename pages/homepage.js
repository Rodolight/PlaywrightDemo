import {expect} from '@playwright/test'

class HomePage {

    constructor(page) {

        this.page=page
        this.menu = "//button[@aria-label='Open Dropdown']"
        this.logoutoption = "//span[normalize-space()='Sign Out']"
        this.manageOption = "//a[@href='/my-account/notification-preferences']"
    }

    async verifyManageOption(){

        await this.page.waitForLoadState("networkidle")

        await expect(this.page.locator(this.manageOption)).toBeVisible()
     
    }

    async logoutFromApplication() {

        await this.page.click(this.menu)
        await this.page.click(this.logoutoption)
            
    }

}

export default HomePage
