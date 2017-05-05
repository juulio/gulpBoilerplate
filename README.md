## Gulp Boilerplate

* This project is a GULP template for Front End Projects.

### installation

1. Make sure you have npm and Node.js installed on your local machine.  
To install Node and NPM go to [https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
To check your current version, on a terminal type:  
node -v  
npm -v  
![alt text](http://github.com/juulio/gulp-boilerplate/raw/master/app/img/nodeNpmGulpversion.png "Node Npm Gulp Version")

2. On a terminal type **git clone git@github.com:juulio/gulp-boilerplate.git** to clone the project into the desired folder.

3. Go into the recently cloned project folder, Make sure there's a package.json file and type **npm install**.  
After this command is properly finished, there will be a new 'node_modules' folder.

4. To run the project type **gulp**.
CSS and javascript will not be minified.

5. To build the project type **gulp build**.  
A **dist** folder will be created.  
CSS and javascript will be minified.

### gulpfile tasks
* **sass**: takes all scss files on the app/scss folder and creates the app/css/styles.css file.
* **minify-css**: minifies the app/css/styles.css file.
* **browserSync**: reloads the app on the browser.
* **useref**: concatenates referenced non-optimized js and css files. Uses gulpIf and uglify to minify javascript files.
* **clean**:dist: cleans the dist production environment.
* **cache**:clear: cache clear task.
* **copy-images-folder**: copys the images folder to the dist folder
* **watch**: watches the sass and javascript files and reloads the browser.
* **default**: runs this task sequence in the provided order: sass, browserSync, watch.

### gitignore
There's a .gitignore file. It avoids the following files and folders to be included on the git repository.
* the node_modules folder
* DS_Store files
* sass-cache files
* dist production folder