import { Button, Theme, withStyles } from '@mui/material';

export const BtnStyles = (theme: Theme) => ({
  root: {
    backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    },
  },
});
