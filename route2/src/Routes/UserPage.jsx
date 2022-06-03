import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useMatch, useParams } from "react-router-dom";

// users/:id
// UsersPage

// products/:id
// ProductPage

function Users() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    axios({
      url: `https://reqres.in/api/users/${params.user_id}`,
      method: "GET"
    })
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [params.user_id]);

  const handleGoBack = () => {};

  return (
    <div>
      <a>
        <div>Hello</div>
      </a>
      {loading && <div>Loading</div>}
      <div style={{ marginBottom: "1rem" }}>
        <img src={data?.avatar} alt="icon" width="50px" />
        <div>Name: {data?.first_name}</div>
        <div>Name: {data?.last_name}</div>
        <div>Email: {data?.email}</div>
      </div>
      {/* {data?.data.map((item) => (
        
      ))} */}
      <button>GO BACK</button>
    </div>
  );
}

export default Users;