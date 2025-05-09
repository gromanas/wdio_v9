const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    before(
        "Set up emulator", async function() {
            await browser.emulate("device", "Galaxy S9 +");
        }
    );

    it('should login with valid credentials', async () => {
        await browser.url("https://webdriver.io/")

        //Start screen check
        await browser.emulate("device", "Galaxy S9 +");
        await browser.checkScreen("webdriverio_v9_portait");
        await browser.emulate("device", "Galaxy S9 + landscape");
        await browser.checkScreen("webdriverio_v9_landscape");
    })
})

