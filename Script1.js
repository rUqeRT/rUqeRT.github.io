/*var rotspeedx =prompt("rotspeedx")/100 
var rotspeedy =prompt("rotspeedy")/100 
var coloro = prompt("color")*/
var coloro = "#FFD700"	
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: coloro } );
var cube = new THREE.Mesh( geometry, material );
scene.add(cube);
var loader = new THREE.FBXLoader();
loader.load('NewDarkCitrus.fbx', function (object) {
    object.traverse(function (child) {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    scene.add( object );
});
camera.position.z = 5;
var animate = function () {
	requestAnimationFrame( animate );
	var xscale = document.getElementById("myRangex").value;
	var yscale = document.getElementById("myRangey").value;
    var zscale = document.getElementById("myRangez").value;
    var xrot = document.getElementById("myRangespdx").value / 10;
    var yrot = document.getElementById("myRangespdy").value / 10;
    var zrot = document.getElementById("myRangespdz").value / 10;

	cube.rotation.x = xrot;
    cube.rotation.y = yrot;
    cube.rotation.z = zrot;
	cube.scale.x = xscale;
    cube.scale.y = yscale;
    cube.scale.z = zscale;
	
	renderer.render( scene, camera );
};

animate();