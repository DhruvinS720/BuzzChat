import React, { useState } from "react";
import "./ChatInput.css";
import { BiDotsHorizontalRounded, BiMicrophone } from "react-icons/bi";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { AiOutlineSend } from "react-icons/ai";

const ChatInput = ({ handleSendMessage }) => {
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    handleSendMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <form className="chatInputForm" onSubmit={(e) => sendMessage(e)}>
      <div className="chatInputIcon">
        <button className="chatInputBtn">
          <BiDotsHorizontalRounded />
        </button>
        <button className="chatInputBtn">
          <HiOutlineFaceSmile />
        </button>

        <input
          type="text"
          name="messageInput"
          id="messageInput"
          placeholder="Type your messages..."
          onChange={(e) => setInputMessage(e.target.value)}
          value={inputMessage}
          required
        />
        <button className="chatInputBtn">
          <BiMicrophone />
        </button>
        <button className="chatInputBtn">
          <AiOutlineSend />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
