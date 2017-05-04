import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard'

export const ThoughtList = ({ thoughtList }) => {
  console.log(thoughtList);

const thoughtsArr = thoughtList.map( (thoughtObj, i) => {
  return <ThoughtCard key={i} thoughts={thoughtObj} />
})

  return (
    <div className='thought-list'>
    ThoughtList
      {thoughtsArr}
    </div>
  );
}
