import { LinkProps } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';
import React, { ReactNode } from 'react';

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
export type AllStackType = {
  [category: string]: {
    [tech: string]: string;
  };
};

export type SkillCardProps = {
  [key: string]: string;
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
