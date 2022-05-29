import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import * as React from 'react';
import { useCallback } from 'react';
import useScroll from '../../hooksComponents/Scroll';
import { scroll } from '../../utils';

export default function BasicSpeedDial() {
  const winSize = useScroll();
  const gotTop = useCallback(() => {
    scroll(winSize.height, 0);
  }, [winSize.height]);
  return (
    <Box
      className="fixed bottom-8 right-8 transition-all"
      style={{ right: winSize.height > 100 ? '2rem' : '-100px' }}
      sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        onClick={gotTop}
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<ArrowUpwardIcon />}
      />
    </Box>
  );
}
