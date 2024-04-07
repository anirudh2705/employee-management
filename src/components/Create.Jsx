import react, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: ""
    
  });

  const navigate = useNavigate()

  // const randomId = () => {
  //   const rId = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  //   rId = rId.toString()
  //   return rId
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/user', values)
    .then(res => {
      // console.log(res)
      alert("User Created Successfully")
      navigate("/")
      // setValues({...values, id: randomId})
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-700">
      <div className="bg-white shadow-md rounded px-8 pt-4 pb-4 mb-4 w-4/12">
        <h1 className="block mb-2 text-xl font-medium text-gray-900 text-center ">
          Add New User
        </h1>
        <form onSubmit={handleSubmit} >
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mt-2"
              htmlFor="name"
            >
              User Name
            </label>
            <input
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              placeholder="Jhon"
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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              placeholder="abc@xyz.com"
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
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phone"
              placeholder="9563258456"
            />
          </div>
          <div className="flex items-center justify-between py-3">
            <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded  ">
              Submit
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
  );
}

export default Create;
