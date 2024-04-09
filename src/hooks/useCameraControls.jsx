import { useCallback } from "react";
import { Vector3 } from "three";
import { areaData } from "../data/areaData";
import { create } from "zustand";

//// Areas
const areas = areaData;
const areaIndex = 0;
const areaKeys = Object.keys(areas);
const areaCurrent = areas[areaKeys[areaIndex]];

export const useCameraControls = create((set, get) => ({
  /////////////////////////////////////////////////////////////////////////////////////
  // Three Objects
  /////////////////////////////////////////////////////////////////////////////////////
  gl: null,
  scene: null,
  camera: null,
  setThree: ({ gl, scene, camera }) => {
    set((s) => ({ gl, scene, camera }));
  },
  /////////////////////////////////////////////////////////////////////////////////////
  // Navigation Variables
  /////////////////////////////////////////////////////////////////////////////////////
  areas,
  areaKeys,
  areaIndex,
  areaCurrent,
  // Locking orbit controls during animation
  CameraRef: null,
  setCameraRef: (CameraRef) => {
    set((s) => ({ CameraRef }));
  },
  moveCameraTo: (key) => {
    const { CameraRef, areas } = get();
    if (!areas[key]?.view) return;
    const { view } = areas[key];
    CameraRef.current?.setLookAt(...view.camera, ...view.target, true);
  },
  lookAtRef: (ref) => {
    const { CameraRef } = get();

    let targetVec = new Vector3();
    ref.current.getWorldPosition(targetVec);

    var dist = 1;
    let cameraVec = new Vector3();
    ref.current.getWorldDirection(cameraVec);
    cameraVec.multiplyScalar(dist);
    cameraVec.add(targetVec);

    CameraRef.current?.setLookAt(...cameraVec, ...targetVec, true);
    CameraRef.current?.zoom(...cameraVec, ...targetVec, true);

    // CameraRef.current
    //   ?.moveTo(...cameraVec, true)
    //   .then(() => CameraRef.current?.fitToBox(ref.current, true));
  },
  // Buttons for going to area
  BtnGoToArea: (key) => {
    return useCallback(() => {
      const { moveCameraTo } = get();
      moveCameraTo(key);
    }, [key]);
  },
  // Utility
  copyTextToClipboard: (text) => {
    var textArea = document.createElement("textarea");
    textArea.style.opacity = 0;
    textArea.style.pointerEvents = "none";
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Copying text command was " + msg);
      if (successful) console.log(text);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    document.body.removeChild(textArea);
  },
  saveCameraPos: () => {
    const { copyTextToClipboard, CameraRef } = get();
    if (!CameraRef) return;

    const camera = CameraRef.current.camera;
    console.log(camera);

    const C = {
      x: parseFloat(camera.position.x.toFixed(3)),
      y: parseFloat(camera.position.y.toFixed(3)),
      z: parseFloat(camera.position.z.toFixed(3)),
      f: camera.fov
    };

    var dist = 0.2;
    var cwd = new Vector3();
    camera.getWorldDirection(cwd);
    cwd.multiplyScalar(dist);
    cwd.add(camera.position);

    const T = {
      x: parseFloat(cwd.x.toFixed(3)),
      y: parseFloat(cwd.y.toFixed(3)),
      z: parseFloat(cwd.z.toFixed(3))
    };

    const copyText = `
      target:[${T.x},${T.y},${T.z}],
      camera:[${C.x},${C.y},${C.z}],
      fov:${C.f}
    `;
    copyTextToClipboard(copyText);
  },
}));
