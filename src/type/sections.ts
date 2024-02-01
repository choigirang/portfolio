import { LinkProps } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';

// HEADER
export type ListType = {
  [category: string]: {
    [key: string]: string | SvgIconComponent;
  };
};

export type ListChangeSpanColorProps = {
  activeUrl: boolean;
};

export type HeaderScrollState = {
  $scroll: boolean;
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
  description: string;
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
  stackInfo: SelectStackType | undefined;
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
  description: string;
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

// CONTACT
export type ContactType = {
  Name: string;
  Mail: string;
  Content: string;
};

// FOOTER
export type MenuOpenType = {
  $openMenu: boolean;
};
