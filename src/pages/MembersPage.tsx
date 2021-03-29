import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../reducers/RootReducer';
import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import { getMembers } from '../actions/MembersActions';
import { User } from '../actions/MembersActionTypes';
import Logo from '../components/Logo';
import FormDialog from '../components/FormDialog';
import MainTable from '../components/MainTable';
import Search from '../components/Search';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  actionBtns: {
    display: 'flex'
  },
  btnContainer: {
    display: 'flex',
    margin: theme.spacing(12, 0, 4, 0),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addBtn: {
    background: theme.palette.warning.main,
    borderRadius: 25,
    padding: theme.spacing(0.5, 5),
    textTransform: 'initial',
    height: 30,
    minWidth: 140
  },

  cellWithSort: {
    display: 'flex'
  }
}));

const MembersPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { users, loading } = useSelector((state: ApplicationState) => state.members);
  const [searchValue, setSearchValue] = useState('');
  const [usersToShow, setUsersToShow] = useState<User[]>(users);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    dispatch(getMembers());
  }, []);

  useEffect(() => {
    setUsersToShow(users);
  }, [users]);

  const initialUsersStateForSort = {
    data: usersToShow,
    direction: 'asc'
  };

  const [soredtUsers, setSortedUsers] = useState(initialUsersStateForSort);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUser(undefined);
  };

  const handleEdit = (userData: User) => {
    setOpen(true);
    setUser(userData);
  };

  const handleDelete = (id: number) => {
    setUsersToShow(usersToShow.filter((x) => x.id !== id));
  };

  const handleUserSubmit = (e: any) => {
    e.preventDefault();
    setOpen(false);
    const { name, email, phone, website } = e.target.elements;

    user
      ? setUsersToShow(
          usersToShow.map((x) =>
            x.id === user.id
              ? { ...x, name: name.value, email: email.value, phone: phone.value, website: website.value }
              : x
          )
        )
      : setUsersToShow([
          ...usersToShow,
          {
            id: Math.floor(Math.random() * 10000),
            name: name.value,
            email: email.value,
            phone: phone.value,
            website: website.value
          }
        ]);
  };

  const sortBy = (key: string) => {
    setSortedUsers({
      data: usersToShow?.sort((a, b) =>
        soredtUsers.direction === 'asc' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
      ),
      direction: soredtUsers.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const filteredUsers = usersToShow.filter(
    (x) =>
      x.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      x.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      x.phone.toLowerCase().includes(searchValue.toLowerCase()) ||
      x.website.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main>
      <Logo />
      <div className={classes.btnContainer}>
        <Search searchValue={searchValue || ''} handleSearchChange={handleSearchChange} />

        <Button onClick={handleClickOpen} className={classes.addBtn} aria-label="Add new user">
          Add new
        </Button>

        <FormDialog
          open={open}
          onClose={handleClose}
          onCancel={handleClose}
          user={user}
          handleUserSubmit={handleUserSubmit}
        />
      </div>

      {loading ? (
        <CircularProgress variant="determinate" value={25} />
      ) : (
        <MainTable usersToShow={filteredUsers} handleDelete={handleDelete} handleEdit={handleEdit} sortBy={sortBy} />
      )}
    </main>
  );
};

export default MembersPage;
