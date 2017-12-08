module.exports = function(grunt) {
    'use strict';
    
    // Load grunt plugins 'just-in-time'
    require('jit-grunt')(grunt);
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            css: "assets/css",
            js: "assets/js",
            scss: "assets/scss"
        },
        watch: {
            options: {
                spawn: false // Makes watch run A LOT faster, and also lets you pass variables to the grunt tasks being called
            },
            js: {
                files: ['<%= dirs.js %>/src/*.js','components/**/*.js'],
                tasks: ['uglify','jshint']
            },
            scss: {
                files: ['<%= dirs.scss %>/*.scss','components/**/*.scss'],
                tasks: ['compass','concat:css']
            }
        },
        jshint: {
            all: ['<%= dirs.js %>/src/*.js']
        },
        compass: {
            dist: {
                options: {
                    sassDir: '<%= dirs.scss %>',
                    cssDir: '<%= dirs.css %>/src',
                    environment: 'production',
                    raw: 'preferred_syntax = :scss\n', // Use `raw` since it's not directly available
                    outputStyle: 'compressed'
                }
            }
        },
        concat: {
            css: {
                options: {
                    separator: ''
                },
                src: ['<%= dirs.css %>/src/*.css'],
                dest: '<%= dirs.css %>/dist/amarkal-core.min.css'
            }
        },
        uglify: {
            main: {
                options: {
                    sourceMap: true,
                    wrap: 'Amarkal'
                },
                files: {
                    '<%= dirs.js %>/dist/amarkal-core.min.js': [
                        '<%= dirs.js %>/src/core.js'
                    ]
                }
            }
        }
    });
    
    // On watch events configure copy tasks to only run on changed file
    grunt.event.on('watch', function(action, filepath) {
        grunt.config('copy.scss.files.0.cwd', '');
        grunt.config('copy.scss.files.0.src', [filepath]);
    });
};