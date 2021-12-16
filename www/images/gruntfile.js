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
        src: ['_compressed']
      }
    },


imagemin: {
  options: {
    use: [
      pngquant({quality: [0.8, 0.8]}),
      mozjpeg({quality: 80})
    ]
  },
  dynamic: {
    files: [{
      cwd: '',
      expand: true,
      src: ['_img_to_compress/*.{png,jpg}'],
      dest: '_compressed'
    }]
  }
}
});

  grunt.registerTask('compress', ['clean','imagemin']);



    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
}
