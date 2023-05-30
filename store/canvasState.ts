import { proxy } from "valtio";

export const canvasState = proxy({
  logoTexture: {
    active: false,
    decal: "",
  },
  fullTexture: {
    active: false,
    decal: "",
  },
});
