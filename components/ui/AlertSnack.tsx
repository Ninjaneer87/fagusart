import React from 'react';
import { Alert, Snackbar, SnackbarCloseReason } from '@mui/material';
import ClientOnlyPortal from '../portals/ClientOnlyPortal';

type Props = {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: "success" | "error" | "info" | "warning";
}

const AlertSnack = ({ open, onClose, message, severity }: Props) => {
  const handleClose = (_event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') return;

    onClose();
  };

  return (
    <ClientOnlyPortal>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        classes={{ root: 'max-w-[300px]' }}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </ClientOnlyPortal>
  );
};

export default AlertSnack;