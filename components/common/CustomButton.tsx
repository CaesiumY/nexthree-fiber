import { globalState } from "@/store/globalState";
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
  const state = useSnapshot(globalState);

  const generateStyle = (type: CustomButtonProps["backgroundType"]) =>
    type === "filled"
      ? {
          backgroundColor: state.themeColor,
          color: "#fff",
        }
      : {
          border: `1px solid ${state.themeColor}`,
          color: state.themeColor,
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
