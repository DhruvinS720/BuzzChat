import React from "react";
import "./Welcome.css";
import { BiMessageDetail } from "react-icons/bi";

const Welcome = ({ currentUser }) => {
  return (
    <div className="mainMessage">
      <div>
        <div className="messageWrapper">
          <span className="messageDetail">
            <BiMessageDetail className="messageIcon" />
          </span>
        </div>
        <h4 className="welcomeTo">Welcome to Buzz Chat App</h4>
        <p className="selectChat">
          Please select a chat for start messaging...
        </p>
      </div>
    </div>
  );
};

export default Welcome;
