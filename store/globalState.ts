import { proxy } from "valtio";

const globalState = proxy({
  themeColor: "#EFBD48",
});

export { globalState };
