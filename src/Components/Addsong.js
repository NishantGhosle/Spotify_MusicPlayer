import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addsong() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    songname: "",
    date: "",
  });

  const { name, songname, date } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    navigate("/home");
  };

  return (
    <>
      <div className="container">
        <h3 className="my-4">Add Song</h3>
        <form className="container my-3" onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Song Name
            </label>
            <input
              type="text"
              className="form-control w-25"
              id="Name"
              aria-describedby="textHelp"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputText" className="form-label">
              Artist Name
            </label>
            <input
              type="text"
              className="form-control w-25"
              id="Name"
              aria-describedby="textHelp"
              name="songname"
              value={songname}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputDate" className="form-label">
              Date Released
            </label>
            <input
              type="date"
              className="form-control w-25"
              id="exampleInputDate"
              name="date"
              value={date}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-sm ">
            Cancel
          </button>
          <button type="submit" className="btn btn-dark btn-sm ms-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Addsong;
