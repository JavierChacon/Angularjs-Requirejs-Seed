module.exports = function(config){
   config.set({

      basePath : '../',

      files : [
//         'app/bower_components/angular/angular.js',
//         'app/bower_components/angular-route/angular-route.js',
//         'app/bower_components/angular-mocks/angular-mocks.js',
//         'app/controllers/**/*.js',
//         'app/directives/**/*.js',
//         'app/filters/**/*.js',
//         'app/services/**/*.js',
//         'app/view*/**/*.js',
//         'test/unit/**/*.js'
         {pattern: 'app/js/*.js', included: false},
         {pattern: 'app/js/**/*.js', included: false},
         {pattern: 'test/unit.js', included: false},
         {pattern: 'test/unit/*.js', included: false},
         {pattern: 'test/unit/**/*.js', included: false},
         {pattern: 'app/bower_components/**/*.js', included: false},
         // needs to be last http://karma-runner.github.io/0.10/plus/requirejs.html
         'test/main-test.js'
      ],

      autoWatch : true,

      frameworks: ['jasmine', 'requirejs'],

      browsers : ['Chrome']

   });
};
