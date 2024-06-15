"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IMenu } from "../../app/interface/MenuBuger";
import { menuConfig } from "../config/menuConfig";

interface PropsProvider {
  children: ReactNode;
}

interface IContextMenu {
  menu: IMenu;
  setMenu?: Dispatch<SetStateAction<IMenu>>;
}

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
