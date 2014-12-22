require
.config({
   paths : {
      'domReady' : 'bower_components/requirejs-domready/domReady',
      'jquery' : 'bower_components/jquery/dist/jquery.min',
      'angular' : 'bower_components/angular/angular',
      'angular-route' : 'bower_components/angular-route/angular-route',
      'angular-resource' : 'bower_components/angular-resource/angular-resource',
      //				'angular-mocks' : 'bower_components/angular-mocks/angular-mocks',
      'modernizr' : 'bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min',
      'ui-bootstrap' : 'bower_components/angular-bootstrap/ui-bootstrap-tpls.min'
   },
   shim : {
      'angular' : {
         deps : [ 'jquery' ],
         exports : 'angular'
      },
      'angular-route' : {
         deps : [ 'angular' ]
      },
      'angular-resource' : {
         deps : [ 'angular' ]
      },
      //				'angular-mocks' : {
      //					deps : [ 'angular' ]
      //				},
      'ui-bootstrap' : {
         deps : [ 'angular' ]
      },
      'script-news' : {
         deps : [ 'jquery' ]
      },
      'script' : {
         deps : [ 'script-news' ]
      }
   },

   deps : [ './bootstrap' ]
});
