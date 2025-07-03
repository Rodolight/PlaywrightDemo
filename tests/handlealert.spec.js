import {test, expect} from '@playwright/test'
import { pathToFileURL } from 'url'

test('Handle Alerts', async ({page}) => {

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
     

      page.on('dialog', async (d) => {

         expect(d.type()).toContain("alert")

         expect(d.message()).toContain("I am a JS Alert")

         await d.accept()
     } )
    
     await page.locator("//button[text()='Click for JS Alert']").click()
     
     //expect(page.locator("//p[@id='result']")).toHaveText('You successfully clicked an alert')
   
})

test('Handle Confirm Alert ', async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    

     page.on('dialog', async (dialogWindow) => {

        expect(dialogWindow.type()).toContain("confirm")

        expect(dialogWindow.message()).toContain("I am a JS Confirm")

        await dialogWindow.dismiss()
    } )
   
    await page.locator("//button[text()='Click for JS Confirm']").click()
  
})


test('Handle Prompt Alert ', async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    

     page.on('dialog', async (dialogWindow) => {

        expect(dialogWindow.type()).toContain("prompt")

        expect(dialogWindow.message()).toContain("I am a JS prompt")

        await dialogWindow.accept("Rodolfo De Pena")
    } )
   
    await page.locator("//button[text()='Click for JS Prompt']").click()
      await page.waitForTimeout(1000)
})