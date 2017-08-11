module.exports = {
    vendorScripts: [
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js'
    ],
    appScripts: [
        'app/app.js',
        'app/**/*.service.js',
        'app/**/*.ui.js',
        'app/**/*.component.js'
    ],
    templates: [
        '!index.html',
        'app/**/*.html'
    ],
    css: [
        'app/**/*.*.scss'
    ]
};