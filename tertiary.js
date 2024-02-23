/*// Create a scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube geometries
const cubeGeometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
];

// Create cube wireframe materials with the specified colors
const cubeWireframeMaterials = [
    new THREE.LineBasicMaterial({ color: 0xFF00FF }),   // Magenta
    new THREE.LineBasicMaterial({ color: 0xE34234 }),   // Vermilion
    new THREE.LineBasicMaterial({ color: 0xFFBF00 }),   // Amber
    new THREE.LineBasicMaterial({ color: 0x7FFF00 }),   // Chartreuse
    new THREE.LineBasicMaterial({ color: 0x008080 }),   // Teal
    new THREE.LineBasicMaterial({ color: 0x8A2BE2 }),   // Violet
];

// Create cube wireframes with different colors
const wireframeCubes = [];
for (let i = 0; i < 6; i++) {
    const cubeGeometry = cubeGeometries[i];
    const cubeMaterial = cubeWireframeMaterials[i];

    // Create wireframe geometry
    const wireframeGeometry = new THREE.WireframeGeometry(cubeGeometry);

    // Create wireframe cube using LineSegments
    const wireframeCube = new THREE.LineSegments(wireframeGeometry, cubeMaterial);
    wireframeCube.position.x = (i - 2.5) * 2; // Spread cubes horizontally
    wireframeCubes.push(wireframeCube);

    scene.add(wireframeCube);
}

// Animation/rendering loop
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate wireframe cubes
    wireframeCubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
};

// Start the animation loop
animate();*/

/*// Create a scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube geometries
const cubeGeometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
];

// Create cube point materials with the specified colors
const cubePointMaterials = [
    new THREE.PointsMaterial({ color: 0xFF00FF, size: 0.05 }),  // Magenta
    new THREE.PointsMaterial({ color: 0xE34234, size: 0.05 }),   // Vermilion
    new THREE.PointsMaterial({ color: 0xFFBF00, size: 0.05 }),   // Amber
    new THREE.PointsMaterial({ color: 0x7FFF00, size: 0.05 }),   // Chartreuse
    new THREE.PointsMaterial({ color: 0x008080, size: 0.05 }),   // Teal
    new THREE.PointsMaterial({ color: 0x8A2BE2, size: 0.05 }),   // Violet
];

// Create cube point clouds with different colors
const pointCloudCubes = [];
for (let i = 0; i < 6; i++) {
    const cubeGeometry = cubeGeometries[i];
    const cubeMaterial = cubePointMaterials[i];

    // Create point cloud
    const pointCloud = new THREE.Points(cubeGeometry, cubeMaterial);
    pointCloud.position.x = (i - 2.5) * 2; // Spread cubes horizontally
    pointCloudCubes.push(pointCloud);

    scene.add(pointCloud);
}

// Animation/rendering loop
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate point cloud cubes
    pointCloudCubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
};

// Start the animation loop
animate();*/


// Create a scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube geometries
const cubeGeometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.BoxGeometry(1, 1, 1),
];

// Create cube materials with the specified colors
const cubeMaterials = [
    new THREE.LineBasicMaterial({ color: 0xFF00FF }),  // Magenta
    new THREE.PointsMaterial({ color: 0xE34234, size: 0.05 }),   // Vermilion
    new THREE.LineBasicMaterial({ color: 0xFFBF00 }),  // Amber
    new THREE.PointsMaterial({ color: 0x7FFF00, size: 0.05 }),   // Chartreuse
    new THREE.LineBasicMaterial({ color: 0x008080 }),  // Teal
    new THREE.PointsMaterial({ color: 0x8A2BE2, size: 0.05 }),   // Violet
];

// Create cubes with alternating materials
const cubes = [];
for (let i = 0; i < 6; i++) {
    const cubeGeometry = cubeGeometries[i];
    const cubeMaterial = cubeMaterials[i];

    // Create cube using LineSegments or Points based on the index (even or odd)
    let cube;
    if (i % 2 === 0) {
        // Even indices use LineSegments
        const wireframeGeometry = new THREE.WireframeGeometry(cubeGeometry);
        cube = new THREE.LineSegments(wireframeGeometry, cubeMaterial);
    } else {
        // Odd indices use Points
        cube = new THREE.Points(cubeGeometry, cubeMaterial);
    }

    cube.position.x = (i - 2.5) * 2; // Spread cubes horizontally
    cubes.push(cube);

    scene.add(cube);
}

// Animation/rendering loop
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate cubes
    cubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
};

// Start the animation loop
animate();

