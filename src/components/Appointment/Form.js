import React, { useState } from 'react';
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {

  const [student, setStudent] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.value|| null);  
  
    //Helper function to clear all fields
    const reset = () => {
      setStudent("")
      setInterviewer(null)
    }

    function cancel () {
      reset();
      props.onCancel()
    }

    function save() {
      props.onSave(student, interviewer);
    }
    //console.log(props)

  return (
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          name={props.name}
          type="text"
          onChange={(event) => setStudent(event.target.value)}            
            value={student}
            placeholder="Enter Student Name"
      
          /*
            This must be a controlled component
            your code goes here
          */
        />
      </form>
      <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={(event) => setInterviewer(event)} />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={cancel}>Cancel</Button>
        <Button confirm onSubmit={event => event.preventDefault()} onClick={save}>Save</Button>
      </section>
    </section>
  </main>
  )

}