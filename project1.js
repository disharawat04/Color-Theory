/*// scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 5, 1000);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a resize event listener
window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Create a torus knot geometry
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);

// Create a material
const material = new THREE.MeshBasicMaterial({ color: 0x00FFFF, wireframe: true });

// Create a torus knot mesh
const torusKnot = new THREE.Mesh(geometry, material);
scene.remove(torusKnot);

// Set the camera position
camera.position.z = 30;

// Move the torus knot downward
torusKnot.position.y = 0;

// Create an array to store the star objects
const stars = [];

// Create a function to animate the stars
function animateStars() {
    stars.forEach(star => {
        // Update star positions (move them upwards)
        star.position.z += 0.5;

        // If a star goes out of view, reset its position to a random one
        if (star.position.z > 0) {
            star.position.set(
                (Math.random() - 0.5) * 200,
                (Math.random() - 0.5) * 200,
                -200
            );
        }

        // Increase star opacity
        star.material.opacity += 0.001;

        // Reset opacity when it reaches a maximum value
        if (star.material.opacity > 0.65) {
            star.material.opacity = 0.1;
        }
    });
}

// Create a function to add stars to the scene
function createStars() {
    const starGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: false, opacity: -1 });

    for (let i = 0; i < 1000; i++) {
        const star = new THREE.Mesh(starGeometry, starMaterial);
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const z = -Math.random() * 200;
        star.position.set(x, y, z);
        stars.push(star);
        scene.add(star);
    }
}

// Call the createStars function to add stars to the scene
createStars();

// Create an animate function
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the torus knot
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;

    // Animate the stars
    animateStars();

    // Render the scene
    renderer.render(scene, camera);
};

// Call the animate function
animate();
*/




// scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 5, 1000);

// renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a resize event listener
window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Create a torus knot geometry
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);

// Create a material
const material = new THREE.MeshBasicMaterial({ color: 0x00FFFF, wireframe: true });

// Create a torus knot mesh
const torusKnot = new THREE.Mesh(geometry, material);
scene.remove(torusKnot);

// Set the camera position
camera.position.z = 30;

// Move the torus knot downward
torusKnot.position.y = 0;

// Create an array to store the star objects
const stars = [];

// Create a variable to track whether the stars are paused or not
let starsPaused = false;

// Function to pause or resume the stars' animation
function toggleStarsAnimation(pause) {
    starsPaused = pause;
}

// Add an event listener to detect when the mouse enters the "COLOR THEORY" text
const hoverText = document.getElementById('hover-text');
hoverText.addEventListener('mouseenter', () => {
    toggleStarsAnimation(true); // Pause the stars' animation
});

// Add an event listener to detect when the mouse leaves the "COLOR THEORY" text
hoverText.addEventListener('mouseleave', () => {
    toggleStarsAnimation(false); // Resume the stars' animation
});

// Function to animate the stars
function animateStars() {
    stars.forEach(star => {
        // Update star positions (move them upwards)
        star.position.z += 0.5;

        // If a star goes out of view, reset its position to a random one
        if (star.position.z > 0) {
            star.position.set(
                (Math.random() - 0.5) * 200,
                (Math.random() - 0.5) * 200,
                -200
            );
        }

        // Increase star opacity
        star.material.opacity += 0.001;

        // Reset opacity when it reaches a maximum value
        if (star.material.opacity > 0.65) {
            star.material.opacity = 0.1;
        }
    });
}

// Create a function to add stars to the scene
function createStars() {
    const starGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: false, opacity: -1 });

    for (let i = 0; i < 1000; i++) {
        const star = new THREE.Mesh(starGeometry, starMaterial);
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const z = -Math.random() * 200;
        star.position.set(x, y, z);
        stars.push(star);
        scene.add(star);
    }
}

// Call the createStars function to add stars to the scene
createStars();

// Create an animate function
const animate = function () {
    requestAnimationFrame(animate);

    // Rotate the torus knot
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;

    // Animate the stars if they are not paused
    if (!starsPaused) {
        animateStars();
    }

    // Render the scene
    renderer.render(scene, camera);
};

// Call the animate function
animate();
