import React, { useState, useCallback, Suspense, Component } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";

function Singlecomponent(props) {
  const { id } = useParams();
  const path = "http://localhost:3000/uploads/glb/";
  const component = useGLTF(`${path + id}`);
  // console.log(id, path);

  return (
    <>
      <mesh>
        <OrbitControls enablePan enableZoom enableRotate />
        <hemisphereLight intensity={0.15} />
        <primitive object={component.scene} {...props} />
      </mesh>
    </>
  );
}
const ComponentCanvas = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{ position: "absolute" }}
    >
      {/* <Suspense fallback={<h1>loading</h1>}> */}
      <color attach="background" args={["#DDDDDD"]} />

      <Stage environment="sunset">
        <Singlecomponent scale={0.029999} />
      </Stage>
      {/* </Suspense> */}
    </Canvas>
  );
};
export default ComponentCanvas;
