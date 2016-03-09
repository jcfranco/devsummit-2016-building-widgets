module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      sass: {
        options: {
          interval: 5007, // keeps CPU usage low
          spawn: false
        },
        files: ['{3,4}x/**/*.{scss,sass}'],
        tasks: ['sass']
      }
    },
    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: [{
          expand: true,
          src: ['{3,4}x/**/*.{scss,sass}'],
          ext: '.css'
        }]
      }
    }
  });

  // Load grunt plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Default task
  grunt.registerTask('default', ['watch']);
};
