import React from 'react';
import { LinkButton } from '../Button/Button';

type SidebarProps = {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ menuState, setMenuState }: SidebarProps) => {
  const onClick = () => {
    setMenuState(!menuState);
  };
  return (
    <div
      onClick={onClick}
      className={` fixed w-full h-sideBarFit bg-white/30 z-50 ${
        menuState ? 'invisible' : 'visible'
      } backdrop-blur-sm`}
    >
      <aside
        className={`w-52 bg-grey h-full flex flex-col items-center space-y-6 py-6 transition-all ease-in-out duration-300 ${
          menuState ? '-translate-x-52' : 'translate-x-0'
        } ${menuState ? 'invisible' : 'visible'}`}
      >
        <LinkButton href={'/'}>{'Home'}</LinkButton>
        <LinkButton href={'makeAQuiz'}>{'Make a Quiz'}</LinkButton>
        <LinkButton href={'/quiz'}>{'Solve a Quiz'}</LinkButton>
        <LinkButton href={'/search'}>{'Search'}</LinkButton>
      </aside>
    </div>
  );
};

export default Sidebar;
