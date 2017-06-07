/* global module */
module.exports = function(grunt) {
  'use strict';

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Code Quality Tasks
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    copy: {
      extension: {
        files: [{
          src: 'manifest.json',
          dest: 'simplr_extension/'
        }, {
          src: 'background.js',
          dest: 'simplr_extension/'
        }, {
          expand: true,
          flatten: true,
          filter: 'isFile',
          src: 'bower_components/jquery/dist/jquery.min.js',
          dest: 'simplr_extension/scripts/'
        }, {
          expand: true,
          flatten: true,
          src: 'images/extension_icons/*',
          dest: 'simplr_extension/images/'
        }]
      }
    },

    zip_directories: {
      extension: {
        files: [{
          filter: 'isDirectory',
          expand: true,
          src: ['simplr_extension'],
          dest: './'
        }]
      }
    }
    // End of Task Config
  });

  // Task Registration

  // Default task
  grunt.registerTask('default', ['copy']);
  //Zip extension for chrome upload
  grunt.registerTask('extension', ['default', 'zip_directories']);
};
