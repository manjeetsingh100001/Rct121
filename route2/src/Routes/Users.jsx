import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function UserPage() {
  // write some custom logic
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [state] = useContext(AuthContext);
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page") || 1));

  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://reqres.in/api/users",
      method: "GET",
      params: {
        page
      }
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    setSearchParams({
      page
    });
  }, [page, setSearchParams]);

  return (
    <div>
      {state.token && <h3> Token: {state.token}</h3>}
      {loading && <div>Loading</div>}
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button
          disabled={page === data?.total_pages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
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

function __Navigate() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/route");
  }, []);

  return <div></div>;
}

// Link -> a tag
// Route -> where the UI gets shown
// Navigate is redirecting a user
