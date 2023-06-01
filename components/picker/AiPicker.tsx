import { ResponseBody } from "@/app/dalle/route";
import { FilterTabNames } from "@/constants/tabs";
import { canvasState } from "@/store/canvasState";
import { globalState } from "@/store/globalState";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import CustomButton from "../common/CustomButton";

const AiPicker = () => {
  const [textValue, setTextValue] = useState("");
  // TODO - use SWR later
  const [isLoading, setIsLoading] = useState(false);

  const setDecals = (type: FilterTabNames, result: string) => {
    canvasState[type].decal = `data:image/png;base64,${result}`;
    canvasState[type].active = true;

    globalState.activePicker = null;
  };

  const onClickGenerate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const apiKey = prompt("Enter YOUR API Key");
    if (!apiKey) return alert("Please enter your API Key!");

    const name = e.currentTarget.name as FilterTabNames;

    try {
      setIsLoading(true);

      const response = await fetch("/dalle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: textValue, apiKey }),
      });

      const { image } = (await response.json()) as ResponseBody;
      if (!image) throw new Error("AI image not found");

      setDecals(name, image);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="picker-container gap-4">
      <textarea
        className="aipicker-textarea"
        name="dallePrompt"
        rows={5}
        placeholder="Ask Dall-e!"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />

      <div className="flex flex-row gap-3 flex-wrap">
        <GenerateButton
          isLoading={isLoading}
          onClick={onClickGenerate}
          disabled={textValue === "" || isLoading}
          name="logoTexture"
          backgroundType="outlined"
        >
          Logo
        </GenerateButton>
        <GenerateButton
          isLoading={isLoading}
          onClick={onClickGenerate}
          disabled={textValue === "" || isLoading}
          name="fullTexture"
        >
          Full
        </GenerateButton>
      </div>
    </div>
  );
};

export default AiPicker;

interface GenerateButtonProps extends React.HTMLProps<HTMLButtonElement> {
  isLoading: boolean;
  backgroundType?: "outlined" | "filled";
}

const GenerateButton = ({
  onClick,
  disabled,
  isLoading,
  name,
  backgroundType = "filled",
  children,
}: GenerateButtonProps) => {
  return (
    <CustomButton
      className="text-sm flex flex-row gap-2 items-center justify-center"
      name={name}
      onClick={onClick}
      disabled={disabled}
      backgroundType={backgroundType}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="animate-spin" size={"0.75rem"} />
      ) : null}
      {children}
    </CustomButton>
  );
};
