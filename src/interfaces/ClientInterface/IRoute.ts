import { JSX } from "react";

interface ChildrenObject {
  path: string;
  component: JSX.Element;
}

export interface RouteObject {
  path: string;
  component: JSX.Element;
  children: ChildrenObject[];
}


export interface SidebarNavigationItem {
  label: string;
  key: string;
  url: string;
  icon?: React.ReactNode;
}