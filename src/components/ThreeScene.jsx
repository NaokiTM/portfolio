import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import jupiterTexture from '../assets/jupiter.JPG';

const ThreeScene = ({ width, height }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load( jupiterTexture );

    const geometry = new THREE.SphereGeometry( 2,60,60 );
    var material = new THREE.MeshBasicMaterial ({ map: texture });
    const planet = new THREE.Mesh(geometry, material);
    scene.add(planet);
    
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      planet.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const { clientWidth, clientHeight } = mountRef.current;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Initial resize
    handleResize();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [width, height]);

  return <div ref={mountRef} style={{ width, height }} />;
};

export default ThreeScene;