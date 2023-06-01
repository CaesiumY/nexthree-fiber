import { EditorTabNames } from "@/constants/tabs";
import { proxy } from "valtio";

interface GlobalState {
  themeColor: string;
  activePicker: EditorTabNames | null;
  activeModel: "shirt" | "yacht";
}

export const globalState = proxy<GlobalState>({
  themeColor: "#3498db",
  activePicker: null,
  activeModel: "shirt",
});
