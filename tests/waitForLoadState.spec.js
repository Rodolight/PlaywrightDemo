import {test,expect} from '@playwright/test'
import data from '../tests/data/testdata.json'

test('Working with Load States', async ({page}) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login')

   await page.getByText('Signup').click()

   await page.waitForLoadState("networkidle")

   const count = await page.locator("//input[@type='checkbox']").count()

   await page.getByPlaceholder('Name').fill(data.name)
   await page.getByPlaceholder('Email').fill(data.username)
   await page.getByPlaceholder('Password').fill(data.password)
   await page.getByRole('checkbox', {name:data.interests.one}).check()
   await page.getByRole('checkbox', {name:data.interests.six}).check()

   await page.locator("#state").selectOption('Delhi')

   await page.locator("#hobbies").selectOption(['Playing','Swimming'])

   expect(count).toBe(6)

   //await page.pause()

})