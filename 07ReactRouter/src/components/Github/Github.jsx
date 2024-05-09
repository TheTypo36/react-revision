import { React } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // useEffect(() => {
  //   setURL(BaseUrl + name);
  //   fetch(URL)
  //     .then((Response) => Response.json())
  //     .then((Response) => setData(Response));
  // }, [URL]);
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

export const githubLoaderInfo = async () => {
  const response = await fetch("https://api.github.com/users/TheTypo36");
  return response.json();
};
