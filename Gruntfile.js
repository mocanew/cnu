module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options:{
                    style:'compressed'
                },
                files: {
                    'css/styles.css': 'scss/styles.scss'
                }
            }
        },
        autoprefixer:{
            dist:{
                files:{
                    'css/styles.css': 'css/styles.css'
                }
            }
        },
        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass', 'autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default',['sass', 'autoprefixer', 'watch']);
}