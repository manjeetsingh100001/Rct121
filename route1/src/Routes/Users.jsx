import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://reqres.in/api/users",
      method: "GET"
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {loading && <div>Loading</div>}

      {data?.data.map((item) => (
        <div style={{ marginBottom: "1rem" }} key={item.id}>
          <div>Name: {item.first_name}</div>
          <div>Email: {item.email}</div>
          <Link to={`/users/${item.id}`}>See More</Link>
        </div>
      ))}
    </div>
  );
}

export default UserPage;
