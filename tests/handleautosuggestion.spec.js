import {test, expect} from '@playwright/test'
import { clear } from 'console'

test('Verify application Title Using Keyboard', async ({page}) => {

    await page.goto('https://www.google.com')

    await page.locator("textarea[name='q']").fill('Playwright')

    await page.waitForSelector("//li[@role='presentation']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    
    await page.keyboard.press("Enter")

})

test('Verify application Title Using Loop' , async ({page}) => {

    await page.goto('https://www.google.com')

    await page.locator("textarea[name='q']").fill('Mukesh otwani')

    await page.waitForSelector("//li[@role='presentation']")
    
    const elements = await page.$$("//li[@role='presentation']")

    for (let i=0; i<elements.length;i++){
        
        const text = await elements[i].textContent()
    
        if(text.includes('youtube')){
           await elements[i].click()
           await page.waitForTimeout(3000)
           break
        }
    }
   

})