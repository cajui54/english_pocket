import { MenuConfig } from "../interface/MenuBuger";
export const menuConfig: MenuConfig = {
  open: {
    openMenu: true,
    classMenu: "openMenu",
    showOrHidden: "showOrHiddenMenu",
  },
  close: { openMenu: false, classMenu: "", showOrHidden: "" },
};

export const optionsMenu = [
  { title: "Irregular Verbs" },
  { title: "About" },
  { title: "Read More" },
  { title: "Informations" },
  { title: "Contact Me" },
];
