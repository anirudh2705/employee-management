import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


function Update() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [value, setValue] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/" + id)
      .then((res) => {setValue(res.data)})
      .catch((err) => console.log(err));
  }, []);

  const updateHandler = (event) => {
    event.preventDefault()
    axios.put('http://localhost:3000/user/' + id, value)
    .then((res) => {
      alert('User updated successfully!')
      navigate('/')
    })
    

  }

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-700">
      <div className="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4 w-4/12">
        <h1 className="block mb-2 text-xl font-medium text-gray-900 text-center ">
          Edit User
        </h1>
        <form onSubmit={updateHandler} >
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mt-2"
              htmlFor="name"
            >
              User Name
            </label>
            <input
              value={value.name}
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              placeholder="Jhon"
              onChange={(e) => {setValue({...value, name: e.target.value})}}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mt-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={value.email}
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              placeholder="abc@xyz.com"
              onChange={(e) => {setValue({...value, email: e.target.value})}}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mt-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              value={value.phone}
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phone"
              placeholder="9563258456"
              onChange={(e) => {setValue({...value, phone: e.target.value})}}
            />
          </div>
          <div className="flex items-center justify-between py-3">
            <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded  ">
              Update
            </button>
            <Link
              className="bg-blue-400 hover:bg-blue-500 rounded py-1 px-3 mx-1 "
              to={"/"}
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update
