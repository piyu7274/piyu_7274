(function() {
  'use strict';

  angular
    .module('emsdashboard')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,cfpLoadingBarProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
      toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = false;
    toastrConfig.preventOpenDuplicates= true;
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  }

})();
