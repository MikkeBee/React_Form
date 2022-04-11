import React from "react";
//in order for this to work, name has to be given, not just className
const Forms = (props) => {
  return (
    //Formik for react for more complex forms. React can handle basic forms. Select considered already a bit advanced in React forms.
    <form className="formyform">
      <div className="inputArea">
        <label>First Name</label>
        <input
          type="text"
          className="firstname"
          name="firstname"
          required
          onChange={props.formHandler}
        />
      </div>
      <div className="inputArea">
        <label>Last Name</label>
        <input
          type="text"
          className="lastname"
          name="lastname"
          required
          onChange={props.formHandler}
        />
      </div>
      <div className="inputArea">
        <label>Phone Number</label>
        <input
          type="number"
          className="phonenumber"
          name="phonenumber"
          required
          onChange={props.formHandler}
        />
      </div>
      <div className="inputArea">
        <label>Role</label>
        <select
          defaultValue="default"
          name="role"
          className="role"
          // react cannot handle html required for select
          onChange={props.formHandler}
        >
          <option value="default" hidden>
            Select your role
          </option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="inputArea">
        <label>Message</label>
        <textarea
          name="message"
          className="messanger"
          form="formyform"
          required
          onChange={props.formHandler}
        ></textarea>
      </div>
      <div className="buttonBox">
        <button className="sendButton" onClick={props.modalHandler}>
          Send <i class="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};

export default Forms;
