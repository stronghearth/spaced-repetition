import React from 'react';
import '../../routes/DashboardRoute/DashboardRoute.css'

export default function TableRow(props) {
  return(
    <>
      <div className="DB_table_cell" >
        {props.currWord}
      </div>

      <div className="DB_table_cell Correct_count">
        <div className='Count'>
          {props.correct}
        </div> 
      </div>

      <div className="DB_table_cell Incorrect_count">
        <div className='Count'>
          {props.incorrect}
        </div> 
      </div>
    </>
  );
}