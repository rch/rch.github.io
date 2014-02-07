'use strict';

/* Directives */

angular.module('myApp.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  
  .directive('appSwipe', ['version', function(version) {
    return function(scope, elm, attrs) {
    	
    	if ( window.jQuery || window.Zepto ) {
  		  (function($) {
  		    $.fn.Swipe = function(params) {
  		      return this.each(function() {
  		        $(this).data('Swipe', new Swipe($(this)[0], params));
  		      });
  		    }
  		  })( window.jQuery || window.Zepto )
  		}
    	
    	alert(Swipe);

      elm.text(version);
    };
    
  }]);
  
