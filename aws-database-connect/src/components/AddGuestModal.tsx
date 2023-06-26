import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

interface User {
  id: number | null;
  name: string;
  description: string;
}

interface Props {
  clickedAdd: boolean;
  setClickedAdd: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler;
}

const AddGuestModal: React.FC<Props> = ({
  clickedAdd,
  setClickedAdd,
  handleChange,
  handleSubmit,
}) => {
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
              name='name'
              onChange={handleChange}
            />
          </div>
          <div className='mt-4'>
            <TextField
              id='filled-search'
              label='Description'
              type='text'
              variant='filled'
              fullWidth
              name='description'
              onChange={handleChange}
            />
          </div>
        </form>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddGuestModal;
