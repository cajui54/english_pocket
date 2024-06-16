import { Dispatch, SetStateAction } from "react";

export interface IMenu {
  openMenu: boolean;
  classMenu: "" | "openMenu";
  showOrHidden: "" | "showOrHiddenMenu";
}

export interface MenuConfig {
  open: IMenu;
  close: IMenu;
}
export interface IContextMenu {
  menu: IMenu;
  setMenu?: Dispatch<SetStateAction<IMenu>>;
}
