/*// Create a scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a function to generate wireframe spheres
function createWireframeSphere(radius, segments, color, position) {
    const sphereGeometry = new THREE.SphereGeometry(radius, segments, segments);
    const wireframeGeometry = new THREE.WireframeGeometry(sphereGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: color });
    const wireframeSphere = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    wireframeSphere.position.set(...position);
    return wireframeSphere;
}

// Create three wireframe spheres with different parameters
const sphere1 = createWireframeSphere(1.25, 8, 0x800080, [0, 0, 0]);
const sphere2 = createWireframeSphere(1.1, 8, 0x008000, [-4, 0, 0]);
const sphere3 = createWireframeSphere(1.1, 8, 0xFFA500, [4, 0, 0]);

// Add the spheres to the scene
scene.add(sphere1);
scene.add(sphere2);
scene.add(sphere3);

// Animation/rendering loop
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the spheres (for animation)
    sphere1.rotation.x += 0.01;
    sphere1.rotation.y += 0.01;
    sphere2.rotation.x += 0.01;
    sphere2.rotation.y += 0.01;
    sphere3.rotation.x += 0.01;
    sphere3.rotation.y += 0.01;

    renderer.render(scene, camera);
};

// Start the animation loop
animate();
*/

// Create a scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a function to generate wireframe spheres as point clouds
function createWireframeSphere(radius, segments, color, position) {
    const sphereGeometry = new THREE.SphereGeometry(radius, segments, segments);
    const pointsMaterial = new THREE.PointsMaterial({ color: color, size: 0.05 });
    const points = new THREE.Points(sphereGeometry, pointsMaterial);
    points.position.set(...position);
    return points;
}

// Create three wireframe spheres with different parameters as point clouds
const sphere1 = createWireframeSphere(1.25, 8, 0x800080, [0, 0, 0]);
const sphere2 = createWireframeSphere(1.1, 8, 0x008000, [-4, 0, 0]);
const sphere3 = createWireframeSphere(1.1, 8, 0xFFA500, [4, 0, 0]);

// Add the point clouds to the scene
scene.add(sphere1);
scene.add(sphere2);
scene.add(sphere3);

// Animation/rendering loop
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the spheres (for animation)
    sphere1.rotation.x += 0.01;
    sphere1.rotation.y += 0.01;
    sphere2.rotation.x += 0.01;
    sphere2.rotation.y += 0.01;
    sphere3.rotation.x += 0.01;
    sphere3.rotation.y += 0.01;

    renderer.render(scene, camera);
};

// Start the animation loop
animate();
