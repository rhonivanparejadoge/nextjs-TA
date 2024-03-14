import { ItemCardInterface } from "../Card/Card.interface";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface PageTabsInterface {
  children?: React.ReactNode;
  galleryData: ItemCardInterface[];
}