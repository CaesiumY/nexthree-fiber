import { ArrayPropertyValues } from "@/utils/typeUtils";
import { ImageProps } from "next/image";
import AIFile from "../assets/svg/ai-file.svg";
import Camera from "../assets/svg/camera.svg";
import ColorPalette from "../assets/svg/color-palette.svg";
import FolderBackground from "../assets/svg/folder-background.svg";
import Folder from "../assets/svg/folder.svg";
import Shirt from "../assets/svg/shirt.svg";
import TransparentBackground from "../assets/svg/transparent-background.svg";
import Yarcht from "../assets/svg/yacht.svg";

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
    name: "logoTexture",
    icon: TransparentBackground,
  },
  {
    name: "fullTexture",
    icon: FolderBackground,
  },
] as const;

export type FilterTabNames = ArrayPropertyValues<typeof FilterTabs, "name">;

export const ActionTabs = [
  {
    name: "download",
    icon: Camera,
  },
] as const;

export type ActionTabNames = ArrayPropertyValues<typeof ActionTabs, "name">;

export const ModelTabs = [
  {
    name: "shirt",
    icon: Shirt,
  },
  {
    name: "yacht",
    icon: Yarcht,
  },
] as const;

export type ModelTabNames = ArrayPropertyValues<typeof ModelTabs, "name">;
