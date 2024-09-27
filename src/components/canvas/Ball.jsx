import  { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0.10, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.85}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {

  const canvasRef = useRef();

  useEffect(() => {
    return () => {
      // Clean up WebGL context when unmounted
      if (canvasRef.current) {
        const gl = canvasRef.current.gl;
        if (gl) {
          gl.forceContextLoss();
          gl.dispose();
        }
      }
    };
  }, []);


  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      // performance={{ min: 0.5 }}
      invalidateFrameloop
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>

  );
};


export default BallCanvas;
