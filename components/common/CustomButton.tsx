import { globalState } from "@/store/globalState";
import { getContrastColor } from "@/utils/colorUtils";
import React from "react";
import { useSnapshot } from "valtio";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundType?: "filled" | "outlined";
}

const CustomButton = ({
  backgroundType = "filled",
  className,
  children,
  ...buttonProps
}: CustomButtonProps) => {
  const { themeColor } = useSnapshot(globalState);

  const generateStyle = (type: CustomButtonProps["backgroundType"]) =>
    type === "filled"
      ? {
          backgroundColor: themeColor,
          color: getContrastColor(themeColor),
        }
      : {
          border: `1px solid ${themeColor}`,
          color: themeColor,
        };

  return (
    <button
      className={`flex-1 rounded-md ${className}`}
      style={generateStyle(backgroundType)}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
