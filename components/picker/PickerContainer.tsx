import { EditorTabNames } from "@/constants/tabs";
import React, { ReactNode } from "react";
import ColorPicker from "./ColorPicker";
import FilePicker from "./FilePicker";

type PickerTableType = {
  [key in EditorTabNames]: ReactNode;
};

const PickerTable: PickerTableType = {
  colorPicker: <ColorPicker />,
  filePicker: <FilePicker />,
  aiPicker: <div>AI Picker</div>,
};

interface PickerContainerProps {
  activePicker: EditorTabNames;
}

const PickerContainer = ({ activePicker }: PickerContainerProps) => {
  return <>{PickerTable[activePicker]}</>;
};

export default PickerContainer;
