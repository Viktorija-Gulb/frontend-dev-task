import React from 'react';
import { InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '150px'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
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
    padding: theme.spacing(0.7, 4.5, 0.7, 1),
    border: '1px solid',
    borderRadius: 35,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '150px'
    }
  }
}));

interface Props {
  searchValue: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Search: React.FC<Props> = ({ searchValue, handleSearchChange }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.search} tabIndex={0}>
      <InputBase
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        value={searchValue}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => handleSearchChange(e)}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
