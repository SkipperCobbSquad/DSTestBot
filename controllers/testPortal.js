const puppeteer = require('puppeteer');
const Quest = require('../classes/Quest');

const portal = async (pageson) => {
  const results = [];
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    await page.goto(pageson);
    await page.evaluate(() => {
      document.querySelectorAll('input').forEach((input) => {
        if (!(input.type === 'hidden')) {
          input.value = ' ᠌᠌ ᠌ ᠌ ';
        }
      });
    });
    await page.click('#start-form-submit');
    await page.waitForSelector('form');
    let much = await page.evaluate(() => {
      const str = document.querySelector('.question_header_content');
      const num0 = str.textContent.slice(-2);
      if (+num0) {
        return +num0;
      } else {
        const num = str.textContent.slice(-1);
        return +num;
      }
    });
    console.log(much);
    for (let i = 1; i <= much; i++) {
      await page.waitForSelector('form');
      const result = await page.evaluate(() => {
        let pop = [];
        document.querySelectorAll('p').forEach((p) => {
          pop.push(p.textContent);
        });
        const open = document.querySelectorAll('.tox').length ? true : false;
        if (open) {
          return { pop, open };
        } else {
          let multi = false;
          const mult = document.querySelectorAll('.mdc-checkbox__background');
          if (mult.length) {
            multi = true;
          }
          return { pop, open, multi };
        }
      });
      console.log(result.open)
      if (result.open) {
        results.push(new Quest(result.pop, [], open));
      } else {
        results.push(
            new Quest(result.pop[0], result.pop.slice(1), result.multi)
        );
      }
      await page.click('a');
      // await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    }
  } catch (err) {
    return await { results: [], error: err };
  }
  await browser.close();
  console.log(results)
  return await { results, error: false };
};
//score-section
// await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
//https://www.testportal.net/test.html?t=cVEnZJQWUtMA
module.exports = portal;
//TODO: try catch errors
