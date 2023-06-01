import { EditorTabNames } from "@/constants/tabs";
import React, { ReactNode } from "react";
import ColorPicker from "./ColorPicker";

type PickerTableType = {
  [key in EditorTabNames]: ReactNode;
};

const PickerTable: PickerTableType = {
  colorPicker: <ColorPicker />,
  aiPicker: <div>AI Picker</div>,
  filePicker: <div>File Picker</div>,
};

interface PickerContainerProps {
  activePicker: EditorTabNames;
}

const PickerContainer = ({ activePicker }: PickerContainerProps) => {
  return <>{PickerTable[activePicker]}</>;
};

export default PickerContainer;
