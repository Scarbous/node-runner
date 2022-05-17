module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            dist: {
                files: {
                    'dist/main.css': 'src/main.css'
                }
            }
        },
        watch: {
            options: {
                reload: true
            },
            css: {
                files: [
                    'src/*.css',
                ],
                tasks: ['css']
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    /**
     * Grunt tasks
     */
    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('dev', ['build', 'watch']);
    grunt.registerTask('build', ['css']);
    grunt.registerTask('default', ['build']);

};
