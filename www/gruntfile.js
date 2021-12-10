'use strict'
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');


module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      html: {
        files: [{
          expand: true,
          dot: true,
          cwd: './',
          src: ['*.html'],
          dest: 'dist'
        }]
      }
    },

    clean: {
      build: {
        src: ['comp_slider']
      }
    },


imagemin: {
  options: {
    use: [
      pngquant({quality: [0.4, 0.4]}),
      mozjpeg({quality: 40})
    ]
  },
  dynamic: {
    files: [{
      cwd: '',
      expand: true,
      src: ['slider/*.{png,jpg}'],
      dest: 'comp_slider'
    }]
  }
}
});

  grunt.registerTask('compress', ['clean','imagemin']);



    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
}
