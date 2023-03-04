module.exports = function(grunt) {
  'use strict';
  const sass = require('sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      src: {
        fonts: 'src/fonts',
        images: 'src/img',
        documents: 'src/documents',
        favicon: 'src/favicon',
        root: 'src',
        scripts: 'src/js',
        styles: 'src/scss',
      },
      dest: {
        assets: 'craft/web/assets',
        fonts: 'craft/web/assets/fonts',
        images: 'craft/web/assets/img',
        documents: 'craft/web/assets/',
        icons: 'craft/web/assets/icons',
        favicon: 'craft/web/assets/favicon',
        root: 'craft/web',
        craft: 'craft',
        templates: 'craft/templates',
        scripts: 'craft/web/assets/js',
        styles: 'craft/web/assets/css',
      }
    },

    //
    // Clean
    //

    clean: [
      '<%= config.dest.styles %>/**'
    ],

    //
    // Watch
    //

    watch: {
      assets: {
        files: [
          '<%= config.src.fonts %>/{**/*,*}',
          '<%= config.src.documents %>/{**/*,*}',
          '<%= config.src.images %>/{**/*,*}.{svg,png,jpg,json,JPG}'
        ],
        tasks: ['assets'],
        options: {
          livereload: true
        }
      },
      templates: {
        files: [
          '<%= config.dest.templates %>/{**/**/*,**/*,*}.twig',
        ],
        tasks: ['assets'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['<%= config.src.scripts %>/{**/**/*,**/*,*}.js'],
        tasks: ['scripts'],
        options: {
          livereload: true
        }
      },
      styles: {
        files: ['<%= config.src.styles %>/{**/**/*,**/*,*}.scss'],
        tasks: ['styles'],
        options: {
          livereload: true
        }
      }
    },

    //
    // Assets
    //

    copy: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= config.src.root %>',
          src: [
            'fonts/{**/*,*}',
            'documents/{**/*,*}',
            'icons/{**/*,*}.{png,jpg,json,xml}',
            'js/*.es5.js',
            'js/plugins/*.js'
          ],
          dest: '<%= config.dest.assets %>'
        }],
     },
     images: {
         files: [{
           expand: true,
           cwd: '<%= config.src.images %>',
           src:  '{**/*,*}.{svg,png,jpg,json,JPG}',
           dest: '<%= config.dest.images %>'
         }],
      },
      favicon: {
          files: [{
            expand: true,
            cwd: '<%= config.src.favicon %>',
            src:  '{**/*,*}.{svg,png,jpg,json,JPG}',
            dest: '<%= config.dest.favicon %>'
          }],
       },
   },

    svgmin: {
      icons: {
        expand: true,
        cwd: '<%= config.src.images %>',
        src: ['{**/*,*}.svg'],
        dest: '<%= config.dest.images %>',
        options: {
          plugins: [
            { removeViewBox: false }
          ]
        }
      },
    },

    //
    // Styles
    //

    sass: {
      dev: {
        options: {
          implementation: sass,
        },
        files: [{
          expand: true,
          cwd: '<%= config.src.styles %>',
          src: ['*.scss'],
          dest: '<%= config.dest.styles %>',
          ext: '.css'
        }]
      }
    },

 

    // Config thx for https://tailwindcss.com/docs/controlling-file-size. Make sure to get a grip of the concatenation!
    purgecss: {
      dev: {
        options: {
          content: [
            '<%= config.dest.templates %>/{**/**/*,**/*,*}.twig',
            '<%= config.dest.scripts %>/{**/**/*,**/*,*}.js'
          ],
          whitelistPatterns: [
            /js-*/,
            /theme-*/,
            /ui-icon-*/,
            /w-*/,
          ],
          defaultExtractor: content => {
            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug – should be improved for TWIG
            const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

            return broadMatches.concat(innerMatches)
          }
        },
        files: [{
          expand: true,
          cwd: '<%= config.dest.styles %>',
          src: ['*.post.css'],
          dest: '<%= config.dest.styles %>',
          ext: '.purged.css'
        }]
      }
    },

    //
    // Scripts
    //

    browserify: {
      es5: {
        options: {
          debug: true,
          mangle: false,
          transform: ["babelify"]
        },
        files: [{
          expand: true,
          cwd: '<%= config.src.scripts %>',
          src: ['*.es6.js'],
          dest: '<%= config.dest.scripts %>',
          rename: function (dst, src) {
            return dst + '/' + src.replace('.es6.js', '.es5.js');
          }
        }]
      },
      mjs: {
        options: {
          debug: true,
          mangle: false,
          transform: [["babelify", {
            "presets": [["@babel/preset-env", {
              "targets": { "esmodules": true }
            }]]
          }]]
        },
        files: [{
          expand: true,
          cwd: '<%= config.src.scripts %>',
          src: ['*.es6.js'],
          dest: '<%= config.dest.scripts %>',
          rename: function (dst, src) {
            return dst + '/' + src.replace('.es6.js', '.module.js');
          }
        }]
      },
    },

    uglify: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= config.dest.scripts %>',
          src: ['*.js','!*.min.js'],
          dest: '<%= config.dest.scripts %>',
          rename: function (dst, src) {
            return dst + '/' + src.replace('.js', '.min.js');
          }
        }]
      }
    },
  });

  // NPM Tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-svgmin');

  // Register Tasks
  grunt.registerTask('serve', [
    'clean',
    'assets',
    'styles',
    'scripts',
    'watch'
  ]);

  grunt.registerTask('assets', [
    'copy',
    //'svgmin'
  ]);

  grunt.registerTask('styles', [
    'sass',

  ]);

  grunt.registerTask('scripts', [
    'browserify',
    'uglify'
  ]);

  grunt.registerTask('default', ['serve']);

  grunt.event.on('watch', function(action, filepath) {
    grunt.config(['all'], filepath);
  });
};
