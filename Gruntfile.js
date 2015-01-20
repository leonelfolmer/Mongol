module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);


  // Configurable paths
  var config = {
    src: 'src',
    dist: 'dist'
  };

  // Project configuration.
  grunt.initConfig({

    // Project settings
    config: config,

    pkg: grunt.file.readJSON('package.json'),
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifiyJS: true,
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.ejs'],
          dest: 'dist/'
        }]
      },
    },
    jshint: {
      files: ['Gruntfile.js', '<%= config.src %>/assets/**/*.js', 'test/<%= config.src %>/assets/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      target: {
        files: [{
          expand: true,
          src: '**/*.js',
          dest: '<%= config.dist %>/assets/scripts',
          cwd: '<%= config.src %>/assets/scripts',
          ext: '.min.js'
        }]
      }
    },
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true
      },
      target: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/styles',
          src: ['*.css', '!*.min.css'],
          dest: '<%= config.dist %>/assets/styles',
          ext: '.min.css'
        }]
      }
    },
    imagemin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>/assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= config.dist %>/assets/images/'
        }]
      }
    },
    copy: {
      fonts: {
        src: 'src/assets/fonts/*',
        dest: 'dist/assets/fonts/'
      },
      server: {
        src: 'src/default.js',
        dest: 'dist/default.js'
      }
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', [
    'htmlmin',
    'jshint',
    'uglify',
    'cssmin',
    'imagemin',
    'copy'
  ]);

};