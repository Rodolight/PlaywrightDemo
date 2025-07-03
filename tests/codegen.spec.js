import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://news.ycombinator.com/newest');
  
  const top = 100
  let k = 0
  let timeArray = []
  const currentYear = new Date().getFullYear()
  const r = await page.getByTitle('' + currentYear + '').count()
  const p = Math.floor((top -1) / r)+1
  

  for (let j = 1; j <= p;) {
    for ( let i = 0; i < r; i++){
          k = k + 1

          try {
            if (k <= top) {
              let t = (await page.getByTitle('' + currentYear + '').nth(i).textContent()).split(" ", 2)
              if (t[1].substring(0,1) == 'h'){
                timeArray.push(t[0] * 60)
              }else
              {
                timeArray.push(parseInt(t[0]))
              }
            
            }
          
      } catch (error) {
        console.log("error:",error);
      }
       
    }
  
    await page.getByRole('link', { name: 'More', exact: true }).click();
   // await page.waitForTimeout(2000)
   j = j + 1
  
  }

   let result = SortedAscendent(timeArray)

   !result[0] ? console.log("The first " + top +" rows aren't ordered by time ascending. The row " + result[1] +" break the order.") : console.log("The first "+ top +" rows are ordered by time ascending.") 
   
   expect(result[0]).toBeTruthy()

  });


  function SortedAscendent(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length-1; i++) {
     if (arr[i+1] < arr[i]) {
      return [false,i+1];
     }
    }
    return [true,null]
  }