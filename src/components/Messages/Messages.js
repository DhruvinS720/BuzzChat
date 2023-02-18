import React, { useEffect, useRef, useState } from "react";
import "./Messages.css";
import { FiSearch } from "react-icons/fi";
import { BiPhoneCall, BiVideo, BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import ChatInput from "../ChatInput/ChatInput";
import axios from "../../components/AxiosInstance/AxiosInstance";
import { format } from "timeago.js";

const Messages = ({ currentUser, currentChat, socket }) => {
  const [allMessages, setAllMessages] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    if (currentChat) {
      axios
        .post(`/messages/getAllMessage`, {
          from: currentUser._id,
          to: currentChat._id,
        })
        .then((response) => {
          console.log(response.data.data);
          setAllMessages(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentChat]);

  useEffect(() => {
    if (scrollRef.current) {
      // scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      scrollRef.current.scrollIntoView({ bahaviour: "smooth" });
    }
  }, [allMessages]);

  const handleSendMessage = async (message) => {
    axios
      .post(`/messages/addMessage`, {
        message: message,
        from: currentUser._id,
        to: currentChat._id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    socket.current.emit("send-message", {
      to: currentChat._id,
      from: currentUser._id,
      message: message,
    });

    const msg = [...allMessages];
    msg.push({
      fromSelf: true,
      message: message,
    });
    setAllMessages(msg);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("message-recieve", (message) => {
        const msg = [...allMessages];
        msg.push({
          fromSelf: false,
          message: message,
        });
        setAllMessages(msg);
      });
    }
  }, [allMessages]);
  return (
    <>
      {currentChat && (
        <div className="mainMessageChat">
          <div className="chatHeader">
            <div className="userDetails">
              <h4>
                {" "}
                <Link to="" className="userName">
                  {currentChat.username}
                </Link>{" "}
              </h4>
            </div>
            <div className="userIcons">
              <button className="icon">
                <FiSearch />
              </button>
              <button className="icon">
                <BiPhoneCall />
              </button>
              <button className="icon">
                <BiVideo />
              </button>
              <button className="icon">
                <AiFillInfoCircle />
              </button>
              <button className="icon" title="More">
                <BiDotsVerticalRounded />
              </button>
            </div>
          </div>
          <div className="messageChat">
            {allMessages.map((item, index) => {
              return (
                <div
                  className="mainMessageContainer"
                  key={index}
                  ref={scrollRef}
                >
                  <div className="mainChatMessage">
                    <div
                      className={`message ${
                        item.fromSelf ? "send" : "receive"
                      }`}
                    >
                      <p className="msgIn">{item.message}</p>
                      {item.fromSelf ? (
                        <div className="messageTime">
                          <span className="timeAgo mrg-right">
                            {format(item.createdAt)}
                          </span>
                          <span className="messageUsername">You</span>
                        </div>
                      ) : (
                        <div className="messageTime">
                          <span className="messageUsername mrg-right">
                            {currentChat.username}
                          </span>
                          <span className="timeAgo">
                            {format(item.createdAt)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
          <div className="chatInput">
            <ChatInput handleSendMessage={handleSendMessage} />
          </div>
        </div>
      )}
    </>
  );
};

export default Messages;
