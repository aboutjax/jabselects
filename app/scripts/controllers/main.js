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

    SC.get("/playlists", {
        user_id: 55692119,
        limit: 100
    }, function (playlists) {

        var firstPlaylistImageurl = playlists[0].artwork_url

        for(var i = 0; i < playlists.length; i++) {

            SC.oEmbed(playlists[0].uri, document.getElementById('player-playlist'));
            $('.playlist-items').append($('<li class="playlist-item"></li>').html('<img src="' + playlists[i].artwork_url + '"> <a href="' + playlists[i].permalink_url + '">' + playlists[i].title + '</a>' + '<span class="playlist-creation-date"></span>'));
        }
    });

  });
