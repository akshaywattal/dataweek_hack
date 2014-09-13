'use strict';

angular.module('dataweekHackApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
