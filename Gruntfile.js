// #global module:false

"use strict"

module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-exec");

	grunt.initConfig({
	    copy: {
			jquery: {
				files: [{
					expand: true,
					cwd: "bower_components/jquery/dist/",
					src: "jquery.min.js",
					dest: "vendor/js/"
				}]
			},
			scrollto: {
				files: [{
					expand: true,
					cwd: "bower_components/jquery-scrollto/src/static/lib/",
					src: "jquery-scrollto.js",
					dest: "vendor/js/"
				}]
			},
			slick: {
				files: [{
					expand: true,
					cwd: "bower_components/slick-carousel/slick/",
					src: "slick.min.js",
					dest: "vendor/js/"
				},
				{
					expand: true,
					cwd: "bower_components/slick-carousel/slick/",
					src: "slick.css",
					dest: "vendor/css/"
				}]
			}
		},
	    exec: {
			jekyll: {
				cmd: "jekyll build --trace"
			}
		},
	    watch: {
			options: {
				livereload: true
			},
			source: {
				files: [
					"_drafts/**/*",
					"_includes/**/*",
					"_layouts/**/*",
					"_posts/**/*",
					"_sass/**/*",
					"css/**/*",
					"images/**/*",
					"js/**/*",
					"_config.yml",
					"*.html",
					"*.md"
				],
				tasks: [
					"exec:jekyll"
				]
			}
		},
	    connect: {
			server: {
				options: {
					port: 4000,
					base: '_site',
					livereload: true
				}
			}
		}
	});

	grunt.registerTask("build", [
		"copy",
		"exec:jekyll"
	]);

	grunt.registerTask("serve", [
		"build",
		"connect:server",
		"watch"
	]);

	grunt.registerTask("default", [
		"serve"
	]);

}
