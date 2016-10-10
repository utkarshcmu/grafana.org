module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.loadNpmTasks("grunt-execute");
  grunt.loadNpmTasks("grunt-contrib-clean");

  var env = grunt.option('env') || "dev";
  var port = parseInt(grunt.option('port') || "3002");

  grunt.initConfig({
    clean: ["dist"],

    copy: {
    },

    watch: {
      options: {
        livereload: port+1,
      },
      content: {
        files: ["content/**/*", "layouts/**/*"],
        tasks: ["hugo:dev"],
        options: {spawn: false},
      },
      sass: {
        files: ["static/sass/**/*"],
        tasks: ["hugo:dev", "assets-dev"],
        options: {
          spawn: false
        }
      },
      js: {
        files: ["static/js/**/*"],
        tasks: ["hugo:dev", "assets-dev"],
        options: {
          spawn: false
        }
      },
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "dist/css/styles.css": "static/sass/styles.scss",
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"}), // add vendor prefixes
        ]
      },
      dist: {
        src: "dist/css/*.css"
      }
    },

    connect: {
      mysite: {
        options: {
          hostname: "*",
          port: port,
          protocol: "http",
          base: "dist",
          livereload: port+1,
          keepalive: true,
        }
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets:  ["es2015"],
        plugins: ["transform-es2015-modules-systemjs", "transform-es2015-for-of"],
      },
      dist: {
        files: [{
          cwd: "static",
          expand: true,
          src: ["js/**/*.js", "!js/system.conf.js"],
          dest: "dist",
          ext:".js"
        }]
      },
    },

    concat:  {
      js: {
        src: [
          'dist/bower/es6-shim/es6-shim.js',
          'dist/js/app.bundle.js',
        ],
        dest: 'dist/js/app.bundle.js'
      },
    },

    cssmin: {
      build: {
        expand: true,
        cwd: "dist/css",
        src: ["*.css"],
        dest: "dist/css"
      }
    },

    uglify: {
      build: {
        expand: true,
        src: ["**/*.js"],
        dest: 'dist/js',
        cwd: 'dist/js',
        options: {
          quite: true,
          compress: {},
          preserveComments: false,
        }
      }
    },

    usemin: {
      html: ["dist/**/*.html"],
      options: {
        assetsDirs: ['dist']
      }
    },

    filerev: {
      options: {encoding: "utf8", algorithm: "md5", length: 8},
      js: {
        src: "dist/js/app.bundle.js",
        dest: "dist/js",
      },
      css: {
        src: "dist/css/styles.css",
        dest: "dist/css",
      }
    }

  });

  grunt.registerTask("hugo", function(target) {
    var done = this.async();
    var args = ["--destination=dist/"];

    switch (env) {
      case 'dev':
        args.push("--baseUrl=http://localhost:3002");
        args.push("--buildDrafts=true");
        args.push("--buildFuture=true");
        break;
      case 'staging':
        args.push("--buildDrafts=true");
        args.push("--baseUrl=http://staging.grafana.org");
        break;
      case 'prod':
        args.push("--baseUrl=http://grafana.org");
        break;
      case 'docs':
        args.push("--baseUrl=http://localhost:3002");
        args.push("--contentDir=docs");
        break;
    }

    hugo = require("child_process").spawn("hugo", args, {stdio: "inherit"});
    hugo.on("exit", function() { done(true); });
    hugo.on("error", function() { done(true); });
  });

  grunt.registerTask('systemjs', function() {
    var Builder = require('systemjs-builder');
    var done = this.async();

    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new Builder('dist', 'dist/js/system.conf.js');
    console.log('Starting systemjs-builder');

    builder
      .buildStatic('js/app.js', 'dist/js/app.bundle.js')
      .then(function() {
        console.log('Build complete');
        done();
      })
        .catch(function(err) {
          console.log('Build error');
          console.log(err);
          done(false);
        });
  });

  grunt.registerTask("assets-dev", [
    "sass",
    "postcss",
    "babel",
    "systemjs",
    "concat",
  ]);

  grunt.registerTask("default", [
    "hugo",
    "assets-dev",
  ]);

  grunt.registerTask("build", [
    "clean",
    "hugo",
    "assets-dev",
    "cssmin",
    "uglify",
    "filerev",
    "usemin",
  ]);

};

