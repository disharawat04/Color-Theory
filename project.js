// Initialize Three.js scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGLRenderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create wireframe materials
const redWireframeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const greenWireframeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const blueWireframeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
//const blackWireframeMaterial = new THREE.LineBasicMaterial({color: 0xffffff});
// Create wireframe geometries for the cubes
const redWireframeGeometry = new THREE.WireframeGeometry(new THREE.BoxGeometry());
const greenWireframeGeometry = new THREE.WireframeGeometry(new THREE.BoxGeometry());
const blueWireframeGeometry = new THREE.WireframeGeometry(new THREE.BoxGeometry());
//const blackWireframeGeometry = new THREE.WireframeGeometry(new THREE.BoxGeometry());
// Create wireframe meshes for the cubes
const redWireframeCube = new THREE.LineSegments(redWireframeGeometry, redWireframeMaterial);
const greenWireframeCube = new THREE.LineSegments(greenWireframeGeometry, greenWireframeMaterial);
const blueWireframeCube = new THREE.LineSegments(blueWireframeGeometry, blueWireframeMaterial);
//const blackWireframeCube = new THREE.LineSegments(blackWireframeGeometry, blackWireframeMaterial);

// Position wireframe cubes
redWireframeCube.position.x = -3;
greenWireframeCube.position.x = 0;
blueWireframeCube.position.x = 3;
//blackWireframeCube.position.x= -4;

// Function to animate the scene
function animate() {
    requestAnimationFrame(animate);

    // Rotate wireframe cubes
    redWireframeCube.rotation.x += 0.01;
    redWireframeCube.rotation.y += 0.01;
    
    greenWireframeCube.rotation.x += 0.01;
    greenWireframeCube.rotation.y += 0.01;
    
    blueWireframeCube.rotation.x += 0.01;
    blueWireframeCube.rotation.y += 0.01;

    //blackWireframeCube.rotation.x += 0.01;
    //blackWireframeCube.rotation.y += 0.01;
    // Render the scene
    renderer.render(scene, camera);
}

// Add wireframe cubes to the scene
scene.add(redWireframeCube);
scene.add(greenWireframeCube);
scene.add(blueWireframeCube);
//scene.add(blackWireframeCube);

// Call the animate function
animate();
