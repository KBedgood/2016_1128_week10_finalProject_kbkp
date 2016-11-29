'use strict';

angular.module('MyApp').factory('Account', function ($http) {
  return {
    getProfile: function getProfile() {
      return $http.get('/api/me');
    },
    updateProfile: function updateProfile(profileData) {
      return $http.put('/api/me', profileData);
    }
  };
});