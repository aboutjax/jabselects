'use strict';

/**
 * @ngdoc function
 * @name jabselectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jabselectsApp
 */
angular.module('jabselectsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    SC.initialize({
        client_id: "f30c911cc97614111e684e20169f2757",
        redirect_uri: "http://example.com/callback.html",
      });

    SC.get("/tracks", {
      user_id: 5889536,
      limit: 100
  }, function (tracks) {

      for (var i = 0; i < tracks.length; i++) {

          console.log(tracks[i].title)
      }

  });

    SC.get("/playlists", {
        user_id: 55692119,
        limit: 100
    }, function (playlists) {

        for(var i = 0; i < playlists.length; i++) {

            console.log(playlists[i].title)
        }
    });

  });
