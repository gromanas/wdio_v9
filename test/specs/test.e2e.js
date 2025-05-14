import { join }  from 'path';

describe('My Login application', () => {
    before(
        "Set up emulator", async function () {
            await browser.emulate("device", "Galaxy S9 +");
        }
    );

    it('should take the screenshot and work as expected', async () => {
        const screenshotPath = join(process.cwd(), "test/specs/wp9691502-3000x3000-wallpapers.jpg");
        await browser.url(`file://${screenshotPath}`);

        const context = await browser.browsingContextGetTree({});
        await browser.browsingContextCaptureScreenshot({context: context.contexts[0].context});
    })

    it('Maximum call stack size exceeded error', async () => {
        const screenshotPath = join(process.cwd(), "test/specs/wp10469173-2000x2000-wallpapers.jpg");
        await browser.url(`file://${screenshotPath}`);

        const context = await browser.browsingContextGetTree({});
        await browser.browsingContextCaptureScreenshot({context: context.contexts[0].context});
    })
})
