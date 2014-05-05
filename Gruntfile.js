'use strict';

module.exports = function( grunt ) {

  // Project configuration
  grunt.initConfig({
    
    // Read information from package file
    pkg: grunt.file.readJSON('package.json'),

    // Metadata for headers
    meta: {
      version: '<%= pkg.version %>',
      banner:
        '/**\n' +
        ' * <%= pkg.description %>\n' +
        ' * v<%= pkg.version %>\n' +
        ' *\n' +
        ' * Copyright (c)<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
        ' * Distributed under <%= pkg.license %> license\n' +
        ' *\n' +
        ' * <%= pkg.homepage %>\n' +
        ' */\n\n'
    },

    // monitors the development server
    nodemon: {
      dev: {
        script: 'sample/server.js'
      }
    },

    // Bower dependencies
    bower: {
      install: {
        options: {
          targetDir: 'app/vendor'
        }
      }
    },

    // compile .scss to .css using sass
    sass: {
      options: {
        includePaths: ['app/vendor/foundation/scss']
      },
      dist: {
        files: {
          'app/css/app.css': 'app/src/scss/app.scss'
        }        
      }
    },

    // checking jshint code
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      app: ['Gruntfile.js', 'app/js/app.js', 'test/**/*.js']
    },

    // watching for changes in files
    watch: {
        javascripts: {
          files: ['Gruntfile.js', 'app/src/js/**/*.js', 'test/**/*.js'],
          tasks: ['concat', 'jshint']
        },
        stylesheets: {
          files: ['app/src/scss/*.scss'],
          tasks: ['sass'],
          options: {
            interrupt: true
        }
      }
    },

    concurrent: {
        server: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    },

    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      build: {
        src: [
          'app/src/js/app.js',
          'app/src/js/dashboard/dashboard.js'
        ],
        dest: 'app/js/app.js'
      }
    }

  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Launches the server services for development
  grunt.registerTask('server', ['compile', 'concurrent:server']);

  // Compile Javascript Client-Side and Processing Stylus to CSS
  grunt.registerTask('compile', ['bower', 'sass', 'concat']);

  // Default Tasks
  grunt.registerTask('default', ['compile']);

};