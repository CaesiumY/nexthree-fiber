import { proxy } from "valtio";

export const canvasState = proxy({
  logoTexture: {
    active: true,
    decal: "/texture/threejs.png",
  },
  fullTexture: {
    active: false,
    decal: "/texture/threejs.png",
  },
});
