'use strict';

(function() {

  class MainController {

    constructor() {
    }

    $onInit() {
      function doAnimations(elems){
        var animEndEv = 'webkitAnimationEnd animationend';
        elems.each(function(){
          var $this = $(this),
          $animationType = $this.data('animation');
          $this.addClass($animationType).one(animEndEv, function(){
            $this.removeClass($animationType);
          });
        });
      }
      //variables on page load
      var $myCarousel = $('#productosCarousel'),
      $firstAnimatingElems = $myCarousel.find('.item:first').find(
        "[data-animation ^= 'animated']");
      //inicialize carousel
      $myCarousel.carousel();
      //animate captions in first slide on page load
      doAnimations($firstAnimatingElems);

      //pause carousel
      //$myCarousel.carousel('pause');

      //other slide to be animated on carousel slide event
      $myCarousel.on('slide.bs.carousel', function(e){
        var $animatingElems = $(e.relatedTarget).find(
          "[data-animation ^= 'animated']");
          doAnimations($animatingElems);
      });
    }
  }

  angular.module('practicaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
