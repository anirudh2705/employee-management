import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'


function Home() {

  const navigate = useNavigate()

  const [data, setData] =  useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/user")
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete = (id) => {
    const confirm = window.confirm('The user will be deleted')
    if(confirm){
      axios.delete('http://localhost:3000/user/' + id)
      .then(res => (
        navigate('/')
      ))
      .catch((err) => {
        console.log(err)
      })
    }

  }

  return (
    <div className="flex flex-col justify-center items-center bg-zinc-700 h-100">
      <h1 className="text-neutral-50 text-4xl my-4">List of Users</h1>
      <div className="w-auto rounded bg-white border shadow p-4 my-6">
        <div className="flex justify-end px-5 text-blue-700 ">
          <Link className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 mb-1 px-3 rounded" to={"/create"}>Add User</Link>
        </div>
        <table className="w-full table-auto shadow">
          <thead >
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((data, index) => (
                <tr key={index} className="dd:bg-white odd:dark:bg-gray-200 even:bg-gray-50">
                  <td className="px-3 py-2">{data.id}</td>
                  <td className="px-3 py-2">{data.name}</td>
                  <td className="px-3 py-2">{data.email}</td>
                  <td className="px-3 py-2">{data.phone}</td>
                  <td className="px-3 py-2">
                    <Link to={`/read/${data.id}`} className="bg-blue-300 hover:bg-blue-400 rounded py-1 px-3 mx-1 ">Read</Link>
                    <Link to={`/update/${data.id}`} className="bg-blue-400 hover:bg-blue-500 rounded py-1 px-3 mx-1 ">Edit</Link>
                    <button onClick={(e) => {handleDelete(data.id)}} className="bg-red-400 hover:bg-red-500 rounded py-1 px-3 mx-1 ">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
