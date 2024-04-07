import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-700">
      <div className="bg-white shadow-md rounded px-5 py-5 mb-4 w-4/12">
        <div className="w-50 border bg-white shadow px-3 py-1 rounded">
          <h2 className="block mb-2 text-xl font-medium text-gray-900 text-center ">
            Details of User
          </h2>
          <div className=" font-bold">
            <div className="mb-2 flex justify-between ">
              <h1>Name: </h1>
              <span >{data.name}</span>
            </div>
            <div className="mb-2 flex  justify-between">
              <h1>Email: </h1>
              <span>{data.email}</span>
            </div>
            <div className="mb-2 flex  justify-between">
              <h1>Phone: </h1>
              <span>{data.phone}</span>
            </div>
          </div>
          <div className="flex justify-end ">
            <Link
              to={`/update/${id}`}
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-3 m-2 rounded "
            >
              Edit
            </Link>
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded px-3 mx-1 "
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
