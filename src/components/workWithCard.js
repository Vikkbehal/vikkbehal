import React from 'react'

const WorkWithCard = (props) => {
    return (
      <div className='workWithCard'>
        <img className="logo" src={props.CompanyLogo} />
        <p className='title'>{props.MyRoll}</p>
        <p className='myRoll'>{props.MyRollExp}</p>
      </div>
    );
  };


export default WorkWithCard;