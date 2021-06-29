import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import jwt from "jsonwebtoken"
import { Button } from "react-bootstrap";
import axios from "axios";
import "./profile.css";
import { useSelector } from "react-redux";

export default function Profile() {
  const [userInfo, setUserInfo] = useState("");
  const history = useHistory();
  const token = useSelector(state => state.login.token);


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}users`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setUserInfo(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [token]);

  return (
    <>
      {userInfo ? (
        <div className="profile-information">
          <p id="your-information">Profile Info</p>
          <div className="user-info">
            <div className="info">
              <p>
                <span> Full Name: </span>
                {userInfo[0].displayName}
              </p>
              <p>
                <span>age: </span>
                {userInfo[0].age}
              </p>

              <p>
                {" "}
                <span>Email: </span>
                {userInfo[0].email}
              </p>
              <p>
                {" "}
                <span>Gender:</span> {userInfo[0].gender}
              </p>
              <p>
                {" "}
                <span>city:</span> {userInfo[0].city}
              </p>
            </div>
           <div> <Button id="editButton" onClick={()=>{history.push("edit-profile")}} >edit profile</Button> 
           <Button id="addBusinessButton" onClick={()=>{history.push(`/profile/addBusiness`)}} >Add a business</Button>
           </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
