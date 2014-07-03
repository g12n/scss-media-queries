

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        options: {
              style: 'compressed', 
              compass: true
        },
        files: {
              'build/css/mediaqueries.css': 'src/sass/mediaqueries.scss'
        }
      }
    },
  watch: {
    css: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
    },
    html:{
      files: ['src/*.html'],
      tasks: ['copy:html']

    }
  },  
  copy:{
    html:{
       files: [{expand: true, cwd: 'src/', src: ['*.html'], dest: 'build/'}]
    }
  },

  'gh-pages': {
    options: {
      base: 'build'
    },
    src: ['**']
  }


});



  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');


  // default Task for compiling SCSS and build docu (cross browser test)
  grunt.registerTask('default', ['sass', 'copy','watch']);
  
};
