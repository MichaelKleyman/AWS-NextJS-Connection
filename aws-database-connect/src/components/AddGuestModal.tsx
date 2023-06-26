import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

interface Props {
  clickedAdd: boolean;
  setClickedAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddGuestModal: React.FC<Props> = ({ clickedAdd, setClickedAdd }) => {
  const handleClickOpen = () => {
    setClickedAdd(true);
  };

  const handleClose = () => {
    setClickedAdd(false);
  };

  return (
    <div>
      <Dialog
        open={clickedAdd}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          Add a Guest To The Table
        </DialogTitle>
        <form className='w-[400px] p-9'>
          <div className='mb-4'>
            <TextField
              id='filled-search'
              label='Name'
              type='text'
              variant='filled'
              fullWidth
            />
          </div>
          <div className='mt-4'>
            <TextField
              id='filled-search'
              label='Description'
              type='text'
              variant='filled'
              fullWidth
            />
          </div>
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddGuestModal;
