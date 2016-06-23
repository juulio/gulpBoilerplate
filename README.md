## Gulp Boilerplate

* This project is intended to be used as a template to work with GULP.

### installation
1. Clone this project into the desired folder

2. On a terminal, go into the project's folder and type `npm install`.  Make sure there's a package.json file on this folder. After this command is properly finished, there will be a new 'node_modules' folder.

3. To run the project type `gulp`.
CSS and javascript will not be minified.

4. To build the project (dist) type `gulp build`.
CSS and javascript will be minified.

### gulpfile tasks
* **sass**: takes all scss files on the app/scss folder and creates the app/css/styles.css file.
* **minify-css**: minifies the app/css/styles.css file.
* **browserSync**: reloads the app on the browser.
* **useref**: concatenates referenced non-optimized js and css files. Uses gulpIf and uglify to minify javascript files.
* **clean**:dist: cleans the dist production environment.
* **cache**:clear: cache clear task.
* **watch**: watches the sass and javascript files and reloads the browser.
* **default**: runs this task sequence in the provided order: sass, browserSync, watch.

### gitignore
There's a .gitignore file. It avoids the following files and folders to be included on the git repository.
* the node_modules folder
* DS_Store files
* sass-cache files
* dist production folder
