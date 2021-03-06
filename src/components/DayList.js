import React from 'react';
import DayListItem from 'components/DayListItem';


export default function DayList(props) {
  const schedule = props.days.map(dayObj => {
 
    return (
      <DayListItem
        key={dayObj.id}
        name = {dayObj.name}
        spots = {dayObj.spots}
        selected={dayObj.name === props.value}
        setDay={props.onChange}
        {...dayObj}
      />
    )
  })
  return <ul>{schedule}</ul>
}

/*The DayList Component Props: 
   days:Array a list of day objects (each object includes an id, name, and spots)
   day:String the currently selected day
   setDay:Function accepts the name of the day eg. "Monday", "Tuesday"*/