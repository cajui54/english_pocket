"use client";
import { createContext, useContext, useState } from "react";
import { IContextMenu, IMenu } from "../../app/interface/MenuBuger";
import { menuConfig } from "../config/menuConfig";
import { PropsProvider } from "../interface/ReactProps";

export const MenuContext = createContext<IContextMenu>({
  menu: menuConfig.close,
});

export const MenuContextProvider = ({ children }: PropsProvider) => {
  const [menu, setMenu] = useState<IMenu>(menuConfig.close);
  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
