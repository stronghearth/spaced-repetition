import React from 'react';
import '../../routes/DashboardRoute/DashboardRoute.css'

function TableRow(props) {
  return(
    <>
      <div class="DB_table_cell">
        {props.word}
      </div>

      <div class="DB_table_cell Correct_count">
        <div className='Count'>
          {props.correct}
        </div> 
      </div>

      <div class="DB_table_cell Incorrect_count">
        <div className='Count'>
          {props.incorrect}
        </div> 
      </div>
    </>
  );
}

export default TableRow