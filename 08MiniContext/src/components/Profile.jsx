import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <div>Please Login</div>;
  } else {
    return <h1>Welcome {user.username}</h1>;
  }
};

export default Profile;

//user = { username, password };
