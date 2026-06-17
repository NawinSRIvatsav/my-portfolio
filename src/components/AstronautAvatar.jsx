import { Component, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  Center,
  Float,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";

function AstronautModel() {
  const groupRef = useRef();
  const { scene } = useGLTF("/models/astronaut.glb");

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

function AvatarLoader() {
  return (
    <mesh>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#38bdf8" wireframe />
    </mesh>
  );
}

class AvatarErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="astronaut-fallback" role="img" aria-label="3D avatar unavailable">
          <div className="astronaut-fallback-icon">🧑‍🚀</div>
          <p>3D avatar could not load</p>
          <button type="button" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function AstronautAvatar() {
  return (
    <AvatarErrorBoundary>
      <div className="astronaut-avatar-viewport">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.2, 4.2], fov: 40 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 6, 4]} intensity={1.8} />
          <pointLight position={[-4, 2, -3]} intensity={1} color="#38bdf8" />
          <pointLight position={[3, -1, 2]} intensity={0.5} color="#a855f7" />
          <hemisphereLight
            intensity={0.35}
            color="#ffffff"
            groundColor="#1e293b"
          />

          <Suspense fallback={<AvatarLoader />}>
            <PresentationControls
              global={false}
              snap
              rotation={[0, 0.25, 0]}
              polar={[-Math.PI / 5, Math.PI / 5]}
              azimuth={[-Math.PI / 3, Math.PI / 3]}
              config={{ mass: 1.5, tension: 180, friction: 26 }}
            >
              <Float
                speed={1.4}
                rotationIntensity={0.15}
                floatIntensity={0.35}
              >
                <Bounds fit clip observe margin={1.15}>
                  <Center>
                    <AstronautModel />
                  </Center>
                </Bounds>
              </Float>
            </PresentationControls>
          </Suspense>
        </Canvas>
      </div>
    </AvatarErrorBoundary>
  );
}

useGLTF.preload("/models/astronaut.glb");

export default AstronautAvatar;
