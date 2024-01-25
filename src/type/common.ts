export type ColorModeContextType = {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
};

export type TurtleAnimationProps = {
  $resetPath?: string;
  $turtleX?: number;
};
