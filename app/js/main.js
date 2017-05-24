/*
 * Main Site
 *
 * Global Namespace
 */
 var project_name = window.project_name || {};

/*
 * Global logic
 * @namespace
 */

(function (context) {

	'use strict';

    var camera, scene, renderer, container, controls;
    var cube;

    /*  
     * Init all functions
     */
    function init() {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 4;

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        
        controls = new THREE.OrbitControls( camera, renderer.domElement );

        // Create a Cube Mesh with basic material
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
        var cube = new THREE.Mesh( geometry, material );

        // Add cube to Scene
        scene.add( cube );

        window.addEventListener( 'resize', onWindowResize, false );

        animate();
    }

    /*
     * Handles window resize events
     */
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    /*
     * Updates objects on each frame
     */
    function animate() {
        requestAnimationFrame( animate );

        renderer.render( scene, camera );
    }

    init();

}(project_name));
