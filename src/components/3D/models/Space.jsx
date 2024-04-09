import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCameraControls } from "../../../hooks/useCameraControls";
import { SpaceGLB } from "../../../assets";

export function Space(props) {
  const group = useRef();
  const RoverRef = useRef();
  const LanderRef = useRef();
  const lookAtRef = useCameraControls((s) => s.lookAtRef);
  const { nodes, materials } = useGLTF(SpaceGLB);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["crater-big"].geometry}
        material={nodes["crater-big"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["crater-big_(1)"].geometry}
        material={nodes["crater-big_(1)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["crater-big_(2)"].geometry}
        material={nodes["crater-big_(2)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["crater-big_(3)"].geometry}
        material={nodes["crater-big_(3)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["crater-big_(4)"].geometry}
        material={nodes["crater-big_(4)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["crater-deep_(1)"].geometry}
        material={nodes["crater-deep_(1)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["crater-deep_(2)"].geometry}
        material={nodes["crater-deep_(2)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["crater-deep_(3)"].geometry}
        material={nodes["crater-deep_(3)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["flag-big_1"].geometry}
        material={nodes["flag-big_1"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["flag-big_2"].geometry}
        material={materials["26 RED-DARK"]}
      />
      <group ref={RoverRef} onClick={() => lookAtRef(RoverRef)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["lunar-rover_1"].geometry}
          material={nodes["lunar-rover_1"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["lunar-rover_2"].geometry}
          material={nodes["lunar-rover_2"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["lunar-rover_3"].geometry}
          material={nodes["lunar-rover_3"].material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["man-astronaut_(1)001"].geometry}
        material={nodes["man-astronaut_(1)001"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["man-astronaut_(1)001_1"].geometry}
        material={nodes["man-astronaut_(1)001_1"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["man-astronaut_(1)001_2"].geometry}
        material={nodes["man-astronaut_(1)001_2"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["man-astronaut_(1)_1"].geometry}
        material={nodes["man-astronaut_(1)_1"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["man-astronaut_(1)_2"].geometry}
        material={nodes["man-astronaut_(1)_2"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["man-astronaut_(1)_3"].geometry}
        material={nodes["man-astronaut_(1)_3"].material}
      />
      <group ref={LanderRef} onClick={() => lookAtRef(LanderRef)}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["rocket-module_1"].geometry}
          material={nodes["rocket-module_1"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["rocket-module_2"].geometry}
          material={nodes["rocket-module_2"].material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["rocket-module_3"].geometry}
          material={nodes["rocket-module_3"].material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["rocks-small"].geometry}
        material={nodes["rocks-small"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["rocks-small_(1)"].geometry}
        material={nodes["rocks-small_(1)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["rocks-small_(2)"].geometry}
        material={nodes["rocks-small_(2)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["rocks-small_(3)"].geometry}
        material={nodes["rocks-small_(3)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["stone-diamond"].geometry}
        material={nodes["stone-diamond"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["stone-diamond_(1)"].geometry}
        material={nodes["stone-diamond_(1)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["stone-diamond_(2)"].geometry}
        material={nodes["stone-diamond_(2)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["stone-round"].geometry}
        material={nodes["stone-round"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["stone-round_(2)"].geometry}
        material={nodes["stone-round_(2)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["stone-round_(3)"].geometry}
        material={nodes["stone-round_(3)"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["world-field_(3)_1"].geometry}
        material={nodes["world-field_(3)_1"].material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["world-field_(3)_2"].geometry}
        material={nodes["world-field_(3)_2"].material}
      />
    </group>
  );
}

useGLTF.preload(SpaceGLB);