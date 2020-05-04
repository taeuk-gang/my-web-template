/* global describe, beforeEach, it, before, after, afterEach */
const puppeteer = require('puppeteer');
const { startServer } = require('es-dev-server/dist/start-server');
const { createConfig } = require('es-dev-server/dist/config');
const path = require('path');
const fs = require('fs');
const baselineDir = `${process.cwd()}/test/integration/screenshots-baseline`;

describe('📸 capture...', () => {
  let polyserve, browser, page;

  before(async () => {
    const config = createConfig({
      port:4444, 
      appIndex: `index.html`,
      rootDir: path.join(__dirname, '../../..'), 
      babel: true,
      compatibility: `auto`,      
      fileExtensions: [`.ts`],
      nodeResolve:true,
    });
    polyserve = await startServer(config);
    const makeFolder = () => {
      if (!fs.existsSync(baselineDir)){
        fs.mkdirSync(baselineDir);
      }
  
      if (!fs.existsSync(`${baselineDir}/wide`)){
        fs.mkdirSync(`${baselineDir}/wide`);
      }
      if (!fs.existsSync(`${baselineDir}/narrow`)){
        fs.mkdirSync(`${baselineDir}/narrow`);
      }
    }
    
    makeFolder();
  });

  after((done) => polyserve.server.close(done));

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterEach(() => browser.close());

  it('capture...', async () => {
    return generateBaselineScreenshots(page);
  });
});

async function generateBaselineScreenshots(page) {
  const breakpoints = [
    {width: 800, height: 600},
    {width: 375, height: 667}
  ];
  const prefixes = ['wide', 'narrow'];

  for (let i = 0; i < prefixes.length; i++) {
    const prefix = prefixes[i];
    console.log(prefix + '...');
    page.setViewport(breakpoints[i]);
    // Index.
    await page.goto('http://127.0.0.1:4444/');
    await page.waitForSelector('#pageHome', {visible: true});
    await page.screenshot({path: `${baselineDir}/${prefix}/index.png`});
    // Views.
    await page.goto(`http://127.0.0.1:4444/test`);
    await page.waitForSelector('#pageTest', {visible: true});
    await page.screenshot({path: `${baselineDir}/${prefix}/test.png`});
    // 404.
    await page.goto('http://127.0.0.1:4444/notfound');
    await page.screenshot({path: `${baselineDir}/${prefix}/404.png`});
  }
}
