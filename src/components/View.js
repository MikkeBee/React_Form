import React from "react";

const View = (props) => {
  return (
    <div>
      <div className="paperArea">
        <div className="vertical">
          <p className="firstP">
            First Name: <span>{props.firstname}</span>
          </p>
          <p>
            Last Name: <span>{props.lastname}</span>
          </p>
          <p>
            Phone Number: <span>{props.phonenumber}</span>
          </p>
          <p>
            Role: <span>{props.role}</span>
          </p>
          <p>
            Message: <span>{props.message}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default View;
