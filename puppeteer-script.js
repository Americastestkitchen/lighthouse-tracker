/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
  // launch browser for LHCI
  const page = await browser.newPage();
  await page.goto('https://www.americastestkitchen.com/sign_in');
  await page.type('#email', 'puppeteertest@americastestkitchen.com');
  await page.type('.login-form__password', 'password');
  await page.click('.login-form__submit');
  await page.waitForNavigation();
  // close session for next run
  await page.close();
};
