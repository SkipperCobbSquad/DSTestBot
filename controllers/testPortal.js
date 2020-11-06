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
      await page.waitForSelector('.question-container');
      const result = await page.evaluate(() => {
        let res = {}
        let quest = '';
        const questBox = document.querySelector('.question-container').children;
        //Get type of quest
        const selector = questBox[1].value;
        //Get all p in section quest
        questBox[3].querySelectorAll('p').forEach((p) => {
          quest += `${p.textContent} `;
        });
        if (selector === 'DESCRIPTIVE') {
          res = { quest, selector };
        } else {
          const answers = [];
          const answBox = questBox[4].querySelectorAll('div .answer_container');
          for (const answ of answBox) {
            oneAnsw = '';
            answ.querySelectorAll('p').forEach((p) => {
              oneAnsw += ` ${p.textContent}`;
            });
            answers.push(oneAnsw);
          }
          res = { quest, answers, selector };
        }
        return res
      });
      console.log(result)
      await page.click('a');
    }
  } catch (err) {
    return await { results: [], error: err };
  }
  await browser.close();
  console.log(results);
  return await { results, error: false };
};
//score-section
// await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
//https://www.testportal.net/test.html?t=cVEnZJQWUtMA
module.exports = portal;
//TODO: try catch errors
//SINGLE_ANSWER
//TRUE_FALSE
//SURVEY
//DESCRIPTIVE
//MULTI_ANSWER
//SHORT_ANSWER
