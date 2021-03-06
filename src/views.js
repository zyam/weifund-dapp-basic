// app views
const views = [
  'view-campaign-contribute',
  'view-campaign-contribute-receipt',
  'view-campaign-payout',
  'view-campaign-payout-receipt',
  'view-campaign-refund',
  'view-landing',
  'view-start-campaign',
  'view-register',
  'view-list',
  'view-focus',
  'view-receipt',
  'view-account',
  'view-404',
];

// app subviews
const subViews = [
  'view-campaign-info',
  'view-campaign-details',
  'view-campaign-contracts',
  'view-campaign-qr',

  'view-campaign-refund-form',
  'view-campaign-refund-review',
  'view-campaign-refund-receipt',

  'view-campaign-contribute-method',
  'view-campaign-contribute-wallet',
  'view-campaign-contribute-exchanges',
  'view-campaign-contribute-ether-method',
  'view-campaign-contribute-cryptocurrency-method',
  'view-campaign-contribute-ether-qrcode',
  'view-campaign-contribute-form',
  'view-campaign-contribute-receipt',
  'view-campaign-contribute-review',
];

// close all views
const closeAllSubViews = function() {
  // set all views to hidden
  subViews.forEach(function(viewId) {
    if (document.querySelector(`#${viewId}`) === null) {
      return;
    }

    document.querySelector(`#${viewId}`).style.display = 'none';
  });
};

// close all views
const closeAllViews = function() {
  // set all views to hidden
  views.forEach(function(viewId) {
    document.querySelector(`#${viewId}`).style.display = 'none';
  });
};

// open view
const openView = function(openViewId) {
  window.scrollTo(0, 0);
  document.querySelector(`#footer-wrapper`).style.display = 'none';

  // clsoe all views
  closeAllViews();

  // open selected view
  document.querySelector(`#${openViewId}`).style.display = '';
  document.querySelector(`#footer-wrapper`).style.display = '';
};

// open view
const openSubView = function(openViewId) {
  // clsoe all views
  closeAllSubViews();

  // open selected view
  document.querySelector(`#${openViewId}`).style.display = '';
};

// export
module.exports = {
  views: views,
  openView: openView,
  closeAllViews: closeAllViews,
  closeAllSubViews: closeAllSubViews,
  openSubView: openSubView,
};
