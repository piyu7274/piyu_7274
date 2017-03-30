(function() {
  'use strict';

  angular
    .module('emsdashboard')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
