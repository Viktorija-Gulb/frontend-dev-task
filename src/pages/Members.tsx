import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../reducers/RootReducer';
import {
  Button,
  fade,
  InputBase,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import SortIcon from '@material-ui/icons/Sort';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { getMembers } from '../actions/MembersActions';
import { User } from '../actions/MembersactionTypes';
import Logo from '../components/Logo';
import FormDialog from '../components/FormDialog';
import MainTable from '../components/MainTable';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  actionBtns: {
    display: 'flex'
  },
  btnContainer: {
    display: 'flex',
    margin: theme.spacing(4, 0),
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    top: 0
  },
  inputRoot: {
    color: 'inherit',
    width: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(0.7, 4.5, 0.7, 0.7),
    border: '1px solid',
    borderRadius: 35,
    transition: theme.transitions.create('width'),
    width: '200px',
    [theme.breakpoints.up('md')]: {
      width: '200px'
    }
  },
  addBtn: {
    background: theme.palette.warning.main,
    borderRadius: 25,
    padding: '0px 30px',
    textTransform: 'initial',
    height: 25,
    minWidth: 120
  },

  cellWithSort: {
    display: 'flex'
  }
}));

const Members: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { users } = useSelector((state: ApplicationState) => state.members);
  const [searchValue, setSearchValue] = useState('');
  const [usersToShow, setUsersToShow] = useState<User[]>(users);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    dispatch(getMembers());
  }, []);

  useEffect(() => {
    setUsersToShow(users);
  }, [users]);

  console.log('users ', users);

  console.log('usersToShow ', usersToShow);

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

  const createNewUser = (data?: User) => {
    console.log(data);
    setOpen(false);
    setUser(undefined);
    console.log('create');
  };

  const handleUserSubmit = (e: any) => {
    e.preventDefault();
    setOpen(false);
    const { name, email, phone, website } = e.target.elements;

    const newUser: User = {
      id: Math.floor(Math.random() * 10000),
      name: name.value,
      email: email.value,
      phone: phone.value,
      website: website.value
    };

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

  const handleSearchChange = (e: any) => {
    const { value } = e.target;
    setSearchValue(value);
    console.log('change ', searchValue);
    console.log(
      !searchValue ? [...usersToShow] : usersToShow.filter((x) => x.name.toLowerCase().includes(searchValue))
    );
    setUsersToShow(
      !searchValue ? [...usersToShow] : usersToShow.filter((x) => x.name.toLowerCase().includes(searchValue))
    );
  };

  return (
    <main>
      <Logo />

      <div className={classes.btnContainer}>
        <div className={classes.search}>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            value={searchValue || ''}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => handleSearchChange(e)}
          />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
        <Button onClick={handleClickOpen} className={classes.addBtn}>
          Add new
        </Button>

        <FormDialog
          open={open}
          onClose={handleClose}
          onCancel={handleClose}
          handleSubmit={createNewUser}
          user={user}
          handleUserSubmit={handleUserSubmit}
        />
      </div>

      <MainTable usersToShow={usersToShow} handleDelete={handleDelete} handleEdit={handleEdit} />
      {/* <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div className={classes.cellWithSort}>
                  Name
                  <SortIcon onClick={() => sortBy('name')} />
                </div>
              </TableCell>
              <TableCell>Email</TableCell>
              <TableCell>
                <div className={classes.cellWithSort}>
                  Phone
                  <SortIcon onClick={() => sortBy('phone')} />
                </div>
              </TableCell>
              <TableCell>Website</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {usersToShow.map((user: User) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
                <TableCell>
                  <div className={classes.actionBtns}>
                    <EditIcon onClick={(e) => handleEdit(user)} />
                    <HighlightOffIcon onClick={() => handleDelete(user.id)} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </main>
  );
};

export default Members;
