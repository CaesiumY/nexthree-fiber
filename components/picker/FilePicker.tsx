import { FilterTabNames } from "@/constants/tabs";
import { canvasState } from "@/store/canvasState";
import { globalState } from "@/store/globalState";
import { readFile } from "@/utils/helperUtils";
import { useId, useState } from "react";
import CustomButton from "../common/CustomButton";

const FilePicker = () => {
  const inputId = useId();
  const [file, setFile] = useState<File | null>(null);

  const readDecalFile = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!file) return;

    const name = e.currentTarget.name as FilterTabNames;

    const result = await readFile(file);

    canvasState[name].decal = result;
    canvasState[name].active = true;

    globalState.activePicker = null;
  };

  return (
    <div className="picker-container">
      <div className="flex-1 flex flex-col gap-2">
        <input
          type="file"
          name="file"
          id={inputId}
          accept="image/*"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <label htmlFor={inputId} className="filepicker-label">
          Upload File
        </label>

        <p className="text-gray-500 text-sm truncate ml-1">
          {file ? file.name : "No File Selected"}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <CustomButton
          className="text-sm"
          backgroundType="outlined"
          name="logoTexture"
          onClick={readDecalFile}
          disabled={!file}
        >
          Logo
        </CustomButton>
        <CustomButton
          className="text-sm"
          name="fullTexture"
          onClick={readDecalFile}
          disabled={!file}
        >
          Full
        </CustomButton>
      </div>
    </div>
  );
};

export default FilePicker;
