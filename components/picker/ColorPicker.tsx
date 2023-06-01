import { globalState } from "@/store/globalState";
import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";

const ColorPicker = () => {
  const { themeColor } = useSnapshot(globalState);

  const onChangeColor = (color: string) => (globalState.themeColor = color);

  return (
    <div className="absolute top-0 left-full ml-4">
      <HexColorPicker color={themeColor} onChange={onChangeColor} />
    </div>
  );
};

export default ColorPicker;
