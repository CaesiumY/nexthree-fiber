import { EditorTabNames } from "@/constants/tabs";
import { ReactNode } from "react";
import AiPicker from "./AiPicker";
import ColorPicker from "./ColorPicker";
import FilePicker from "./FilePicker";

type PickerTableType = {
  [key in EditorTabNames]: ReactNode;
};

const PickerTable: PickerTableType = {
  colorPicker: <ColorPicker />,
  filePicker: <FilePicker />,
  aiPicker: <AiPicker />,
};

interface PickerContainerProps {
  activePicker: EditorTabNames;
}

const PickerContainer = ({ activePicker }: PickerContainerProps) => {
  return <>{PickerTable[activePicker]}</>;
};

export default PickerContainer;
