// Lib
import { ReactNode } from 'react';

export type SidebarProps = {
  children: ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  return <aside className='sidebar-wrapper'>{children}</aside>;
};

export default Sidebar;
