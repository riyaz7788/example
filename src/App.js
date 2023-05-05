import './App.css';
import { Suspense, useRef } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Box from './components/Box'
import Example from './components/Example';
// import { Model } from './components/Jungle';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Html } from '@react-three/drei';
import { Section } from './components/section';
import { useGLTF } from '@react-three/drei';
import { ambientLight } from 'three';
import { Model } from './components/ELEMENTS';
import Brands from './components/Brands';

const Light = () =>{
  return (
    <>
    <ambientLight intensity={0.3} />
    <directionalLight position={[10,10,5]} intensity={1} />
    <directionalLight position={[0,10,0]} intensity={1.8} />
    <spotLight position={[0,1000,0]} intensity={1}/>

    </>
  )
}
const Models=(props)=> {
  const { nodes, materials } = useGLTF('/LOGO.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve006.geometry} material={materials['Material.001']} position={[0, 0.88, 0]} rotation={[Math.PI / 2, 0, 0]} scale={61.09} />
    </group>
  )
}

const Device = (props)=> {
  const { nodes, materials } = useGLTF('/ElEMENTS.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.003']} rotation={[0, 1.28, 0]} scale={[0.23, 0.1, 0.23]} />
    </group>
  )
}
const HTMLContent = () => {
  // const ref = useRef();
  // useFrame(()=>(ref.current.rotation.y += 0.01));
  return (
    <>
    <group scale={5} >
      <mesh>
        <Model position={[0,-1,0]}/>
      </mesh>
    </group>
    </>
  )
}
function App() {
  return (
   <div style={{ width: "100vw", height: "100vh",backgroundColor:"black" }}>
   <Canvas 
   //change camera position from frontendview xyz
  //  camera={{position:[-30,10,1], fov:70}}
  camera={{position:[-30,41,1], fov:70}}

   >
  <OrbitControls/>
    <Light/>
    <Suspense>
    <HTMLContent/>
    <Stars/>
    </Suspense>
    
   
   </Canvas>
   <Brands/>
   </div>
  );
}

export default App;

// const Light = () =>{
//   return (
//     <>
//     <ambientLight intensity={0.3} />
//     <directionalLight position={[10,10,5]} intensity={1} />
//     <directionalLight position={[0,10,0]} intensity={1.8} />
//     <spotLight position={[0,1000,0]} intensity={1}/>

//     </>
//   )
// }
// const Device = () => {
//   const gltf=useGLTF('/jungle-transformed.glb')
  
//   return (
//     <>
//     <primitive object={gltf.scene} dispose={null}/>
//     </>
//   )
// }
// const HTMLContent = () => {

  // const ref = useRef();
  // useFrame(()=>(ref.current.rotation.y += 0.01))
  
//   return (
//     <>
//    <Section factor={1.5} offset={1}>
//   <group position={[0,250,0]}>
//     <mesh ref={ref} position={[0,-35,0]}>
//     {/* <Model position={[-60,3,0]}  />    */}
//    <Model position={[-60,0,0]}  />
//     </mesh>
//   <Html fullscreen>
//       <div className=' '>
//         <h1>webApp Ar&Vr</h1>
//       </div>
//     </Html>
//   </group>
//    </Section>
//     </>
//   )
// }
// function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//      <Canvas
    
//      camera={{position:[0,0,100], fov:70}}
     
//      >
      
//       <OrbitControls/>
//       <Light/>
//       <Suspense fallback={null}>
//       <HTMLContent/>
//       </Suspense>
     

//      </Canvas>
//     </div>
//   );
// }

// export default App;
