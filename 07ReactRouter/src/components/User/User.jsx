import React from "react";
import { useParams } from "react-router-dom";

function User(props) {
  const { id } = useParams();
  return (
    <div className="text-center bg-slate-500 text-white p-4 text-4xl">
      user: {id}
    </div>
  );
}

export default User;
