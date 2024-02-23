// Create a scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a sphere geometry
const sphereGeometry = new THREE.SphereGeometry(1.5, 20, 10);

// Create a wireframe material
const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ff00, // Green color for the wireframe
    wireframe: true,
});

// Create a wireframe sphere
const wireframeSphere = new THREE.Mesh(sphereGeometry, wireframeMaterial);
scene.add(wireframeSphere);

const colorChangeSlider = document.createElement('input');
colorChangeSlider.type = 'range';
colorChangeSlider.min = '0.0'; // Start with green
colorChangeSlider.max = '1.0'; // End with black
colorChangeSlider.step = '0.01';
colorChangeSlider.value = '0.0';
colorChangeSlider.style.position = 'absolute';
colorChangeSlider.style.top = '180px';
colorChangeSlider.style.left = '695px';

// Append the color change slider to the body
document.body.appendChild(colorChangeSlider);

// Add an event listener to the color change slider
colorChangeSlider.addEventListener('input', function (event) {
    const sliderValue = parseFloat(event.target.value);
    const newColor = new THREE.Color().lerpColors(
        new THREE.Color(0x00ff00), // Start color (green)
        new THREE.Color(0xffffff), // End color (white)
        sliderValue
    );
    wireframeSphere.material.color.copy(newColor);
});


// Create an animate function
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the wireframe sphere
    wireframeSphere.rotation.x += 0.01;
    wireframeSphere.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
};

// Call the animate function
animate();



