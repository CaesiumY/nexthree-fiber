import { ReactNode } from "react";

export interface TabItem {
  name: string;
  icon: ReactNode;
}

export const EditorTabs: TabItem[] = [
  {
    name: "colorpicker",
    icon: "swatch",
  },
  {
    name: "filepicker",
    icon: "fileIcon",
  },
  {
    name: "aipicker",
    icon: "ai",
  },
];

export const FilterTabs: TabItem[] = [
  {
    name: "logoShirt",
    icon: "logoShirt",
  },
  {
    name: "stylishShirt",
    icon: "stylishShirt",
  },
];
