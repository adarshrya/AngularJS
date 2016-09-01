// map tells the System loader where to look for things
var map = {
    'app': 'app', // 'dist',
    'rxjs': 'js/vendor/rxjs',
    '@angular': 'js/vendor/@angular',
    'angular2-in-memory-web-api': 'js/vendor/angular2-in-memory-web-api'
};

// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    'app': {main: 'boot.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'},
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/upgrade'
];

// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
packageNames.forEach(function (pkgName) {
    packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
});

var config = {
    map: map,
    packages: packages
};

System.config(config);