import React from 'react';

export const ThoughtCard = ({ thoughts }) => {

  return (
    <div className='thought-card'>
    ThoughtCard
      <h3 className='thought-title'>{thoughts.title}</h3>
      <h3 className='thought-body'>{thoughts.body}</h3>
    </div>
  )
}
