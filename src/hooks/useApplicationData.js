import React, { useState, useEffect } from 'react';
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
      console.log("appointments", appointments)
      return axios.put(`/api/appointments/${id}`, {interview:interview})
      .then(res => {
          setState({...state, appointments})
          return res
        })
     // .catch(err => err)
    }

    function cancelInterview(id) {

      const appointment = {
        ...state.appointments[id],
        interview: null
      };
  
      const appointments = {
        ...state.appointments,
        [id]: appointment
      }
  
      return axios.delete(`/api/appointments/${id}`)
      .then(res => {
        setState({...state, appointments})
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
    




