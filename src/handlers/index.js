
// require components
const components = require('../components');

// environment
const environment = require('../environment');
const getNetwork = environment.getNetwork;
const getLocale = environment.getLocale;
const txObject = environment.txObject;
const getDefaultAccount = environment.getDefaultAccount;
const setDefaultAccount = environment.setDefaultAccount;
const setLocale = environment.setLocale;

// require i18n
const t = require('../i18n').t;

const util = require('weifund-util');

// draw utils
const buildAllNavToggles = require('./drawAllNavToggles');
const buildAllInputSliders = require('./drawAllInputSliders');
const handleStartCampaign = require('./handleStartCampaign');

const buildLocaleToggles = function() {
  [].slice.call(document.querySelectorAll('.input-locale-toggle')).forEach(function(inputToggleElement){
    // check if toggle is listening
    if (inputToggleElement.dataset.listening) {
      return;
    }

    // add supported locales
    inputToggleElement.innerHTML = `
      <option>Locale</option>
      <option value="en">en</option>
      <option value="zh">zh</option>
    `;

    // input is now listening
    inputToggleElement.dataset.listening = true;

    // add toggle event listener
    inputToggleElement.addEventListener('change', function(localeToggleEvent){
      // input toggle value
      const inputToggleValue = inputToggleElement.value;

      // set the locale
      setLocale(inputToggleValue);

      // localtion reload
      location.reload();
    });
  });
};

const drawFooter = function() {
  document.body.querySelector('#footer-wrapper').innerHTML = components.footer({t: t});
  buildLocaleToggles();
};

const drawNavBar = function() {
  document.body.querySelector('#nav-wrapper').innerHTML = components.navBar({t: t});
  buildAllNavToggles();
  buildLocaleToggles();
};

// start campaign draw
const drawStartCampaignView = function(options) {
  document.querySelector('#view-start-campaign').innerHTML = components.startCampaignView({t: t});

  // build all sliders
  buildAllInputSliders();

  document.querySelector('#startCampaign_useMyAccount').addEventListener('click', function(event){
    document.querySelector('#startCampaign_beneficiary').value = getDefaultAccount();
  });

  // add start campaign button
  document.querySelector('#startCampaign_button').addEventListener('click', handleStartCampaign);
};

// module exports
module.exports = {
  drawNavBar: drawNavBar,
  drawFooter: drawFooter,
  drawStartCampaignView: drawStartCampaignView,

  loadAndDrawCampaign: require('./loadAndDrawCampaign'),
  loadAndDrawCampaignRefund: require('./loadAndDrawCampaignRefund'),
  loadAndDrawCampaignPayout: require('./loadAndDrawCampaignPayout'),
  loadAndDrawCampaignContribute: require('./loadAndDrawCampaignContribute'),
  loadAndDrawCampaignsList: require('./loadAndDrawCampaignsList'),
  loadAndDrawAccount: require('./loadAndDrawAccount'),
  handleConfirmOnPageExit: require('./handleConfirmOnPageExit'),

  handleStartCampaign: handleStartCampaign,
  handleRegisterCampaign: require('./handleCampaignRegistration'),
  handleCampaignContribution: require('./handleCampaignContribution'),
  handleCampaignRefund: require('./handleCampaignRefund'),
  handleCampaignPayout: require('./handleCampaignPayout'),
  handleRegisterCampaignData: require('./handleCampaignDataRegistration'),
};
