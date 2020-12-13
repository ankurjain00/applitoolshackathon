import selector from '../Selectors/selectors'
import Eyes from '@applitools/eyes-testcafe';
const eyes = new Eyes();

fixture`AppliFashion`
    .page('http://demo.applitools.com/tlcHackathonMasterV1.html')
    .afterEach(async () => eyes.close())
    // .after(async () => eyes.waitForResults());

test('main page', async t => {
    await eyes.open({
        appName: 'AppliFashion',
        testName: 'Test 1',
        browser: [{ width: 1200, height: 800, name: 'firefox' }],
        t
    });
    await eyes.checkWindow('main page');
});

test('filter by color', async t => {
    await eyes.open({
        appName: 'AppliFashion',
        testName: 'Test 2',
        browser: [{ width: 1200, height: 800, name: 'firefox' }],
        t
    });
    await selector.clickOnBlackFilter()
    await selector.clickOnFilterButton()
    await eyes.checkWindow({
        target: 'region',
        selector: Selector('#product_grid')
    });
});



