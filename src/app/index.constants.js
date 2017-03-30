/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('emsdashboard')
    .constant('malarkey', malarkey)
    .constant('moment', moment)



  //local


  .constant('APP_CONSTANT', {
    socketURL : "http://localhost:8088",
    loginURL: "http://localhost:8088/api/v1/company/",
    URL: "http://localhost:8088/api/v1/"
  })

})();
