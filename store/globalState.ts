import { EditorTabNames } from "@/constants/tabs";
import { proxy } from "valtio";

interface GlobalState {
  themeColor: string;
  activePicker: EditorTabNames | null;
}

export const globalState = proxy<GlobalState>({
  themeColor: "#3498db",
  activePicker: null,
});
