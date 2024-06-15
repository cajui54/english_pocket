export interface IMenu {
  openMenu: boolean;
  classMenu: "" | "openMenu";
  showOrHidden: "" | "showOrHiddenMenu";
}

export interface MenuConfig {
  open: IMenu;
  close: IMenu;
}
