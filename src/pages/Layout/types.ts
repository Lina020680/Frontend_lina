import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode;
  isUserLoggedIn: boolean;
}
