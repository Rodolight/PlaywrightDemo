const {test, expect} = require ('@playwright/test')

test('Select values from dropdown', async function({page}) {
    await page.goto('https:freelance-learn-automation.vercel.app/signup')

    await page.locator("#state").selectOption({label: "Goa"})

    await page.waitForTimeout(1000)

    await page.locator("#state").selectOption({value: "Madhya Pradesh"})
    await page.waitForTimeout(1000)
  
    await page.locator("#state").selectOption({index: 8})
    await page.waitForTimeout(1000)
    
    
    let state = await page.$("#state")
    let allStates = await state.$$("option")
    let ddStatus = false

    for (let i=0; allStates.length; i++){
        let element = await allStates[i]
        let value = await element.textContent()

        console.log("Value from dropdown using for loop "+ value)

        if(value.includes("Rajasthan")){
            ddStatus=true
            break
        }
    }

    expect(ddStatus).toBeTruthy()

    await page.locator("#hobbies").selectOption(['Reading','Dancing'])

    await page.waitForTimeout(3000)
})