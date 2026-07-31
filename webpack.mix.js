const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Compile assets - ONLY ONCE
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

// Copy PWA assets
mix.copy('resources/js/service-worker.js', 'public/service-worker.js');
mix.copy('public/manifest.json', 'public/manifest.json');
mix.copy('public/icons', 'public/icons');

// Add Vue support
mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
});

// Version files in production
if (mix.inProduction()) {
    mix.version();
}

// Options
mix.options({
    processCssUrls: false,
    clearConsole: true
});