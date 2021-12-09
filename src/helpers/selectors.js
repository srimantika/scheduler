import React from 'react';



//Go through a state array with a days object and an appointments object
//Match the appointments given in the days object to those in the appointments object
export function getAppointmentsForDay(state, day) {
let appointmentArray = [];
state.days.map(dayObject => {
if (dayObject.name === day) {
  dayObject.appointments.forEach(apptId => appointmentArray.push(apptId))
}
})
//Go through an appointments object and return an array of all the nested objects with that id
const matchIds = (appointments, ids) => {
  const matched = ids.map(id => appointments[id]);
  return matched;
}
return  matchIds(state.appointments,appointmentArray);

}