import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from 'components/InterviewerListItem';
import PropTypes from 'prop-types';


export default function InterviewerList(props) {

  const interviewers = props.interviewers.map(interviewerObj => {

    return (
      <InterviewerListItem 
        key={interviewerObj.id}
        name={interviewerObj.name}
        avatar={interviewerObj.avatar}
        selected={interviewerObj.id === props.value}
        setInterviewer={() => props.onChange(interviewerObj.id)}
      />
    )
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section> 
  )
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};



/* InterviewerList props: 
interviewers:array - an array of objects as seen above
setInterviewer:function - a function that accepts an interviewer id. This function will simply be passed down to the InterviewerListItem
interviewer:number - a number that represents the id of the currently selected interviewer */ 