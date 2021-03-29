import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  makeStyles,
  TextField,
  Theme
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { User } from '../actions/MembersTypes';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  dialogBox: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

interface Props {
  open: boolean;
  onCancel: () => void;
  onClose: (value: string) => void;
  user?: User;
  handleUserSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormDialog: React.FC<Props> = ({ open, onCancel, onClose, user, handleUserSubmit }: Props) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add new user</DialogTitle>

      <form onSubmit={(e) => handleUserSubmit(e)}>
        <DialogContent className={classes.dialogBox}>
          <FormControl variant="outlined">
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              name="name"
              defaultValue={user?.name}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              fullWidth
              name="email"
              defaultValue={user?.email}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              autoFocus
              margin="dense"
              id="phone"
              label="Phone"
              fullWidth
              name="phone"
              defaultValue={user?.phone}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              autoFocus
              margin="dense"
              id="website"
              label="Website"
              fullWidth
              name="website"
              defaultValue={user?.website}
            />
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancel
          </Button>

          <Button color="primary" className={classes.button} startIcon={<SaveIcon />} type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormDialog;
