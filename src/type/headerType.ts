import { LinkProps } from 'react-router-dom';

export type HeaderScrollState = {
  $scroll: boolean;
};

export type TabPropsType = {
  to: string;
  component: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
};
