import React, { useState } from 'react';
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {

  const [student, setStudent] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.value|| null);  
  const [error, setError] = useState("");
  
    //Helper function to clear all fields
    const reset = () => {
      setStudent("")
      setInterviewer(null)
    }

    function cancel () {
      reset();
      props.onCancel()
    }

    function validate() {
      if (student === "" ) {
        setError("Student name cannot be blank");
        return;
      }
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
            data-testid="student-name-input"
      
          /*
            This must be a controlled component
            your code goes here
          */
        />
      <section className="appointment__validation">{error}</section>
      </form>
      <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={(event) => setInterviewer(event)} />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={cancel}>Cancel</Button>
        <Button confirm onSubmit={event => event.preventDefault()} onClick={validate}>Save</Button>
      </section>
    </section>
  </main>
  )

}