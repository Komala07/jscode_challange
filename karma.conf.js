module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'node_modules/sinon/pkg/sinon-1.17.*.js',        
        'script.js',
        '**/*.test.js'
        ],

        reporters: ['progress'], 
        port: 9876, 
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false

    });
};