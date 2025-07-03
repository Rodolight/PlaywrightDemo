const {test, expect} = require('@playwright/test')

//const page = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
test.use({viewport:{width:1200, height:820}})


test ('Valid Login', async function({page}) {

    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').pressSequentially('Admin',{delay:300})
    await page.locator("input[name='password']").fill('admin123',{delay:100})

    await page.locator("//button[@type='submit']").click()

    //await page.waitForTimeout(5000)

    await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText('profile picture').first().click()

    await page.getByText('Logout').click()

    //await page.waitForTimeout(3000)
    await expect(page).toHaveURL(/login/)


})


test('Vefify Error Message', async function({page}) {
    // let list = [1,2,3,4,5,6,8,8,9,10];

    // let result = checkSorted(list)

    // console.log(result)

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').pressSequentially('Admin',{delay:300})
    await page.locator("input[name='password']").fill('Admin1234',{delay:100})

    await page.locator("//button[@type='submit']").click()

    const ErrorMessage = await page.locator("//p[contains(@class, 'alert-content-text')]").textContent()

    console.log("Error mesage is: "+ ErrorMessage)

    expect(ErrorMessage.includes('Invalid')).toBeTruthy()
    
    expect(ErrorMessage==="Invalid credentials").toBeTruthy()
})

test.skip("validate news", async function({page}) {
    
   await page.goto('https://news.ycombinator.com/newest')
   await page.waitForTimeout(3000)
   const l = await page.getByText('athing submission').click()
   console.log(l)
   await page.waitForTimeout(3000)
  // let base_locator = page.getByRole('link', "morelink").first()        
   //expect(base_locator).toBeVisible()
   //page.pause()

   //await page.locator("//a[contains(@class, 'morelink')]").scrollIntoViewIfNeeded()
//    await base_locator.scrollIntoViewIfNeeded()
   
//    await page.locator("//a[contains(@class, 'morelink')]").click()
  

//    await page.waitForTimeout(3000)
//    await base_locator.scrollIntoViewIfNeeded()
   
//    await page.locator("//a[contains(@class, 'morelink')]").click()
  
//    await page.waitForTimeout(3000)
//    await base_locator.scrollIntoViewIfNeeded()
   
//    await page.locator("//a[contains(@class, 'morelink')]").click()
//    await page.waitForTimeout(3000)

})

function checkSorted(arr) {
    for (let i = 0; i < arr. length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
    return false;
    }
    }
    return true;
    }



    