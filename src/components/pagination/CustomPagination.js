import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './CustomPagination.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const onPageChange = page => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="pagination">
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={event => onPageChange(event.target.textContent)}
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
