import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import axios from "../../components/AxiosInstance/AxiosInstance";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Contacts from "../../components/Contacts/Contacts";
import Loader from "../../components/Loader/Loader";
import Welcome from "../../components/Welcome/Welcome";
import Messages from "../../components/Messages/Messages";
import { io } from "socket.io-client";
import { host } from "../../components/ApiHost/ApiHost";

const Chat = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const navigate = useNavigate();
  const socket = useRef();

  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/login");
    } else {
      const setLoginUser = async () => {
        setCurrentUser(await JSON.parse(localStorage.getItem("userData")));
      };
      setLoginUser();
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  const data = () => {
    if (currentUser) {
      setLoader(true);
      axios
        .get(`/user/getAllUsers/${currentUser._id}`)
        .then(async (response) => {
          setContacts(response.data.data);
          setLoader(false);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            localStorage.clear();
            navigate("/login");
          } else {
//             console.log(error);
          }
        })
        .finally(() => {
          setLoader(false);
        });
    }
  };

  useEffect(() => {
    return data();
  }, [currentUser, currentChat]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Row className="chatContainer gx-0">
          <Col xl={2} md={3} className="otherUsersContainer">
            {currentUser && (
              <Contacts
                contacts={contacts}
                currentUser={currentUser}
                changeChat={handleChatChange}
              />
            )}
          </Col>
          <Col xxl={10} md={9} className="messageContainer">
            {currentChat === null ? (
              <Welcome currentUser={currentUser} />
            ) : (
              <Messages
                currentUser={currentUser}
                currentChat={currentChat}
                socket={socket}
              />
            )}
          </Col>
        </Row>
      )}
    </>
  );
};

export default Chat;
