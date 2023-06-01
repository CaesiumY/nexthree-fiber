import { ArrayPropertyValues } from "@/utils/typeUtils";
import { ImageProps } from "next/image";
import AIFile from "../assets/svg/ai-file.svg";
import ColorPalette from "../assets/svg/color-palette.svg";
import FolderBackground from "../assets/svg/folder-background.svg";
import Folder from "../assets/svg/folder.svg";
import TransparentBackground from "../assets/svg/transparent-background.svg";

export interface TabItemType {
  name: string;
  icon: ImageProps["src"];
}

export const EditorTabs = [
  {
    name: "colorPicker",
    icon: ColorPalette,
  },
  {
    name: "filePicker",
    icon: Folder,
  },
  {
    name: "aiPicker",
    icon: AIFile,
  },
] as const;

export type EditorTabNames = ArrayPropertyValues<typeof EditorTabs, "name">;

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: TransparentBackground,
  },
  {
    name: "stylishShirt",
    icon: FolderBackground,
  },
] as const;

export type FilterTabNames = ArrayPropertyValues<typeof FilterTabs, "name">;
