import React from 'react';
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
import { User } from '../actions/MembersactionTypes';

const useStyles = makeStyles((theme) => ({
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

interface Props {
  usersToShow: User[];
  handleEdit: (user: User) => void;
  handleDelete: (id: number) => void;
}

const MainTable: React.FC<Props> = ({ usersToShow, handleEdit, handleDelete }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <div className={classes.cellWithSort}>
                Name
                {/* <SortIcon onClick={() => sortBy('name')} /> */}
              </div>
            </TableCell>
            <TableCell>Email</TableCell>
            <TableCell>
              <div className={classes.cellWithSort}>
                Phone
                {/* <SortIcon onClick={() => sortBy('phone')} /> */}
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
                  <EditIcon onClick={() => handleEdit(user)} />
                  <HighlightOffIcon onClick={() => handleDelete(user.id)} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
