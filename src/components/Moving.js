import React, { useEffect } from 'react';
import * as THREE from 'three';


const Moving = () => {
    useEffect(() => {
        // Create a scene
        const scene = new THREE.Scene();
    
        // Create a camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
    
        // Create a renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild(renderer.domElement);
        document.body.prepend(renderer.domElement);
    
        // Create stars
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF });
    
        const starsVertices = [];
        for (let i = 0; i < 10000; i++) {
          const x = (Math.random() - 0.5) * 2000;
          const y = (Math.random() - 0.5) * 2000;
          const z = (Math.random() - 0.5) * 1500;
          starsVertices.push(x, y, z);
        }
    
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);
    
        // Animation
        const animate = () => {
          requestAnimationFrame(animate);
    
          stars.rotation.x += 0.0005;
          stars.rotation.y += 0.0009;
    
          renderer.render(scene, camera);
        };
    
        animate();
      }, []);
  return (
    <div>Moving</div>
  )
}

export default Moving