import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function StarsBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none", // important
      }}
    >
      <Canvas>
        <Stars
          radius={300}
          depth={60}
          count={10000}
          factor={7}
          fade
          speed={2}
        />
      </Canvas>
    </div>
  );
}

export default StarsBackground;