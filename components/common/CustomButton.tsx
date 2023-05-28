import React from "react";

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
  const backgroundTypeClass =
    backgroundType === "filled"
      ? `text-white bg-black`
      : "bg-white border-black border";

  return (
    <button
      className={`flex-1 rounded-md ${className} ${backgroundTypeClass}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
