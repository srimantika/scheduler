import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })


   const setDay = day => setState(prev =>({...prev, day}));

  
  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/days')),
      Promise.resolve(axios.get('/api/appointments')),
      Promise.resolve(axios.get('/api/interviewers'))])
      .then((all) => {
        setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
      })
    }, [])

  // Find Day for Updating remaining spots
    function findDay(day) {
      const daysOfWeek = {
        Monday: 0,
        Tuesday: 1,
        Wednesday: 2,
        Thursday: 3,
        Friday: 4
      }
      return daysOfWeek[day]
    }
   // Function for handling book interview
    function bookInterview(id, interview) {
      console.log("State", state)
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
  
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      const dayOfWeek = findDay(state.day)

    let day = {
      ...state.days[dayOfWeek],
      spots: state.days[dayOfWeek]
    }

    if (!state.appointments[id].interview) {
      day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spots - 1
      } 
    } else {
      day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spots
      } 
    }

    let days = state.days
    days[dayOfWeek] = day;
     
      return axios.put(`/api/appointments/${id}`, {interview:interview})
      .then(res => {
          setState({...state, appointments,days})
          return res
        })
     // .catch(err => err)
    }
    // Function for handling Cancel or Delete interview
    function cancelInterview(id) {

      const appointment = {
        ...state.appointments[id],
        interview: null
      };
  
      const appointments = {
        ...state.appointments,
        [id]: appointment
      }

      const dayOfWeek = findDay(state.day)

      const day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spots + 1
      }
  
      let days = state.days
      days[dayOfWeek] = day;

      return axios.delete(`/api/appointments/${id}`)
      .then(res => {
        setState({...state, appointments, days})
        return res
      })
      //.catch(err => err)
    }  
    return {
      state,
      setDay,
      bookInterview,
      cancelInterview
     } 
  } 
    





