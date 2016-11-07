(function(global) {

  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/',

      'booking-funnel:': 'ng2/src/app/booking-funnel',
      'core:': 'ng2/src/app/core',
      'content:': 'ng2/src/app/content'

    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'ng2',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
      'lodash': 'npm:lodash',
      'moment': 'npm:moment',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'ts': 'npm:plugin-typescript@5.2.7',
      'typescript': 'npm:typescript@2.0.7'
    },
    transpiler: 'ts',
    typescriptOptions: {
      "typeCheck": false,
      "allowNonTsExtensions": true,
      tsconfig: 'ng2/inbrowser/_tsconfig.json' // also accepts a path
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: 'ng2/inbrowser/main.ts',
        defaultExtension: 'ts',
        "meta": {
          "*.ts": {
            "loader": "ts"
          }
        }
      },
      rxjs: {
        defaultExtension: 'js',
        "meta": {
          "*.ts": {
            "loader": "ts"
          }
        }
      },
      "ts": {
        "main": "lib/plugin.js"
      },
      "typescript": {
        "main": "lib/typescript.js",
        "meta": {
          "lib/typescript.js": {
            "exports": "ts"
          }
        }
      }
    },
    meta: {
      'npm:typescript@2.0.7': {
        format: 'global'
      }
    }
  });
})(this);
