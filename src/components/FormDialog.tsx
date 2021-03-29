import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, makeStyles, TextField, Theme } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { User } from '../actions/MembersactionTypes';

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
  onClose: (value: string) => void;
  onCancel: () => void;
  record?: User;
  user?: User;

  handleSubmit: (e: any, user?: User) => void;
  handleUserSubmit: (e: any) => void;
}

const FormDialog: React.FC<Props> = ({ open, onCancel, onClose, user, handleSubmit, handleUserSubmit }: Props) => {
  const classes = useStyles();

  // const [nameValue, setNameValue] = useState('');
  // const [emailValue, setEmailValue] = useState('');
  // const [phoneValue, setPhoneValue] = useState('');
  // const [websiteValue, setWebsiteValue] = useState('');

  // const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   addNewUser({
  //     id: Math.floor(Math.random() * 10000),
  //     name: nameValue,
  //     email: emailValue,
  //     phone: phoneValue,
  //     website: websiteValue
  //   });

  //   setNameValue('');
  //   setEmailValue('');
  //   setPhoneValue('');
  //   setWebsiteValue('');
  // };

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
              // value={nameValue || ''}
              // onChange={(e) => setNameValue(e.target.value)}
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
              // value={emailValue || ''}
              // onChange={(e) => setEmailValue(e.target.value)}
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
              // value={phoneValue || ''}
              // onChange={(e) => setPhoneValue(e.target.value)}
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
              // value={websiteValue || ''}
              // onChange={(e) => setWebsiteValue(e.target.value)}
            />
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancel
          </Button>

          <Button
            color="primary"
            // onClick={() => handleSubmit(user)}
            className={classes.button}
            startIcon={<SaveIcon />}
            type="submit"
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormDialog;
