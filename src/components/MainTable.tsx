import React from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SortIcon from '@material-ui/icons/Sort';
import ClearIcon from '@material-ui/icons/Clear';
import { User } from '../actions/MembersactionTypes';

const useStyles = makeStyles((theme) => ({
  table: {},
  actionBtns: {
    display: 'flex'
  },
  clearIcon: {
    color: theme.palette.warning.main
  },
  cellWithSort: {
    display: 'flex'
  }
}));

interface Props {
  usersToShow: User[];
  handleEdit: (user: User) => void;
  handleDelete: (id: number) => void;
  sortBy: (key: string) => void;
}

const MainTable: React.FC<Props> = ({ usersToShow, handleEdit, handleDelete, sortBy }: Props) => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table className={classes.table}>
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
              <TableCell />
              <TableCell>
                <div className={classes.actionBtns}>
                  <EditIcon onClick={() => handleEdit(user)} />
                  <ClearIcon onClick={() => handleDelete(user.id)} className={classes.clearIcon} />
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
