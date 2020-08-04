const puppeteer = require('puppeteer');
var fs = require('fs');

async function run() {
  const browser = await puppeteer.launch({
    defaultViewport: null
      //headless: false,
      //args: [ '--proxy-server=http://localhost:8080', '--ignore-certificate-errors ' ]
      //args: [ '--ignore-certificate-errors ' ]
  });
  
  var strftime = require('strftime') // not required in browsers
  var fts = strftime('%Y%m%d%H%M')
  var dir = `az-${fts}`

  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) throw err;
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  
  await page.goto('https://www.azdhs.gov/preparedness/epidemiology-disease-control/infectious-disease-epidemiology/covid-19/dashboards/index.php', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_summary.png` , fullPage: true});

  await page.click('a[class=demodashboard]', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_demo.png` , fullPage: true});

  await page.click('a[class=deathdashboard]', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_death.png` , fullPage: true});

  await page.click('a[class=zipdashboard]', { waitUntil: 'networkidle0' });
  await page.waitFor(8000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_zip.png` , fullPage: true});

  await page.click('a[class=confirmed-cases-by-day]', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_confirmed-cases-by-day.png` , fullPage: true});

  await page.click('a[class=hospitalizationdashboard]', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_hospitalizationdashboard.png` , fullPage: true});

  await page.click('a[class=covidlikedashboard]', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_covidlikedashboard.png` , fullPage: true});

  await page.click('a[class=labtestingdashboard]', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_labtesting.png` , fullPage: true});

  await page.click('a[class=congregate-settings]', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_congregatesettings.png` , fullPage: true});

  await page.click('a[class=hospitalbeddashboard]', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_bedusage.png` , fullPage: true});
  
  await page.click('a[class=ventilatordashboard]', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_azdhs_ventilator.png` , fullPage: true});

  await page.goto('https://tableau.azdhs.gov/views/EMResourceBeds/InpatientBedUsageAvailability?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Ftableau.azdhs.gov%2F&%3Aembed_code_version=3&%3Atabs=yes&%3Atoolbar=no&%3AshowAppBanner=false&%3Adisplay_spinner=no&iframeSizedToWindow=true&%3AloadOrderID=6', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_InpatientBedUsageAvailability_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/EMResourceBeds/EDBedUsageAvailability?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Ftableau.azdhs.gov%2F&%3Aembed_code_version=3&%3Atabs=yes&%3Atoolbar=no&%3AshowAppBanner=false&%3Adisplay_spinner=no&iframeSizedToWindow=true&%3AloadOrderID=6', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_EDBedUsageAvailability_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/EMResourceBeds/ICUBedUsageAvailability?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Ftableau.azdhs.gov%2F&%3Aembed_code_version=3&%3Atabs=yes&%3Atoolbar=no&%3AshowAppBanner=false&%3Adisplay_spinner=no&iframeSizedToWindow=true&%3AloadOrderID=6', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_ICUBedUsageAvailability_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/ExternalEMResourceCOVIDSpecificDashboard/InpatientCOVID-19?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=yes&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=1', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_InpatientCOVID-19_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/ExternalEMResourceCOVIDSpecificDashboard/VentilatorsinUseCOVID-19?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Ftableau.azdhs.gov%2F&%3Aembed_code_version=3&%3Atabs=yes&%3Atoolbar=no&%3AshowAppBanner=false&%3Adisplay_spinner=no&iframeSizedToWindow=true&%3AloadOrderID=1', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_VentilatorsinUseCOVID-19_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/ExternalEMResourceCOVIDSpecificDashboard/ICUBedsforCOVID-19?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Ftableau.azdhs.gov%2F&%3Aembed_code_version=3&%3Atabs=yes&%3Atoolbar=no&%3AshowAppBanner=false&%3Adisplay_spinner=no&iframeSizedToWindow=true&%3AloadOrderID=1', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_ICUBedsforCOVID_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/ExternalEMResourceCOVIDSpecificDashboard/COVID-19Discharge?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Ftableau.azdhs.gov%2F&%3Aembed_code_version=3&%3Atabs=yes&%3Atoolbar=no&%3AshowAppBanner=false&%3Adisplay_spinner=no&iframeSizedToWindow=true&%3AloadOrderID=1', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_COVID-19Discharge_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/ExternalEMResourceCOVIDSpecificDashboard/COVID-19ED?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Ftableau.azdhs.gov%2F&%3Aembed_code_version=3&%3Atabs=yes&%3Atoolbar=no&%3AshowAppBanner=false&%3Adisplay_spinner=no&iframeSizedToWindow=true&%3AloadOrderID=1', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_COVID-19ED_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/ExternalEMResourceCOVIDSpecificDashboard/IntubationsCOVID?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Ftableau.azdhs.gov%2F&%3Aembed_code_version=3&%3Atabs=yes&%3Atoolbar=no&%3AshowAppBanner=false&%3Adisplay_spinner=no&iframeSizedToWindow=true&%3AloadOrderID=1', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_IntubationsCOVID_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/Vents/VentDashboard?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=2', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_VentDashboard_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/Outbreaks/Outbreaks-New?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=3', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_Outbreaks-New_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/ELRcovid/LaboratoryTestingExternalDraft?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=4', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_LaboratoryTestingExternalDraft_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/CLIILISyndromicSurveillance/CLIDashboard?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=yes&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=4', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_CLIDashboard_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/CLIILISyndromicSurveillance/ILIDashboard?%3Aembed=y&%3AshowVizHome=no&%3Ahost_url=https%3A%2F%2Ftableau.azdhs.gov%2F&%3Aembed_code_version=3&%3Atabs=yes&%3Atoolbar=no&%3AshowAppBanner=false&%3Adisplay_spinner=no&iframeSizedToWindow=true&%3AloadOrderID=4', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_ILIDashboard_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/Hospitalization/HospitalizedCOVID-19Cases?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=5', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_HospitalizedCOVID-19Cases_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/EpiCurve/EpiCurveDashboard?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=7', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_EpiCurveDashboard_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/COVID-19Deaths/Deaths?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=8', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_Deaths_azdhs.png` , fullPage: true});
  await page.goto('https://tableau.azdhs.gov/views/COVID19Demographics/EpiData?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=9', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_EpiData_azdhs.png` , fullPage: true});
  await page.goto('https://adhsgis.maps.arcgis.com/apps/opsdashboard/index.html', { waitUntil: 'networkidle0' });
  await page.waitFor(4000);
  await page.screenshot({ path: `${dir}/az-${fts}_zipmap_azdhs.png` , fullPage: true});
  
  browser.close();
}

run();