import {test, expect} from '@playwright/test'
import data from '../tests/data/testlogin.json'

test.skip('Login to Application', async ({page}) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("#email1").fill(data.username)
    await page.locator("#password1").fill(data.password)

    await page.pause()

})

test.describe('Data Driven Test Login', () => {

    for (const dataLogin of data){
        
        test.describe(`Login with Users ${dataLogin.id}`, () => {

            test('Login to Test', async ({page}) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login")

                await page.locator("#email1").fill(dataLogin.username)
                await page.locator("#password1").fill(dataLogin.password)
            
            })
        })
    }
})