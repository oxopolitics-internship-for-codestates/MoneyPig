import React from 'react';
import { LinkButton } from '../Button/Button';
import { IncomingMessage } from 'http';

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
        <LinkButton href={`${process.env.NEXT_PUBLIC_CLIENT}`}>
          {'Home'}
        </LinkButton>
        <LinkButton href={`${process.env.NEXT_PUBLIC_CLIENT}/makeAQuiz`}>
          {'Make a Quiz'}
        </LinkButton>
        <LinkButton href={`${process.env.NEXT_PUBLIC_CLIENT}/quiz`}>
          {'Solve a Quiz'}
        </LinkButton>
        <LinkButton href={`${process.env.NEXT_PUBLIC_CLIENT}/search`}>
          {'Search'}
        </LinkButton>
        {/* <Button onClick={onClickSideBar}>{'Home'}</Button>
        <Button>{'Make a Quiz'}</Button>
        <Button>{'Solve a Quiz'}</Button>
        <Button>{'Search'}</Button> */}
      </aside>
    </div>
  );
};

export default Sidebar;
