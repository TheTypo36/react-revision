import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Github(props) {
  const [URL, setURL] = useState("https://api.github.com/users/TheTypo36");
  const { name } = useParams();
  const [data, setData] = useState({});
  const BaseUrl = "https://api.github.com/users/";
  useEffect(() => {
    setURL(BaseUrl + name);
    fetch(URL)
      .then((Response) => Response.json())
      .then((Response) => setData(Response));
  }, [URL]);
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Id:{data.login}
      </div>
      <img src={data.avatar_url} />
    </>
  );
}

export default Github;
