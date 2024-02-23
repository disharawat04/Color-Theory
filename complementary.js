// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a torus knot geometry
const geometry = new THREE.TorusKnotGeometry(8, 3, 150, 35);

// Create a custom shader material
const material = new THREE.ShaderMaterial({
    vertexShader: `
        varying vec3 vColor;
        void main() {
            // Explicitly set colors for vertices
            if (position.x < 0.0) {
                vColor = vec3(1.0, 0.0, 0.0); // Red for the left side
            } else {
                vColor = vec3(0.0, 1.0, 0.0); // Green for the right side
            }
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `,
    wireframe: true,
});

// Create a torus knot mesh with the shader material
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Create an animate function
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the torus knot
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
};

// Call the animate function
animate();
