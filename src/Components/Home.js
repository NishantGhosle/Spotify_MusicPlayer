import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUser();
  };

  return (
    <>
      <div className="container my-4 ">
        <h3>Top 10 Songs</h3>
        <table className="table my-4">
          <thead className="table table-dark">
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">Song</th>
              <th scope="col">Artist Name</th>
              <th scope="col">Date of Release</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.songname}</td>
                <td>{user.date}</td>
                <td>
                  <NavLink
                    role="button"
                    className="btn btn-sm btn-primary mx-3"
                    to={`/users/edit/${user.id}`}
                  >
                    {" "}
                    Edit
                  </NavLink>
                  <button
                    className="btn btn-sm btn-danger ml-3"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
