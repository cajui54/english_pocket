import { MenuConfig } from "../interface/MenuBuger";
export const menuConfig: MenuConfig = {
  open: {
    openMenu: true,
    classMenu: "openMenu",
    showOrHidden: "showOrHiddenMenu",
  },
  close: { openMenu: false, classMenu: "", showOrHidden: "" },
};
const handleSetActive = (to: any) => to;
export const optionsMenu = [
  {
    title: "Home",
    scrollConfig: {
      to: "anchorHome",
      spy: true,
      smooth: true,
      offset: -50,
      duration: 500,
      onSetActive: handleSetActive,
    },
  },
  {
    title: "Irregular Verbs",
    scrollConfig: {
      to: "anchorTable",
      spy: true,
      smooth: true,
      offset: -90,
      duration: 500,
      onSetActive: handleSetActive,
    },
  },
  {
    title: "Read More",
    scrollConfig: {
      to: "anchorAbout",
      spy: true,
      smooth: true,
      offset: -90,
      duration: 500,
      onSetActive: handleSetActive,
    },
  },
  {
    title: "Contact Me",
    scrollConfig: {
      to: "anchorFooter",
      spy: true,
      smooth: true,
      offset: -90,
      duration: 500,
      onSetActive: handleSetActive,
    },
  },
];
