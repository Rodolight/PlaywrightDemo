import { test,  expect} from '@playwright/test';

test('Verify file upload', async function({page}) {
 await page.goto('https://the-internet.herokuapp.com/upload')

 await page.locator('#file-upload').setInputFiles('/Users/arieshome/Desktop/Screenshot 2025-05-27 at 2.45.26 PM.png')

 await page.locator("#file-submit").click()
 
 await expect( page.locator("//h3")).toHaveText("File Uploaded!")

})