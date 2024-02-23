// Create a scene
/*const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a sphere geometry
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

// Create a shader material for the sphere
const sphereMaterial = new THREE.ShaderMaterial({
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 baseColor;
        uniform float sphereShadeTint; // Slider value for sphere shade (-1.0 to 1.0)
        varying vec2 vUv;
        void main() {
            // Calculate the shaded or tinted color for the sphere
            float mixValue = (1.0 + sphereShadeTint) * 0.5; // Adjust the range to 0.0 to 1.0
            vec3 shadedTintedColor = mix(baseColor, vec3(0.0), mixValue); // Mix with black
            gl_FragColor = vec4(shadedTintedColor, 1.0);
        }
    `,
    uniforms: {
        baseColor: { value: new THREE.Color(0x00FF00) }, // Initial color is green
        sphereShadeTint: { value: 0.0 }, // Initial shade/tint value
    },
});

// Create a sphere mesh with the shader material
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// Create a shade/tint slider input element
const shadeTintSlider = document.createElement('input');
shadeTintSlider.type = 'range';
shadeTintSlider.min = '-1.0';
shadeTintSlider.max = '1.0';
shadeTintSlider.step = '0.01';
shadeTintSlider.value = '0.0';
shadeTintSlider.style.position = 'absolute';
shadeTintSlider.style.top = '200px';
shadeTintSlider.style.left = '695px';

// Append the shade/tint slider to the body
document.body.appendChild(shadeTintSlider);

// Add an event listener to the shade/tint slider
shadeTintSlider.addEventListener('input', function (event) {
    const sliderValue = parseFloat(event.target.value);
    sphere.material.uniforms.sphereShadeTint.value = sliderValue;
});

// Create an animate function
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the sphere
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
};

// Call the animate function
animate();
*/

// Create a scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();

renderer.setClearColor(0xffffff);

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
        new THREE.Color(0x000000), // End color (black)
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
