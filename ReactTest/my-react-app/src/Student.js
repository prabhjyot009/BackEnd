import { Fragment,useState } from "react"

const Student=() => {
    const[student_id, setstudent_id] =useState("");
    const[student_name, setstudent_name] =useState("");
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {student_id, student_name};
             await fetch("http://localhost:3000/student", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        }
        catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
        <h1>Add a Student</h1>
        <form onSubmit={onSubmitForm}>
            <label>Student Id:</label>
            <input type="text" value={student_id} onChange={e => setstudent_id(e.target.value)} />
            <label>Student Name:</label>
            <input type="text" value={student_name} onChange={e => setstudent_name(e.target.value)} />
            <input type="submit" value="Submit"> </input>
        </form>
        </Fragment>
    );
}

export default Student;