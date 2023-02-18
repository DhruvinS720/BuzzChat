import React, { useState, useEffect } from "react";
import "./Contacts.css";
import { HiPlus } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "../../components/AxiosInstance/AxiosInstance";

const Contacts = ({ contacts, currentUser, changeChat }) => {
  const [currentSelected, setCurrentSelected] = useState(null);
  const [currentUsername, setCurrentUsername] = useState(null);
  const navigate = useNavigate();

  const chageCurrentChat = (index, item) => {
    setCurrentSelected(index);
    changeChat(item);
  };

  useEffect(() => {
    if (currentUser) {
      setCurrentUsername(currentUser.username);
    }
  }, [currentUser]);

  const handleLogOut = () => {
    axios
      .put(`/user/updateUserOnlineStatus/${currentUser._id}`, {
        isOnline: false,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.clear();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {currentUsername ? (
        <div className="position-relative">
          {" "}
          <div className="chatWrapper">
            <h4 className="chatTitle">
              Buzz{" "}
              <button className="addContactbtn" title="Add contact">
                <HiPlus className="plusIcon" />
              </button>
            </h4>
            <div className="usersSearch">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search here.."
              />
              <button className="searchIcon">
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="userListContainer">
            {contacts.map((item, index) => {
              return (
                <div
                  className={"user"}
                  role="button"
                  onClick={() => {
                    chageCurrentChat(index, item);
                  }}
                  key={index}
                >
                  <h6
                    className={`userName ${
                      index === currentSelected ? "selected" : ""
                    }`}
                  >
                    {item.username}
                  </h6>
                </div>
              );
            })}
          </div>
          <div className="Logout">
            <button className="logoutBtn" onClick={() => handleLogOut()}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Contacts;
