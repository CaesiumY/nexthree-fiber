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

export const EditorTabs: TabItemType[] = [
  {
    name: "colorpicker",
    icon: ColorPalette,
  },
  {
    name: "filepicker",
    icon: Folder,
  },
  {
    name: "aipicker",
    icon: AIFile,
  },
];

export const FilterTabs: TabItemType[] = [
  {
    name: "logoShirt",
    icon: TransparentBackground,
  },
  {
    name: "stylishShirt",
    icon: FolderBackground,
  },
];
