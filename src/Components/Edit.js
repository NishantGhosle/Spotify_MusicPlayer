import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from "react-router-dom";

const Edit = () => {

    let navigate = useNavigate();
    const {id} = useParams();
    console.log(id);

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      });
  
      const { name, username, email } = user;
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      useEffect(() => {
        loadUser();
      },[]);

      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`,user);
        navigate("/home");
      };

      const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
      };

  return (
    <div className="container">
        <h3 className='my-4'>Edit User</h3>
      <form className="container my-3" onSubmit={e => onSubmit(e)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Enter your name 
          </label>
          <input
            type="text"
            className="form-control w-25"
            id="Name"
            aria-describedby="textHelp"
            name="name"
            value={name}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
          Username
          </label>
          <input
            type="text"
            className="form-control w-25"
            id="exampleInputUsername"
            name="username"
            value={username}
            onChange={e => onInputChange(e)}
          />
        </div><div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control w-25 "
            id="exampleInputEmail"
            name="email"
            value={email}
            onChange={e => onInputChange(e)}
          />
        </div>
       <br />
        <button type="submit" className="btn btn-dark btn-sm">
          Update User
        </button>
      </form>
      </div>
  )
}

export default Edit;