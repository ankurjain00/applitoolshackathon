import products from '../Selectors/ProductPage'
import Eyes from '@applitools/eyes-testcafe';
const eyes = new Eyes();

fixture`AppliFashion`
    .page('http://demo.applitools.com/tlcHackathonMasterV1.html')
    .afterEach(async () => eyes.close())

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
    await products.clickOnBlackFilter()
    await products.clickOnFilterButton()
    await eyes.checkWindow({
        target: 'region',
        selector: products.productList,
        content: [
            {selector: products.firstBlackShoe},
            {selector: products.secondBlackShoe}
        ]
    });
});

test('product details', async t => {
    await eyes.open({
        appName: 'AppliFashion',
        testName: 'Test 3',
        browser: [{ width: 1200, height: 800, name: 'firefox' }],
        t
    });
    await products.clickOnXNight()
    await eyes.checkWindow({
        target: 'region',
        selector: products.productImgSection,
        content: [
            {selector: products.shoeName},
            {selector: products.shoeImg},
        ]});
    await eyes.checkWindow({
        target: 'region',
        selector: products.productDescSection,
        content: [
            {selector: products.rating},
            {selector: products.description},
        ]});
    await eyes.checkWindow({
        target: 'region',
        selector: products.productPriceSection,
        content: [
            {selector: products.newPrice},
            {selector: products.oldPrice},
            {selector: products.discount},
            {selector: products.size},
            {selector: products.quantity},
            {selector: products.addToCartButton}
        ]});
});

