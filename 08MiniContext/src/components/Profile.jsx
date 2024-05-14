import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (user) {
    return <h1>welcome {user.username}</h1>;
  } else {
    return <h1>please login</h1>;
  }
}

export default Profile;
//user = { username, password };
