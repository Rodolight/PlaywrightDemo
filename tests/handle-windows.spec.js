import {test,expect} from '@playwright/test'

test('Working with multiples tabs', async ({browser}) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto('https://freelance-learn-automation.vercel.app/login')

    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator("(//a[contains(@href,'facebook')])[1]").click()

        ]
    )


    await newPage.locator("(//input[@name='email'])[2]").fill("rde_pena@hotmail.com")

    await newPage.close()

    await page.locator("#email1").fill("rodolfo.depena@gmail.com")


})