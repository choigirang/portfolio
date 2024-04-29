import { LinkProps } from 'react-router-dom';
import React, { Dispatch } from 'react';
export type ListChangeSpanColorProps = {
  activeUrl: boolean;
};

export type HeaderProps = {
  $scroll: boolean;
  $mobileNav: boolean;
};

export type TabPropsType = {
  to: string;
  component: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
};

// ABOUT
export type ProfileObjectInfo = {
  [key: string]: string;
};

//SKILLS

export interface SelectStackType {
  name: string;
  displayName: string;
  description: Array<string>;
  link: string | Array<string>;
  color: string;
}

export type AllStackType = {
  [category: string]: {
    [tech: string]: SelectStackType;
  };
};

export type StackListProps = {
  category: string;
  stack: string;
  stackInfo?: SelectStackType | undefined;
  setStack: Dispatch<React.SetStateAction<string>>;
};

export type IconBoxProps = {
  categoryData: { [tech: string]: SelectStackType } | undefined;
  stack: string;
  setStack: Dispatch<React.SetStateAction<string>>;
};

export type SkillCardProps = {
  [key: string]: string;
};

// PROJECT
export interface StackInfoType {
  name: string;
  displayName: string;
  color: string;
}

export interface ProjectDetailType {
  projectName: string;
  name: string;
  description: Array<string>;
  github: string;
  link: string;
  stack: {
    frontend: Array<StackInfoType>;
    backend: Array<StackInfoType>;
  };
}

export type ProjectInfoType = {
  [title: string]: ProjectDetailType;
};

export type FloorItemsType = {};

// CONTACT
export type ContactType = {
  [key: string]: string;
};

// FOOTER
export type MenuOpenType = {
  $openMenu: boolean;
};
