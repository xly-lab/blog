import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Button, CircularProgress } from '@mui/material';
import React from 'react';

export default function Loading({ status, cb }: { status: string; cb?: () => void }) {
  return (
    <div>
      {status === 'start' ? (
        <CircularProgress />
      ) : status === 'fail' ? (
        <Button variant="text" startIcon={<AutorenewIcon />} onClick={cb}>
          加载失败，重新加载
        </Button>
      ) : null}
    </div>
  );
}
