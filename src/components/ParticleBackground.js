import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Set up the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 3;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);

        // Store the current mount reference in a variable
        const currentMountRef = mountRef.current;
        currentMountRef.appendChild(renderer.domElement);

        // Handle window resizing
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        // Animation setup and rendering logic
        const cubes = [];
        const cubeCount = 5;
        const geometry = new THREE.BoxGeometry();

        for (let i = 0; i < cubeCount; i++) {
            const material = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.7 });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3);
            cube.rotationSpeed = {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01,
            };
            cubes.push(cube);
            scene.add(cube);
        }

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffa500, 1.5, 50);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const animate = () => {
            cubes.forEach((cube) => {
                cube.rotation.x += cube.rotationSpeed.x;
                cube.rotation.y += cube.rotationSpeed.y;
                cube.rotation.z += cube.rotationSpeed.z;
            });
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // Clean up on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            if (currentMountRef) {
                currentMountRef.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ParticleBackground;
