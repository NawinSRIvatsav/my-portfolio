import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.y += 0.003;
    sphereRef.current.rotation.x += 0.001;
  });

  return (
    <>
      {/* Outer Wireframe Sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
        />
      </mesh>

      {/* Inner Glow Sphere */}
      <mesh>
        <sphereGeometry args={[1.7, 64, 64]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.15}
        />
      </mesh>
    </>
  );
}

function Sphere() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={2} />

      <pointLight
        position={[10, 10, 10]}
        intensity={5}
      />

      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={1}
      >
        <AnimatedSphere />
      </Float>
    </Canvas>
  );
}

export default Sphere;