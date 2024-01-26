import { LinkProps } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

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
