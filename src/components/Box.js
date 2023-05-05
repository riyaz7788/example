import React from 'react'
import '../index.css'
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props) {
  const mesh = useRef();
  // rotate the box
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  });
  // draw the box
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="#FFAE00" />
      
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}