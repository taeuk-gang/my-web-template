/* eslint-disable @typescript-eslint/camelcase */
/* global describe, beforeEach, it, before, after, afterEach */
const webdriver = require('selenium-webdriver');
const ie = require('selenium-webdriver/ie');
const options = new ie.Options();
const { startServer } = require('es-dev-server/dist/start-server');
const { createConfig } = require('es-dev-server/dist/config');
const path = require('path');
const fs = require('fs');
const baselineDir = `${process.cwd()}/test/integration/screenshots-baseline`;

describe('📸 capture...', () => {
  let server, browser;  

  before(async () => {
    const config = createConfig({
      port:4445, 
      appIndex: `index.html`,
      rootDir: path.join(__dirname, '../../../dist'), 
      compatibility: `none`,
      nodeResolve: true,
    });
    server = await startServer(config);
    const makeFolder = () => {
      if (!fs.existsSync(baselineDir)){
        fs.mkdirSync(baselineDir);
      }
  
      if (!fs.existsSync(`${baselineDir}/wide-ie`)){
        fs.mkdirSync(`${baselineDir}/wide-ie`);
      }
      if (!fs.existsSync(`${baselineDir}/narrow-ie`)){
        fs.mkdirSync(`${baselineDir}/narrow-ie`);
      }
    }
    
    makeFolder();
  });

  after((done) => server.server.close(done));

  beforeEach(async () => {
    const capabilities = webdriver.Capabilities.ie();
    capabilities.set("ignoreProtectedModeSettings", true);
    capabilities.set("ignoreZoomSetting", true);  

    options.set("ignoreProtectedModeSettings", true);
    options.set("ignoreZoomSetting", true);  
    options.ignoreZoomSetting(true);

    browser = await new webdriver.Builder()
    .setIeOptions(options)
    .withCapabilities(capabilities)    
    .usingServer(`http://127.0.0.1:4444/wd/hub`)
    .build();
  });

  afterEach(async () => {
    await browser.quit();
  });

  it('capture home...', async () => {    
    await browser.manage().window().maximize();

    await browser.get('http://127.0.0.1:4445/');
    await browser.wait(webdriver.until.elementLocated(webdriver.By.css('#pageHome')));
      
    // IF window zoom 150%
    await browser.executeScript("document.body.style.zoom='66.66%'");
    await browser.takeScreenshot().then((data) => {        
      const base64Data = data.replace(/^data:image\/png;base64,/,"");
      fs.writeFile(`${baselineDir}/wide-ie/home.png`, base64Data, 'base64', (err) => {
        if (err) console.log(err);
      });
    });        
  });

  it('capture Test...', async () => {    
    await browser.get('http://127.0.0.1:4445/test');
    await browser.wait(webdriver.until.elementLocated(webdriver.By.css('#pageTest')));
      
    // IF window zoom 150%
    await browser.executeScript("document.body.style.zoom='66.66%'");
    await browser.takeScreenshot().then((data) => {        
      const base64Data = data.replace(/^data:image\/png;base64,/,"");
      fs.writeFile(`${baselineDir}/wide-ie/test.png`, base64Data, 'base64', (err) => {
        if (err) console.log(err);
      });
    });
  });

  it('capture 404...', async () => {    
    await browser.get('http://127.0.0.1:4445/404');
    await browser.wait(webdriver.until.elementLocated(webdriver.By.css('#page404')));
      
    // IF window zoom 150%
    await browser.executeScript("document.body.style.zoom='66.66%'");
    await browser.takeScreenshot().then((data) => {        
      const base64Data = data.replace(/^data:image\/png;base64,/,"");
      fs.writeFile(`${baselineDir}/wide-ie/404.png`, base64Data, 'base64', (err) => {
        if (err) console.log(err);
      });
    });
  });
});
