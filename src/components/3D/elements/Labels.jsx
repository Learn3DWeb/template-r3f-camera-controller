import { Text3D, useCursor } from "@react-three/drei";
import { useCameraControls } from "../../../hooks/useCameraControls";
import { useSpring, animated } from "@react-spring/three";
import { useState } from "react";
import { LabelFont } from "../../../assets";

/**
 * Renders a 3D text component with interactive behavior.
 *
 * @param {string} text - The text to be displayed in 3D.
 * @param {object} props - Additional props to be spread on the <group> element.
 * @return {JSX.Element} A 3D text component with interactive features.
 */

// This code defines a functional component My3DText that renders interactive 3D text
// It uses state variables for hover effects and interacts with camera controls
// The Text3D component is used to display the text in 3D space with different styles based on the hover state
// The Labels component renders multiple instances of My3DText with different positions, rotations, and text content

const My3DText = ({ text, ...props }) => {
  // Constants for font size, bevel size, and font height
  const fSize = 0.2;
  const bSize = 0.0025;
  const fHeight = 0.0005;

  // Get function to control camera
  const BtnGoToArea = useCameraControls((s) => s.BtnGoToArea);

  // State variables for hover effect
  const [hovered, set] = useState();
  useCursor(hovered);

  // Animation values for color and scale
  const { color, scale } = useSpring({
    color: hovered ? "#FF0000" : "#969696",
    scale: hovered ? 0.45 : 0.4,
  });

  // Functions for handling hover events
  const onOut = () => set(false);
  const onOver = (e) => {
    e.stopPropagation();
    set(true);
  };

  return (
    // Group element for 3D text with event handlers
    <group
      {...props}
      onPointerOver={onOver}
      onPointerOut={onOut}
      onClick={BtnGoToArea(text)}
    >
      <animated.group scale={scale}>
        {/* First Text3D element */}
        <Text3D
          font={LabelFont}
          position={[0, 0, 0.02]}
          size={fSize}
          height={fHeight}
          bevelEnabled
          bevelSize={bSize}
          castShadow
          receiveShadow
        >
          {text}
          <animated.meshStandardMaterial color={color} />
        </Text3D>
        {/* Second Text3D element */}
        <Text3D
          font={LabelFont}
          size={fSize}
          height={fHeight}
          bevelEnabled
          bevelSize={bSize + 0.025}
          castShadow
          receiveShadow
        >
          {text}
          <meshStandardMaterial color={"#333333"} />
        </Text3D>
      </animated.group>
    </group>
  );
};

// Component to render multiple instances of My3DText
const Labels = () => {
  return (
    <>
      <My3DText position={[1.8, -0.2, 2.5]} text="Scene" />
      <My3DText
        position={[1.4, 0.075, 1.25]}
        rotation={[0, Math.PI * 0.25, 0]}
        text="Flag"
      />
      <My3DText
        position={[1.9, 0.075, 0]}
        rotation={[0, Math.PI * 0.15, 0]}
        text="Awesome"
      />
      <My3DText
        position={[-2, 0.075, -0.5]}
        rotation={[0, Math.PI * 0.15, 0]}
        text="Lander"
      />
      <My3DText
        position={[-0.15, 0.075, -0.25]}
        rotation={[0, Math.PI * 0.15, 0]}
        text="Astronaut"
      />
    </>
  );
};

export default Labels;