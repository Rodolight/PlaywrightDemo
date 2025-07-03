import {test, expect } from '@playwright/test'

test('Keyboard Events In Playwright', async function({page}){

    await page.goto('https://www.google.com')

    //await page.locator('textarea[name="q"]').fill('Mukesh Otwani')

    await page.locator('textarea[name="q"]').focus()
    await page.keyboard.type('Mukesh Otwani')
    
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")

    for (let i=0; i<6; i++){
        await page.waitForTimeout(1000)
        await page.keyboard.press("ArrowLeft") 
    }
  
    await page.keyboard.down("Shift")
    await page.keyboard.press('Backspace')

    await page.waitForTimeout(2000)

   /* await page.keyboard.press('Meta+A')

    await page.keyboard.press('Meta+C')
    
    await page.keyboard.press('Backspace')
    
    await page.keyboard.press("Meta+V") */

    

    
})