import React from "react";

const Forms = (props) => {
  return (
    <form className="formyform">
      <div className="inputArea">
        <label for="firstname">First Name</label>
        <input type="text" className="firstname" />
      </div>
      <div className="inputArea">
        <label for="lastname">Last Name</label>
        <input type="text" className="lastname" />
      </div>
      <div className="inputArea">
        <label for="phonenumber">Phone Number</label>
        <input type="number" className="phonenumber" />
      </div>
      <div className="inputArea">
        <label for="role">Role</label>
        <select name="role" className="role">
          <option value="" disabled selected>
            Select your role
          </option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="inputArea">
        <label for="message">Message</label>
        <textarea
          name="message"
          className="messanger"
          form="formyform"
        ></textarea>
      </div>
      <div className="buttonBox">
        <input type="submit" value="Send" className="sendButton" />
      </div>
    </form>
  );
};

export default Forms;
